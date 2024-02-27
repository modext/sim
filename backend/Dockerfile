# # Use an official Node runtime as a parent image
# FROM node:14

# # Set the working directory in the container
# WORKDIR /usr/src/app

# # Copy the current directory contents into the container at /usr/src/app
# COPY . .

# # Install any needed packages specified in package.json
# RUN npm install

# # Make port 3000 available to the world outside this container
# EXPOSE 3000

# # Define environment variable
# ENV NODE_ENV production

# # Run npm start when the container launches
# CMD ["npm", "start"]

# Use the official Node.js 14 image as a base image
FROM node:16

# Set the working directory within the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json/yarn.lock files into the container
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies in the container
RUN npm install || yarn install

# Copy the rest of your application's code into the container
COPY . .

# Use tsc to compile your TypeScript to JavaScript
# RUN npx tsc
RUN npm run build
# Your application will bind to port 3000, so use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 3000

# Define the command to run your app using node (not npm start, to avoid an extra process)
CMD ["npm", "start"]
