module.exports = {
  extends: [
    './.eslintrc.json',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
        'brace-style': 'off',
        'func-call-spacing': 'off',
        'indent': 'off',
        'no-extra-parens': 'off',
        'quotes': 'off',
        'semi': 'off',
        'no-unused-vars': 'off',
        'default-param-last': 'off',
        'no-use-before-define': 'off',
        'camelcase': 'off',
        'new-cap': 'off',
        'no-confusing-arrow': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false,
            classes: false,
            enums: false,
            variables: false,
            typedefs: false
          }
        ],

        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/consistent-type-assertions': [
          'error',
          {
            assertionStyle: 'as',
            objectLiteralTypeAssertions: 'never'
          }
        ],
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/brace-style': ['error'],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/explicit-member-accessibility': 'error',
        '@typescript-eslint/func-call-spacing': 'error',
        '@typescript-eslint/indent': ['error', 2],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            'multiline': {
              'delimiter': 'comma',
              'requireLast': false
            },
            'singleline': {
              'delimiter': 'comma',
              'requireLast': false
            }
          }
        ],
        '@typescript-eslint/no-extra-parens': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': [
          'error',
          {
            ignoreConditionalTests: false,
            ignoreMixedLogicalExpressions: false
          }
        ],
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/no-namespace': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/semi': ['error', 'never'],
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-this-alias': [
          'error',
          {
            allowDestructuring: true
          }
        ],
        '@typescript-eslint/no-extraneous-class': [
          'error',
          {
            allowWithDecorator: true
          }
        ],
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'default',
            format: ['strictCamelCase'],
            trailingUnderscore: 'forbid',
            leadingUnderscore: 'forbid'
          },
          {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['strictCamelCase'],
            leadingUnderscore: 'require'
          },
          {
            selector: 'typeLike',
            format: ['StrictPascalCase']
          },
          {
            selector: 'variableLike',
            format: ['strictCamelCase', 'UPPER_CASE']
          }
        ]
      }
    }
  ]
}
