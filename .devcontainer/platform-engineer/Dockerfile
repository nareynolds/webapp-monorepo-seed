# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.238.1/containers/ubuntu/.devcontainer/base.Dockerfile

# Available images in the `src` directory of this repo: https://github.com/devcontainers/images/tree/main
ARG VARIANT="ubuntu"
FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}

# Install Volta for managing Node.js versions. It needs to be moved to the user's home directory to work.
RUN sudo apt-get update && \
    curl https://get.volta.sh | bash && \
    mv /root/.volta /home/vscode/

ENV PATH "$PATH:/home/vscode/.volta/bin"
