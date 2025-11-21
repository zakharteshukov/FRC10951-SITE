#!/bin/bash

# FRC-10951 Website Deployment Script
# This script pulls latest changes, rebuilds Docker image, and restarts the container

set -e  # Exit on error

echo "🚀 Starting FRC-10951 website deployment..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored messages
print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${YELLOW}→${NC} $1"
}

# Step 1: Ensure Dockerfile has package-lock.json copy (before stashing)
print_info "Verifying Dockerfile configuration..."
DOCKERFILE_NEEDS_FIX=false
if ! grep -q "package-lock.json" deployment/Dockerfile; then
    DOCKERFILE_NEEDS_FIX=true
    print_info "Dockerfile needs package-lock.json fix (will apply after pull)..."
fi

# Step 2: Check for local changes and stash if needed (but keep Dockerfile fix)
print_info "Checking for local changes..."
HAS_LOCAL_CHANGES=false
if ! git diff-index --quiet HEAD --; then
    # Check if only Dockerfile is modified (our fix)
    MODIFIED_FILES=$(git diff --name-only HEAD)
    if [ "$MODIFIED_FILES" = "deployment/Dockerfile" ] && [ "$DOCKERFILE_NEEDS_FIX" = true ]; then
        print_info "Only Dockerfile fix detected, will reapply after pull..."
        HAS_LOCAL_CHANGES=false
    else
        print_info "Local changes detected, stashing them..."
        git stash push -m "Auto-stash before deployment $(date +%Y-%m-%d_%H:%M:%S)"
        HAS_LOCAL_CHANGES=true
    fi
fi

# Step 3: Pull latest changes
print_info "Pulling latest changes from repository..."
if git pull origin main; then
    print_success "Successfully pulled latest changes"
else
    print_error "Failed to pull changes"
    if [ "$HAS_LOCAL_CHANGES" = true ]; then
        print_info "Restoring stashed changes..."
        git stash pop || true
    fi
    exit 1
fi

# Step 4: Show latest commit
LATEST_COMMIT=$(git log -1 --oneline)
print_info "Latest commit: $LATEST_COMMIT"

# Step 5: Apply Dockerfile fix if needed
if ! grep -q "package-lock.json" deployment/Dockerfile; then
    print_info "Applying Dockerfile fix..."
    # Backup Dockerfile
    cp deployment/Dockerfile deployment/Dockerfile.bak 2>/dev/null || true
    
    # Add package-lock.json copy line if missing
    sed -i '/COPY --from=builder \/app\/package.json/a COPY --from=builder /app/package-lock.json ./package-lock.json' deployment/Dockerfile
    
    print_success "Dockerfile updated"
fi

# Step 6: Update package-lock.json to ensure it's in sync
print_info "Ensuring package-lock.json is complete and in sync..."
# Always run npm install to ensure package-lock.json is complete with all transitive dependencies
# This fixes issues where the repo's package-lock.json might be missing dependencies
print_info "Updating package-lock.json..."
npm install > /dev/null 2>&1

# Check if yaml@2.x is needed and ensure it's in lock file
if grep -q "tailwindcss" package.json; then
    print_info "Checking for yaml dependency (required by tailwindcss)..."
    # Check if we have yaml@2.x in lock file
    if ! grep -q '"yaml".*"2\.' package-lock.json && ! grep -q '"yaml".*"version".*"2\.' package-lock.json; then
        print_info "yaml@2.x not found, ensuring it's installed..."
        # Install yaml explicitly to satisfy tailwindcss requirement
        npm install yaml@latest > /dev/null 2>&1 || true
        # Regenerate lock file
        npm install > /dev/null 2>&1
    fi
fi

# Verify it's in sync
if npm ci --dry-run > /dev/null 2>&1; then
    print_success "package-lock.json is complete and verified"
else
    print_error "package-lock.json verification failed after update"
    print_info "Running npm ci to see detailed error..."
    npm ci --dry-run 2>&1 | head -10
    print_error "Please check package.json and package-lock.json manually"
    exit 1
fi

# Step 7: Verify package-lock.json is in build context
print_info "Verifying package-lock.json will be included in Docker build..."
if [ ! -f package-lock.json ]; then
    print_error "package-lock.json not found!"
    exit 1
fi
# Check if yaml is in the lock file
if ! grep -q '"yaml"' package-lock.json; then
    print_error "yaml not found in package-lock.json after update!"
    print_info "Forcing npm install again..."
    npm install > /dev/null 2>&1
fi

# Step 8: Build Docker image (with --no-cache to ensure fresh build)
print_info "Building Docker image (this may take a few minutes)..."
if docker-compose -f deployment/docker-compose.yml build --no-cache; then
    print_success "Docker image built successfully"
else
    print_error "Docker build failed"
    print_info "Checking package-lock.json content..."
    if grep -q "yaml.*2\." package-lock.json; then
        print_info "yaml@2.x found in package-lock.json"
    else
        print_error "yaml@2.x NOT found in package-lock.json - this is the problem!"
        print_info "Try running: npm install && npm install yaml@latest --save"
    fi
    if [ "$HAS_LOCAL_CHANGES" = true ]; then
        print_info "Restoring stashed changes..."
        git stash pop || true
    fi
    exit 1
fi

# Step 9: Stop and remove old container
print_info "Stopping old container..."
docker-compose -f deployment/docker-compose.yml down 2>/dev/null || true

# Step 10: Start new container
print_info "Starting new container with updated image..."
if docker-compose -f deployment/docker-compose.yml up -d; then
    print_success "Container started successfully"
else
    print_error "Failed to start container"
    exit 1
fi

# Step 11: Wait for container to be healthy
print_info "Waiting for container to be ready..."
sleep 5

# Step 12: Check container status
if docker ps | grep -q "sveltekit-website\|frc10951"; then
    CONTAINER_NAME=$(docker ps --format "{{.Names}}" | grep -E "sveltekit-website|frc10951" | head -1)
    print_success "Container '$CONTAINER_NAME' is running"
    
    # Check health endpoint
    if curl -s http://localhost:3001/api/health > /dev/null 2>&1; then
        print_success "Health check passed - website is responding"
    else
        print_info "Health check endpoint not yet ready (this is normal during startup)"
    fi
else
    print_error "Container is not running"
    exit 1
fi

# Step 13: Show container info
echo ""
print_info "Container information:"
docker ps --filter "name=sveltekit-website" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}" || \
docker ps --filter "name=frc10951" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo ""
print_success "Deployment complete! 🎉"
print_info "Website is available at: http://localhost:3001"
echo ""

# Restore stashed changes if they were stashed
if [ "$HAS_LOCAL_CHANGES" = true ]; then
    print_info "Note: Your local changes were stashed. Run 'git stash list' to see them."
    print_info "To restore: 'git stash pop'"
fi

