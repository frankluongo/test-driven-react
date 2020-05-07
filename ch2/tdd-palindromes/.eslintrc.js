module.exports = {
  extends: ["eslint:recommended", "plugin:jest/recommended"],
  parserOptions: {
    ecmaVersion: 6,
  },
  plugins: ["jest"],
  env: {
    node: true,
  },
};
