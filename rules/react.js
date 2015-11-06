module.exports = {
  parser: 'babel-eslint',
  plugins: ['react'],
  ecmaFeatures: {
    jsx: true
  },
  rules: {
    'jsx-quotes': [2, 'prefer-double'],

    // https://github.com/yannickcr/eslint-plugin-react
    'react/display-name': 0,
    'react/jsx-boolean-value': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/wrap-multilines': 1,
    'react/sort-comp': [2, {
      order: [
        'lifecycle',
        'everything-else',
        'renderstuff'
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'getInitialState',
          'getChildContext',
          'componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'componentDidUpdate',
          'componentWillUnmount'
        ],
        renderstuff: [
          'render',
          '/^render.+$/'
        ]
      }
    }]
  }
};
