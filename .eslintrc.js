const INDENTATION_SIZE = 4

module.exports = {
    'env': {
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'rules': {
        'no-magic-numbers': 'error',
        quotes: ['error', 'single', { 'allowTemplateLiterals': true }],
        'indent': ['error', INDENTATION_SIZE]
    }
};
