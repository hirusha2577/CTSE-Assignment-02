module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    project: ['./tsconfig.json'], // Specify the path to your TS config file
  },
  settings: {},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier', // Enables eslint-plugin-prettier and eslint-config-prettier
  ],
  plugins: ['import', 'prettier', 'react-hooks'],
  rules: {
    // Customize your rules here
    'no-debugger': 'error',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/export': 'warn',
    'react-hooks/rules-of-hooks': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/array-type': 'off',
    'prettier/prettier': 'warn',
    'no-console': 'warn',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/consistent-indexed-object-style': 'warn',
    '@typescript-eslint/await-thenable': 'off',
    '@typescript-eslint/consistent-type-imports': 'warn',
    'no-restricted-imports': ['warn', { patterns: ['../*'] }],
  },
};
