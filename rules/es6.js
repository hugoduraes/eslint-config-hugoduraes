module.exports = {
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true
  },
  ecmaFeatures: {
    arrowFunctions: true,
    blockBindings: true,
    classes: true,
    defaultParams: true,
    destructuring: true,
    forOf: true,
    generators: false,
    modules: true,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: false,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    restParams: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    unicodeCodePointEscapes: true,
    jsx: true
  },
  rules: {
    'no-var': 1,
    'prefer-const': 1
  }
};
