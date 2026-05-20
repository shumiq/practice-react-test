# Setup

## Prerequisites

- [fnm](https://github.com/Schniz/fnm) (Fast Node Manager)

## Install Node

```sh
fnm install 22
fnm use 22
```

## Install pnpm

```sh
npm install -g pnpm
```

## Install dependencies

```sh
pnpm install
```

## Available commands

| Command                  | Description                     |
| ------------------------ | ------------------------------- |
| `pnpm dev`               | Start dev server                |
| `pnpm storybook`         | Start Storybook                 |
| `pnpm test`              | Run tests with Vitest           |
| `pnpm lint`              | Lint code with ESLint           |
| `pnpm build-storybook`   | Build Storybook for production  |
