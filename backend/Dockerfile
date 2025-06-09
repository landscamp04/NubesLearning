# This uses the official node.js base image
FROM node:18

# This sets the working directory
WORKDIR /app

# Copies package.json and installs dependencies
COPY package.json ./
RUN npm install

# Copies app src
COPY . .

# Set the PORT environment variable
ENV PORT=4000

# Exposes the port
EXPOSE 4000

# Start the application
CMD ["npm", "start"]