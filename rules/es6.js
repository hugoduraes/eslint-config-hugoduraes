module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  rules: {
    'no-var': 1,
    'prefer-const': 1
  }
};
