module.exports = {
  rules: {
    indent: [2, 2],
    'brace-style': [
      2, '1tbs', {allowSingleLine: true}
    ],
    quotes: [
      2, 'single', 'avoid-escape'
    ],
    camelcase: [2, {
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
    semi: [2, 'always'],
    'semi-spacing': [2, {
      before: false,
      after: true
    }],
    'space-after-keywords': 2,
    'space-before-blocks': 2,
    'space-before-function-paren': [2, 'always'],
    'space-infix-ops': 1,
    'space-return-throw-case': 2,
    'spaced-comment': 2
  }
};
