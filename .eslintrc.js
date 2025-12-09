module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    // camelcase: 'error',
    // 'comma-dangle': ['error', 'always-multiline'],
    // indent: [
    //   'error',
    //   2,
    // {
    //   SwitchCase: 1,
    //   ignoredNodes: ['ConditionalExpression', 'PropertyDefinition']
    // }
    // ],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'max-len': ['error', { code: 140 }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'off',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'warn'
    // '@typescript-eslint/naming-convention': ['error']
  }
};
