# parrot-style

My code style.

## Install

```bash
npm install -D @inkohx/eslint-config-codestyle
```

## JavaScript

### Edit .eslintrc.json

```json
{
  "extends": "@inkohx/eslint-config-codestyle"
}
```

## TypeScript

### Install plugins

```bash
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

### Edit .eslintrc.json

```json
{
  "extends": "@inkohx/eslint-config-codestyle",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
