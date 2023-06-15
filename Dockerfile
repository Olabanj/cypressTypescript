FROM cypress/browsers:node18.12.0-chrome107

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Start the web application
CMD ["npx","cypress","run"]

