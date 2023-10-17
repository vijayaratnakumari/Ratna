FROM node:latest

# Create a working directory
WORKDIR /root/nodejs

# Copy your start.sh, environment.txt, package.json, and server.js into the container
COPY start.sh .
COPY environment.txt .env
COPY package.json .
COPY server.js .

# Install npm (no need to specify version)
RUN npm install -g npm

# Set executable permissions on the start.sh script
RUN chmod +x start.sh

# Expose any necessary ports (if your app uses one)
EXPOSE 3000

# Define the entry point for your application
CMD ["./start.sh", "run"]
