# Stage 0: Build the React app
FROM node:20 as build

# Set working directory
WORKDIR /app

# Set appropriate permissions
RUN chmod -R 755 /app

# Ensure the user running the commands has write access
USER root
# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy all other source files
COPY . .

# Build the app
RUN npm run build

RUN ls -al /app/dist
# Stage 1: Set up Nginx to serve the React build
# FROM nginx:alpine

# # Remove default nginx configuration
# RUN rm /etc/nginx/conf.d/default.conf

# # Copy custom nginx configuration
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# # Copy the build folder from the build stage to Nginx
# COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port Nginx will run on
EXPOSE 5000
