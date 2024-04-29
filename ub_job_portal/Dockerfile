# Use official Node.js image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining source code to the working directory
COPY . .

# Expose port 3000 (adjust if your React app runs on a different port)
EXPOSE 3000

# Define the command to run your React app
CMD ["npm", "start"] 