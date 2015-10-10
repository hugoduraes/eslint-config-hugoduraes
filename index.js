module.exports = {
  parser: 'babel-eslint',
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
    generators: true,
    modules: true,
    objectLiteralComputedProperties: true,
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
/**
 * Strict mode
 */
    // babel inserts 'use strict'; for us
    'strict': 0,

/**
 * ES6
 */
    'no-var': 1,

/**
 * Variables
 */
    'no-shadow': 2,
    'no-shadow-restricted-names': 2,
    'no-unused-vars': [2, {
      vars: 'all',
      args: 'none'
    }],
    'no-use-before-define': 2,

/**
 * Possible errors
 */
    'comma-dangle': [2, 'never'],
    'no-cond-assign': [2, 'always'],
    'no-console': 1,
    'no-debugger': 1,
    'no-alert': 1,
    'no-constant-condition': 1,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 0,
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-inner-declarations': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 1,
    'no-obj-calls': 2,
    'quote-props': [2, 'consistent-as-needed'],
    'no-sparse-arrays': 2,
    'no-unreachable': 2,
    'use-isnan': 2,
    'block-scoped-var': 2,

/**
 * Best practices
 */
    'consistent-return': 2,
    'curly': [2, 'multi-line'],
    'default-case': 2,
    'dot-notation': [2, {
      allowKeywords: true
    }],
    'eqeqeq': 2,
    'guard-for-in': 2,
    'handle-callback-err': [1],
    'no-caller': 2,
    'no-else-return': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-implied-eval': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-str': 2,
    'no-multi-spaces': [1, {
      exceptions: {
        VariableDeclarator: true
      }
    }],
    'no-native-reassign': 2,
    'no-new': 1,
    'no-new-func': 2,
    'no-new-wrappers': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-with': 2,
    'radix': 2,
    'vars-on-top': 2,
    'wrap-iife': [2, 'any'],
    'yoda': 2,

/**
 * Style
 */
    'indent': [2, 2],
    'brace-style': [2,
      '1tbs', {
        allowSingleLine: true
      }
    ],
    'quotes': [
      2, 'single', 'avoid-escape'
    ],
    'camelcase': [2, {
      properties: 'never'
    }],
    'comma-spacing': [2, {
      before: false,
      after: true
    }],
    'comma-style': [2, 'last'],
    'eol-last': 2,
    'func-names': 0,
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true
    }],
    'new-cap': 1,
    'no-multiple-empty-lines': [2, {
      max: 2
    }],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-extra-parens': 2,
    'no-underscore-dangle': 0,
    'one-var': [2, 'never'],
    'padded-blocks': [2, 'never'],
    'semi': [2, 'always'],
    'semi-spacing': [2, {
      before: false,
      after: true
    }],
    'space-after-keywords': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'never'],
    'space-infix-ops': 1,
    'space-return-throw-case': 2,
    'spaced-comment': 2
  }
};
