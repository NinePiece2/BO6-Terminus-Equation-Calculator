# Use the official Node.js 18 image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY UI/package.json UI/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY UI .

# Build the React application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]