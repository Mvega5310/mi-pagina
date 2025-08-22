# Multi-stage Dockerfile for FriendSoft React SSR Application

# Stage 1: Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci --silent

# Copy source code
COPY . .

# Build the application
RUN npm run build:ssr

# Stage 2: Production stage
FROM node:18-alpine AS production

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

# Create app user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production --silent && npm cache clean --force

# Copy built application from builder stage
COPY --from=builder --chown=nextjs:nodejs /app/dist/client ./dist/client
COPY --from=builder --chown=nextjs:nodejs /app/dist/server ./dist/server
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copy necessary source files for SSR runtime
COPY --from=builder --chown=nextjs:nodejs /app/src/ssr ./src/ssr
COPY --from=builder --chown=nextjs:nodejs /app/src/locales ./src/locales
COPY --from=builder --chown=nextjs:nodejs /app/src/i18n.ts ./src/i18n.ts

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Health check (use dynamic PORT)
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "const p=process.env.PORT||3000; require('http').get(`http://localhost:${p}/health`, (res)=>{ process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the SSR server with dumb-init using tsx via --import (replaces deprecated --loader)
CMD ["dumb-init", "node", "--enable-source-maps", "--import=tsx", "src/ssr/server.ts"]

# Labels for metadata
LABEL maintainer="FriendSoft Team"
LABEL version="1.0.0"
LABEL description="FriendSoft React SSR Application"
LABEL org.opencontainers.image.source="https://github.com/friendsoft/mi-pagina"