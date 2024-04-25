module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.eslint.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh", "@typescript-eslint", "tailwindcss"],
  rules: {
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "no-unused-vars": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
};
