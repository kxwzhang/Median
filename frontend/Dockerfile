# Use a Node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json from the root directory to /app
COPY package*.json ./

# Install dependencies
RUN npm install
