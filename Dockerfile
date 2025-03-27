# Use an official Node runtime as a parent image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Set the environment to development
ENV NODE_ENV=development

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npm run build

# Expose the port the app runs on (adjust if your Vite dev server uses a different port)
EXPOSE 4173

# Start the Vite development server
CMD ["npm", "run", "preview"]
