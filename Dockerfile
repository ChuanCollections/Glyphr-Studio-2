# Use Node.js as the base image
FROM node:22-alpine AS builder

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the entire source code into the image
COPY . .

# Build the React application
RUN pnpm run build

# Use Nginx to serve the application
FROM nginx:alpine AS production

# Copy the built files from the dist directory into the Nginx directory
COPY --from=builder /app/dist/index.html /usr/share/nginx/html
COPY --from=builder /app/dist/assets /usr/share/nginx/html/app/assets

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
