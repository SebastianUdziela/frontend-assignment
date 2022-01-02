/* eslint-env node */
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 13,
        'sourceType': 'module'
    },
    'plugins': [
        'react-hooks',
        'react',
        '@typescript-eslint'
    ],
    rules: {
        'quotes': [2, 'single', { avoidEscape: true }],
        'radix': 0,
        'class-methods-use-this': 0,
        'no-useless-constructor': 0,
        'import/no-unresolved': 0,
        "react-hooks/exhaustive-deps": "off",
      },
};
