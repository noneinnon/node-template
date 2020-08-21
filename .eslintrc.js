module.exports = {
    parser: '@babel/eslint-parser',
    env: {
        es6: true,
        node: true,
    },
    plugins: ['prettier', '@babel'],
    extends: ['airbnb-base', 'plugin:prettier/recommended'],
    parserOptions: {
        // Only ESLint 6.2.0 and later support ES2020.
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        '@babel/new-cap': 'error',
        '@babel/no-invalid-this': 'error',
        '@babel/no-unused-expressions': 'error',
        '@babel/semi': 'error',
    },
};
