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

# Build SvelteKit application
ENV NODE_ENV=production
RUN npm run build

FROM node:18.20-alpine AS final
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy built application
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./package.json

# Install only production dependencies
RUN npm ci --omit=dev

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD wget -qO- http://localhost:3000/api/health >/dev/null || exit 1

# Run as non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 sveltekit
USER sveltekit

CMD ["node", "build"]
