# Create a Node Image to build the Production App
FROM node:18.12

# Set the Working Directory
WORKDIR /src/app

# Copy the Package Descriptor
COPY package*.json ./

# Install the Dependencies
RUN npm install

# Copy all file from source to workdir
COPY . .

# Build
RUN npm run build

# Expose the Port used by Api Gateway
EXPOSE 26799

# Run the serve
CMD ["node", "dist/main"]
