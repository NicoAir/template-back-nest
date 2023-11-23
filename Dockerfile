# Start from a Node.js version
FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Build the application
RUN npm run build

# Expose the application on port 3000
EXPOSE 3000

# Run the application
CMD [ "npm", "run", "start:prod" ]