module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "no-console": "off",
    "import/prefer-default-export": "off",
    "max-len": "off",
    "no-plusplus": "off",
    "default-case": "off",
    "no-alert": "off",
  },
};
