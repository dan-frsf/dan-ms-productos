FROM node:18
WORKDIR /app
# Copy the package.json and package-lock.json files
COPY package*.json ./
# Install production dependencies
RUN npm install --production
# Copy the .env file
COPY .env ./
# Copy the rest of the application code
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]