# parrot-style

My code style.

## Install

```bash
npm install -D @inkohx/eslint-config-codestyle
```

### with React

```bash
npm install -D eslint-plugin-react-hooks eslint-plugin-react eslint-plugin-jsx-a11y
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
  "extends": "@inkohx/eslint-config-codestyle/typescript",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
