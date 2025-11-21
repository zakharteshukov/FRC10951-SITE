# Deployment Configuration

This folder contains all Docker and deployment-related configuration files.

## Files

- **Dockerfile** - Multi-stage Docker build configuration for the SvelteKit application
- **docker-compose.yml** - Docker Compose configuration for running the application
- **nginx.conf** - Nginx configuration file (if using Nginx as reverse proxy)

## Quick Start

### Using Docker Compose

From the project root:

```bash
# Build and start the container
docker-compose -f deployment/docker-compose.yml up -d

# View logs
docker-compose -f deployment/docker-compose.yml logs -f

# Stop the container
docker-compose -f deployment/docker-compose.yml down
```

### Using the Deployment Script

From the project root:

```bash
# Run the automated deployment script
./scripts/deploy.sh
```

The deployment script will:
1. Pull latest changes from git
2. Update dependencies
3. Build the Docker image
4. Restart the container

## Configuration

### Environment Variables

You can customize the deployment using environment variables:

- `NAME` - Container name (default: `sveltekit-website`)
- `HOST_PORT` - Host port mapping (default: `3001`)

Example:

```bash
NAME=my-website HOST_PORT=8080 docker-compose -f deployment/docker-compose.yml up -d
```

### Ports

- Container port: `3000` (internal)
- Host port: `3001` (default, configurable via `HOST_PORT`)

## Health Check

The container includes a health check endpoint at `/api/health`. Docker will automatically monitor this endpoint.

## Notes

- The Dockerfile uses a multi-stage build for optimal image size
- The build context is set to the project root (parent directory)
- All deployment files are kept in this folder for organization

