# Available images in the `src` directory of this repo: https://github.com/devcontainers/images/tree/main
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/blob/main/containers/ubuntu/.devcontainer/base.Dockerfile
ARG VARIANT="ubuntu"
FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}

# copy the postCreateCommand.sh script for execution after the container is created
COPY postCreateCommand.sh /home/vscode/postCreateCommand.sh

# Switching to the user who will be using the container.
USER vscode

# Install Volta for managing Node.js versions.
RUN curl https://get.volta.sh | bash

# Switching back to root, just in case
USER root
