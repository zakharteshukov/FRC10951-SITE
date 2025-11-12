FROM node:18.20-alpine AS deps
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

FROM node:18.20-alpine AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js application
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# Export static files (if using static export)
# For now, we'll use standalone mode
RUN mkdir -p .next/standalone .next/static
RUN cp -r public .next/standalone/ 2>/dev/null || true

FROM nginx:alpine AS runner

# Remove default site
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf || true

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/site.conf

# For static export, copy the out directory
# For standalone mode, we'll need to run Node.js
# Let's use a hybrid approach: build static and serve with nginx
# But first, let's check if we should use standalone Node.js instead

# Copy built application
# If using static export, copy from .next/out
# If using standalone, we need Node.js runtime
COPY --from=builder /app/.next/standalone /app/
COPY --from=builder /app/.next/static /app/.next/static
COPY --from=builder /app/public /app/public

# For now, let's use Node.js to run Next.js
# We'll switch to nginx + static export if needed
FROM node:18.20-alpine AS final
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy standalone build
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:3000/api/health >/dev/null || exit 1

# Run as non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

CMD ["node", "server.js"]
