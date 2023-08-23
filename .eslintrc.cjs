module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    indent: ['off'], // To let prettier do its job
    quotes: ['error', 'single', { avoidEscape: true }],
    semi: ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-console': 'warn',
    'no-extra-semi': 'error',
    'no-return-await': 'error',
    'no-unused-vars': ['warn'],
    'prettier/prettier': 'error',
  },
  settings: {},
  ignorePatterns: ['dist/**/*'],
  overrides: [
    {
      files: [
        // Your TypeScript files extension
        '*.ts',
        '*.tsx',
      ],
      extends: [
        // You should extend TypeScript plugins here, instead of extending them outside the `overrides`.
        // If you don't want to extend any rules, you don't need an `extends` attribute.
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      rules: {
        'no-shadow': 'off', // Must set to false according to @typescript-eslint/no-shadow
        '@typescript-eslint/adjacent-overload-signatures': ['warn'],
        '@typescript-eslint/explicit-function-return-type': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': ['warn'],
        '@typescript-eslint/no-invalid-void-type': ['warn'],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-unused-vars': ['warn'],
      },
    },
  ],
};
