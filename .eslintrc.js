module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'autofix',
    'only-warn',
  ],
  rules: {
    'react/jsx-filename-extension': [
      1, {
        extensions: [
          '.js', '.jsx',
        ],
      },
    ],
    'padded-blocks': [
      'error', 'never',
    ],
    'linebreak-style': [
      0,
    ],
    'autofix/no-debugger': 'error',
    'array-bracket-newline': [
      'error', 'always',
    ],
    'react/jsx-curly-brace-presence': [
      1,
    ],

  },
};
