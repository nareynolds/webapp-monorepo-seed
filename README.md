# Webapp Monorepo Seed

See the detailed explanations of this repo at https://nareynolds.github.io/webapp-monorepo-seed/

## Formatting

Run `pnpm format` to build all projects.

## Linting

Run `pnpm lint` to lint all projects.

## Building

Run `pnpm build` to build all projects.

## Unit Testing

Run `pnpm test` to execute the unit tests for all projects.

## View Project Graph

Run `pnpm graph` to view the dependency graph of the repo

## Developing

## Adding a new "dev" dependency to the workspace

Run `pnpm add -w -D <package>` to install `<package>` as a devDependency.

## Import one workspace package (dependency) into another (dependent)

First, add the dependency the dependent's package.json: `pnpm add @webapp-monorepo-seed/<dependency> --filter <dependent> --workspace`. Then, make sure the package.json's version is set to `*`.

Then, import it in the dependent's file as follows: `import { <whatever> } from '@webapp-monorepo-seed/<dependency>';`
