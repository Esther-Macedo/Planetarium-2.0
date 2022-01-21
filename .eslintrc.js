/* eslint-disable linebreak-style */
module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.js'],
      },
    },
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'import/extensions': 'off',
  },
};
