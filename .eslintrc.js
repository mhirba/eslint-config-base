module.exports = {
  // specifies the eslint parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // allows for the parsing of modern ecmascript features
    ecmaVersion: 2019,
    // allows for the use of imports
    sourceType: 'module',
  },
  env: {
    // enables the browser
    browser: true,
    // enable node.js environments
    node: true,
    // allows es6 global variable
    es2021: true,
    // allows jest to be used as global variable
    jest: true
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended', 'plugin:@typescript-eslint/recommended'],
  plugins: ['jest', 'prettier'],
  rules: {
    'prettier/prettier': ['error', require('./.prettierrc.js')],

    /**
     * Typescript contifure rules
     **/
    // '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
  },
}
