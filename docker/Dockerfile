# Step 1: Use official Node image
FROM node:22.18.0-bullseye-slim

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package files from frontend and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Step 4: Copy the rest of your React application code from frontend
COPY frontend/ .

# Step 5: Expose the port your React app runs on
EXPOSE 3000

# Step 6: Start the development server
CMD ["npm", "run", "dev", "--", "--host"]