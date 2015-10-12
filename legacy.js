module.exports = {
  extends: [
    'eslint-config-hugoduraes/rules/errors',
    'eslint-config-hugoduraes/rules/best-practices',
    'eslint-config-hugoduraes/rules/strict',
    'eslint-config-hugoduraes/rules/variables',
    'eslint-config-hugoduraes/rules/node',
    'eslint-config-hugoduraes/rules/style',
    'eslint-config-hugoduraes/rules/legacy'
  ],
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
