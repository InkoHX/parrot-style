module.exports = {
  env: {
    browser: true
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    './.eslintrc.json',
    'plugin:react/recommended',
    'plugin:jsx-a11y/strict'
  ],
  rules: {
    'react/jsx-indent': ['error', 2, { 'checkAttributes': true, 'indentLogicalExpressions': true }],
    'react/jsx-indent-props': ['error', 2],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
    
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        './typescript.js'
      ]
    }
  ]
}
