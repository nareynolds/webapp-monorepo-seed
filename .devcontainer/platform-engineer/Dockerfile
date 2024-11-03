# Available images in the `src` directory of this repo: https://github.com/devcontainers/images/tree/main
# See here for image contents: https://github.com/microsoft/vscode-dev-containers/blob/main/containers/ubuntu/.devcontainer/base.Dockerfile
ARG VARIANT="ubuntu"
FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}

# Install Volta for managing Node.js versions. It needs to be moved to the user's home directory to work.
USER vscode
RUN curl https://get.volta.sh | bash 
    #mv /root/.volta /home/vscode/ && \
    #chown -R vscode:vscode /home/vscode/.volta  && \
    #chmod -R u=rwx /home/vscode/.volta

#ENV PATH "${PATH}:/home/vscode/.volta/bin"
USER root
