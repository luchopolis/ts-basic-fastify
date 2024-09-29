module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2022: true,
    node: true,
  },
  ignorePatterns: ["**/*.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.json",
  },
  plugins: ["@typescript-eslint"],
  extends: ["plugin:unicorn/recommended"],
  rules: {
    "linebreak-style": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-top-level-await": "off",
    "unicorn/prevent-abbreviations": "off",
    "no-undef": "off",
    "no-console": "error",
    "no-process-exit": "off",
    "max-len": [
      "error",
      {
        code: 120,
        ignorePattern: "^import\\s.+\\sfrom\\s.+;$",
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "sort-keys": "error",
  },
};
