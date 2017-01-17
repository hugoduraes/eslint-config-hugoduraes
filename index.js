module.exports = {
  env: {
    browser: true,
    mocha: true,
    node: true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  rules: {
    // Possible Errors
    // @see http://eslint.org/docs/rules/#possible-errors
    'comma-dangle': ['error', 'never'],
    'no-cond-assign': ['error', 'always'],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-alert': 'warn',
    'no-constant-condition': 'warn',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'warn',
    'no-obj-calls': 'error',
    'quote-props': ['error', 'as-needed'],
    'no-sparse-arrays': 'error',
    'no-unreachable': 'error',
    'use-isnan': 'error',
    'block-scoped-var': 'error',

    // Best Practices
    // @see http://eslint.org/docs/rules/#best-practices
    'consistent-return': 'error',
    curly: ['error', 'multi-line'],
    'default-case': 'warn',
    'dot-notation': ['error', {
      allowKeywords: true
    }],
    eqeqeq: 'error',
    'guard-for-in': 'error',
    'handle-callback-err': ['warn'],
    'no-caller': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-multi-spaces': ['warn', {
      exceptions: {
        VariableDeclarator: true
      }
    }],
    'no-native-reassign': 'error',
    'no-new': 'warn',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-with': 'error',
    radix: 'error',
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'any'],
    yoda: 'error',

    // Strict
    // @see http://eslint.org/docs/rules/#strict-mode
    strict: ['error', 'safe'],

    // Variables
    // @see http://eslint.org/docs/rules/#variables
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'none'
    }],
    'no-use-before-define': ['error', {
      functions: false
    }],
    'no-undef': 'error',

    // Styles
    // @see http://eslint.org/docs/rules/#stylistic-issues
    indent: ['error', 2, { MemberExpression: 1 }],
    'brace-style': [
      'error', '1tbs', { allowSingleLine: true }
    ],
    quotes: [
      'error', 'single', 'avoid-escape'
    ],
    camelcase: ['error', {
      properties: 'never'
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'comma-style': ['error', 'last'],
    'eol-last': 'error',
    'func-names': 'off',
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],
    'max-depth': ['off', 4],
    'max-len': ['off', 80, 4],
    'max-params': ['off', 3],
    'max-statements': ['off', 10],
    'new-cap': 'warn',
    'no-bitwise': 'off',
    'no-plusplus': 'off',
    'no-multiple-empty-lines': ['error', {
      max: 2
    }],
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-spaced-func': 'error',
    'no-trailing-spaces': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-underscore-dangle': 'off',
    'one-var': ['error', 'never'],
    'padded-blocks': ['error', 'never'],
    semi: ['error', 'always'],
    'semi-spacing': ['error', {
      before: false,
      after: true
    }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'always'],
    'space-infix-ops': 'warn',
    'spaced-comment': 'error',
    'object-curly-spacing': ['error', 'always'],
    'func-style': ['warn', 'declaration'],

    // ECMAScript 6
    // @see http://eslint.org/docs/rules/#ecmascript-6
    'prefer-const': 'warn',
    'no-var': 'warn',
    'arrow-parens': 'warn'
  }
};
