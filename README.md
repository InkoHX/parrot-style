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
  "extends": "@inkohx/eslint-config-codestyle/typescript",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## React

### Install plugins

```bash
npm install -D eslint-plugin-react-hooks eslint-plugin-react eslint-plugin-jsx-a11y
```

### Edit .eslintrc.json

```json
{
  "extends": "@inkohx/eslint-config-codestyle/react"
}
```

### for TSX

#### Install plugins

```bash
npm install -D eslint-plugin-react-hooks eslint-plugin-react eslint-plugin-jsx-a11y @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

#### Edit .eslintrc.json

```json
{
  "extends": "@inkohx/eslint-config-codestyle/react",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
