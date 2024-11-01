# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.238.1/containers/ubuntu/.devcontainer/base.Dockerfile

# available images in the `src` directory of this repo: https://github.com/devcontainers/images/tree/main
ARG VARIANT="ubuntu"
FROM mcr.microsoft.com/vscode/devcontainers/base:${VARIANT}

# install additional OS packages
RUN curl https://get.volta.sh | bash && \
    curl https://get.pulumi.com | bash

# Add Volta and Pulumi to PATH
ENV PATH="/root/.volta/bin:/root/.pulumi/bin:${PATH}"