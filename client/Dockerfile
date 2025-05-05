# Base image
FROM node:18

# Working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port
EXPOSE 5173

# Default dev command (can be overridden by docker-compose)
CMD ["npm", "run", "dev"]
