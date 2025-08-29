# NodeJS + ExpressJS + TypeScript

This template offers a minimal configuration to start building a NodeJS backend using ExpressJS and TypeScript.

## Clone

```bash
git clone https://github.com/asraquem00110/mini-todo-app-backend.git
```

## Prerequisites

- Download extension [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in your VSCode.
- Install [node](https://nodejs.org/en) using [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) (check version in [.nvmrc](./.nvmrc))
- Install [pnpm](https://pnpm.io/) (check version in [package.json](./package.json) file look for `packageManager`)
- Create a `.env` file in the root directory and use `.env.example` as a guide for required environment variables.

## Installation

- Install dependencies.

```bash
pnpm i
```

**Development Mode:**

```bash
pnpm dev
```

**Production Mode:**

```bash
pnpm build
pnpm start
```
