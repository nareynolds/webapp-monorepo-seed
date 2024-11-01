# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.238.1/containers/ubuntu/.devcontainer/base.Dockerfile

# available images in the `src` directory of this repo: https://github.com/devcontainers/images/tree/main
ARG VARIANT="ubuntu"
FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}

# install additional OS packages
RUN sudo apt-get update && \
    # Install Volta for managing Node.js versions
    curl https://get.volta.sh | bash && \
    # Install Pulumi CLI for Infrastructure as Code
    curl https://get.pulumi.com | bash