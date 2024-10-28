# Use the official Node.js image with the specified version
FROM node:20.13.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
