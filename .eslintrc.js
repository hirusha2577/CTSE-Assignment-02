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
    rules: {
      // Customize your rules here
    },
  };
  