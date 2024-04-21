import globals from "globals";
import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended});

export default {
  languageOptions: {
    ecmaVersion: 2021,  // This sets the ECMAScript version
    sourceType: "module",  // Use "module" if your code uses ES6 modules
    globals: {
      ...globals.browser,  // Add browser-specific globals if needed
      ...globals.node,  // Add Node.js-specific globals
      __filename: "readonly",  // Define __filename as a global variable
      __dirname: "readonly",  // Define __dirname as a global variable
    }
  },
  plugins: [
    ...compat.plugins,
    "pluginJs"  // Assuming you have custom plugins or need to explicitly list them
  ],
  extends: [
    ...compat.extends("standard-with-typescript")
  ]
};