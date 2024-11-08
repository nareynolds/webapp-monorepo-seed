const nx = require('@nx/eslint-plugin');
// const eslint = require('@eslint/js');
// const tseslint = require('typescript-eslint');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],

  // TODO: figure out how to add the following rules
  // Add the most strict rules provided by https://typescript-eslint.io/getting-started/typed-linting/
  // ...tseslint.config(
  //   eslint.configs.recommended,
  //   ...tseslint.configs.strictTypeChecked,
  //   ...tseslint.configs.stylisticTypeChecked,
  //   {
  //     languageOptions: {
  //       parser: tseslint.parser,
  //       parserOptions: {
  //         projectService: true,
  //         tsconfigRootDir: import.meta.dirname,
  //       },
  //     },
  //   },
  // ),

  // Ignore the dist folder
  {
    ignores: ['**/dist'],
  },

  //
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
