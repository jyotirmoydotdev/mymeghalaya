FROM ubuntu AS build

# Install dependencies for installing nvm and building the project
RUN apt-get update && apt-get upgrade -y && apt-get install -y curl

# Install nvm, install Node.js (v20), and make nvm available for the rest of the session
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash \
    && export NVM_DIR="$HOME/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    && nvm install 20 \
    && nvm use 20 \
    && npm install -g typescript

# Set working directory
WORKDIR /app 

# Copy package.json files to the container
COPY . .

# Install node modules and build the project
RUN export NVM_DIR="$HOME/.nvm" \
    && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" \
    && npm install \
    && npm run build

# Final stage for the runner
FROM node AS runner

# Set working directory for the final image
WORKDIR /app/

# Copy the built app from the build stage
COPY --from=build /app/ .

# Expose the desired port (optional, based on your app)
EXPOSE 3000:3000

# Run the application (customize as needed)
CMD ["npm", "start"]
