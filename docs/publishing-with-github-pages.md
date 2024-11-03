---
title: Publishing with Github Pages
---

# Why?
The knowledge needed to utilize and steward a codebase should never be lost, and the overhead of accessing and updating that knowledge should be as low as possible.

# How?
- A repo should be entirely self documenting.
- The documentation should be easy to access and navigate.
- Creating/Updating the documentation should be easy and have establish conventions to follow.
- "Publishing" this documentation should be as cheap as possible.

# What?
- All documentation for how this starter repo is setup and intended to be used should be documented and published using Github Pages.
- All documentation detailing this repo and its use will be [published with Github Pages]((https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)) using the out-of-the-box Jekyll build, and [minimal customization](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll).
- All Pages will be in the `/docs` directory to isolate it from all code.
- It is configured to publish only the `main` branch, because that will always be this repo's current "source of truth".
- All Markdown files should be automatically formatted with Githooks and enforced via CI, to minimize unnecessary differentiation.
- In an enterprise environment, these pages should be made private.
