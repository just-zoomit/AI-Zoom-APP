# Use an official Node.js runtime as a base image
FROM node:16

# Set the working directory in the container
WORKDIR /home/node/app

# Copy package.json and package-lock.json to the working directory
COPY ./package*.json ./
COPY ./package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code to the working directory
COPY . .

# Expose the port on which your React app will run (usually 3000)
EXPOSE 3000

# Start the React app when the container runs
CMD ["npm", "run", "start-watch"]
