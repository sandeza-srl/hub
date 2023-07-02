# Create a Node Image to build the Production App
FROM node:18.12

# Setting the correct TimeZone (Europe/Rome)
RUN apt-get update && \
    apt-get install -yq tzdata && \
    ln -fs /usr/share/zoneinfo/Europe/Rome /etc/localtime && \
    dpkg-reconfigure -f noninteractive tzdata

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
EXPOSE 3000

# Run the server
CMD ["node", "dist/main"]
