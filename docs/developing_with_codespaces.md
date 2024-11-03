---
title: Developing with Github Codespaces
---

# Why?
We want to minimize the overhead cost of a developer contributing to a repo by making the setup of an IDE fast and effortless, decouple the scale of the IDE resources from the developer's laptop, and maximize security. 

# How?
Automate the creation and setup of a remote IDE by leveraging GitHub Codespaces. This involves defining a development container configuration that includes all necessary tools, dependencies, and settings required for the project. Regular updates and maintenance of the dev container configuration will ensure that the environment remains up-to-date and secure for all developers.

# What?
- **Use GitHub Codespaces**: Provision repository-specific environments that are pre-configured with the necessary tools and dependencies.
- **Define a Custom Dev Container Configuration**: Create a `.devcontainer/devcontainer.json` file that specifies the development environment, including the base image, extensions, and settings.
- **Automate Environment Setup**: Use Dockerfiles and setup scripts to automate the installation of dependencies and configuration of the development environment.
- **Pre-build Environments**: Utilize GitHub's prebuilds feature to reduce the time it takes to start a new codespace by pre-building the environment.
- **Maintain and Update**: Regularly update the dev container configuration to ensure that it includes the latest tools and security patches.
- **Leverage Extensions**: Specify VS Code extensions in the `devcontainer.json` file to enhance productivity and ensure consistency across development environments.
- **Integrate Automated Tests**: Configure the environment to run automated tests, ensuring that code quality is maintained.

By using GitHub Codespaces, we ensure that every developer has a consistent development environment, reducing the "works on my machine" problem. Additionally, it allows developers to work from anywhere without needing a powerful local machine, as the heavy lifting is done in the cloud.