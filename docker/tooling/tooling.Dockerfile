# Define base image
FROM node:14

# Create working directory
WORKDIR /var/www/html

# Define build arguments
ARG USER_ID
ARG GROUP_ID

# Define environment variables
ENV USER_ID=$USER_ID
ENV GROUP_ID=$GROUP_ID
ENV USER_ID=${USER_ID:-1001}
ENV GROUP_ID=${GROUP_ID:-1001}

# Add group and user based on build arguments
RUN addgroup --gid ${GROUP_ID} user
RUN adduser --disabled-password --gecos '' --uid ${USER_ID} --gid ${GROUP_ID} user

# Set user and group of working directory
RUN chown -R user:user /var/www/html

# Update all packages
RUN apt-get update -y --fix-missing

# Install Vue CLI
RUN npm install -g @vue/cli