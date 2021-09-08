module.exports = {
  "extends": [
    "react-app",
    "eslint:recommended"
  ],
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "quotes": [
      "error",
      "double"
    ],
    "no-undef": "off",
    "no-console": "off",
    "no-debugger": "error",
    "no-extra-semi": "error",
    "no-unused-vars": "off",
    "comma-dangle": [
      "error",
      "never"
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off"
  },
  "globals": {
    "React": true,
    "JSX": true
  }
};
