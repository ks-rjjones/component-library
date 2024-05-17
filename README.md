# BatCode Component Library (Vite + React)

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)

## Prerequisites

To work on this repository you should use the following tools to have a pleasant developer experience. This repository relies on the ESLint and Prettier extensions to be installed and enabled for consistent type checking and formatting across multiple developers. Instead of npm this project utilizes pnpm as a package manager, so you should also be using pnpm if you intend to contribute.

!! NPM AND PNPM DO NOT SHARE LOCK FILES !!

This means you have to use pnpm to utilize the existing lock file generated for this repository. Using the existing lock file is important for dependency version locking, reproducible builds, faster installation, audit trails, and [more](https://docs.npmjs.com/cli/v6/configuring-npm/package-locks).

- VSCode (https://code.visualstudio.com/)
- ESLint (https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Prettier Extension (https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- pnpm (https://pnpm.io/installation)

- ## Getting Started

Navigate to the project folder

```bash
cd component-library
```

Run a locally (this will install dependencies)

```bash
pnpm run dev
```
