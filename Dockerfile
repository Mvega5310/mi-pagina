# Multi-stage Dockerfile for FriendSoft React SSR Application

# Stage 1: Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci --silent

# Copy configuration files first
COPY tsconfig*.json vite.config.ts tailwind.config.js postcss.config.js ./

# Copy source code
COPY src ./src
COPY public ./public
COPY index.html ./

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

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Health check (use dynamic PORT)
# HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
#   CMD node -e "const p=process.env.PORT||3000; require('http').get(`http://localhost:${p}/health`, (res)=>{ process.exit(res.statusCode === 200 ? 0 : 1) })"

# Start the SSR server with dumb-init using server
CMD ["dumb-init", "node", "--enable-source-maps", "dist/server/runtime/assets/js/server-787f5489.js"]

# Labels for metadata
LABEL maintainer="FriendSoft Team"
LABEL version="1.0.0"
LABEL description="FriendSoft React SSR Application"
LABEL org.opencontainers.image.source="https://github.com/friendsoft/mi-pagina"