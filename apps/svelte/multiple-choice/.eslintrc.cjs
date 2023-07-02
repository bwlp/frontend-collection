module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint/eslint-plugin"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  root: true,
  env: { node: true, jest: true },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        custom: {
          regex: "^T[A-Z]",
          match: true,
        },
      },
      {
        selector: "typeParameter",
        format: ["PascalCase"],
        custom: {
          regex: "^[A-Z]",
          match: true,
        },
      },
      {
        selector: "enum",
        format: ["PascalCase"],
        custom: {
          regex: "^[A-Z]",
          match: true,
        },
      },
      {
        selector: "class",
        format: ["PascalCase"],
        custom: {
          regex: "^[A-Z]",
          match: true,
        },
      },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "arrow-body-style": "error",
    "no-console": "error",
  },
};
