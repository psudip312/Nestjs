# Use the official Node.js image with Yarn as a base image
FROM node:latest

# Install Yarn globally

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 3005

# Define the command to run your application
CMD ["yarn", "run", "start:dev"]
