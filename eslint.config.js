// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");
const boundaries = require("eslint-plugin-boundaries");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    plugins: { boundaries },
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      boundaries.configs.recommended,
      boundaries.configs.strict,
    ],
    processor: angular.processInlineTemplates,
    settings: {
      default: "disallow",
      "boundaries/dependency-nodes": ["import", "dynamic-import"],
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      "boundaries/elements": [
        {
          type: "feature",
          pattern: "src/app/feature/*",
        },
        {
          type: "core",
          pattern: "src/app/core/*",
        },
        {
          type: "pattern",
          pattern: "src/app/pattern/*",
        },
        {
          type: "ui",
          pattern: "src/app/ui/*",
        },
        {
          type: "layout",
          pattern: "src/app/layout/*",
        },
        {
          type: "main",
          mode: "file",
          pattern: "src/main.ts",
        },
        {
          type: "app",
          mode: "file",
          pattern: "src/app/app(-|.)*.ts",
        },
        {
          type: "env",
          pattern: "src/environments/*",
        },
      ],
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "boundaries/element-types": [
        "error",
        {
          message:
            'Modules in the "${file.type}" package are not allowed to depend on modules from the "${dependency.type}" package',
          rules: [
            { from: "feature", allow: ["core", "ui"] },
            { from: "pattern", allow: ["core", "ui"] },
            { from: "core", allow: ["core", "ui"] },
            { from: "ui", allow: ["ui"] },
            { from: "main", allow: ["app"] },
            { from: "layout", allow: ["feature"] },
            { from: "app", allow: ["app", "layout"] },
          ],
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {},
  },
);
