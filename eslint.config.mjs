import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['node_modules/**'],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect', // Detecta la versión de React automáticamente
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Desactiva la regla de React en scope
      'react/jsx-no-target-blank': ['error', { allowReferrer: true }], // Soluciona el problema de target="_blank"
      // Puedes agregar aquí otras reglas que necesites
    },
  },
];