# Stage 1: Build the Astro application
#-------------------------------------
# Use an official Node.js runtime. Choose a specific LTS version (e.g., 20).
# Using alpine for a smaller image size.
FROM node:23-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and lock file (package-lock.json, yarn.lock, or pnpm-lock.yaml)
# Copying these first leverages Docker cache if dependencies haven't changed
COPY package*.json ./
# Or uncomment the lines below if using yarn or pnpm
# COPY package.json yarn.lock ./
# COPY package.json pnpm-lock.yaml ./

# Install ALL dependencies needed for the build (including devDependencies)
# Adjust based on your package manager
RUN npm install
# Or: RUN yarn install --frozen-lockfile
# Or: RUN pnpm install --frozen-lockfile

# Copy the rest of your application source code
COPY . .

# Set NODE_ENV to production for the build step (good practice)
ENV NODE_ENV=production

# Build the Astro site. The 'standalone' mode will bundle necessary dependencies.
RUN npm run build
# Or: RUN yarn build
# Or: RUN pnpm build


# Stage 2: Run the Node.js server
#---------------------------------
# Use the same Node.js version (or compatible) alpine image for the final stage
FROM node:23-alpine

# Set the working directory
WORKDIR /app

# Set NODE_ENV to production for runtime
ENV NODE_ENV=production

# Copy the entire build output from the 'builder' stage.
# This includes the server entry point, client assets, and the necessary
# node_modules bundled by the 'standalone' mode.
COPY --from=builder /app/dist ./dist

# Set runtime environment variables for the Node server
# HOST=0.0.0.0 makes the server accessible from outside the container
ENV HOST=0.0.0.0
# PORT=4321 is the default for Astro's preview/Node adapter.
# Change this if your app is configured differently or expects a different port.
ENV PORT=4321

# Expose the port the application will run on inside the container
EXPOSE ${PORT}

# Command to start the Node.js server.
# Double-check the path 'dist/server/entry.mjs' matches the output in your
# project after running `npm run build`. This is the typical path for the Node adapter.
CMD ["node", "dist/server/entry.mjs"]
