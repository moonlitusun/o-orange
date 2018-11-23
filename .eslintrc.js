module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
  },
  "rules": {
    "strict": 0,
    "no-console": 0,
    "global-require": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/iframe-has-title": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/no-redundant-roles": 0,
    "prefer-destructuring": "warn",
    'max-len': ["error", 120],
    'object-curly-newline': 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "class-methods-use-this": 0,
    "no-use-before-define": 0,
    "one-var": 0,
    "no-param-reassign": 0,
  },
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "globals": {
    "DEBUG": false,
    "THEME": false,
  },
};