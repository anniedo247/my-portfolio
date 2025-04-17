module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:jsx-a11y/strict',
    'plugin:styled-components-a11y/strict',
    'plugin:storybook/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'jest-dom',
    'testing-library',
    'jsx-a11y',
    'styled-components-a11y',
    'prettier',
    '@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'always'],
    eqeqeq: ['error', 'smart'],
    quotes: ['error', 'single', { avoidEscape: true }],
    indent: 0,
    complexity: ['error', 20],
    'react/prop-types': 0,
    'prettier/prettier': ['error', { quoteProps: 'preserve' }],
    'react/react-in-jsx-scope': 0, // Using React v17 we don't need to import React in every file.
    'react/no-array-index-key': 2,
    'no-trailing-spaces': 2,
    'react-hooks/exhaustive-deps': 2,
    'no-console': ['error'],
    'quote-props': ['error', 'consistent-as-needed'],
    'testing-library/no-node-access': [
      'error',
      { allowContainerFirstChild: true },
    ],
  },
  overrides: [
    {
      files: ['src/*.(js,jsx,css)'],
      excludedFiles: ['node_modules', 'src'],
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
