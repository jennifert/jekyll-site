import js from "@eslint/js";
import jest from "eslint-plugin-jest";

export default [
  {
    files: ["src/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        location: "readonly",
        fetch: "readonly",
        console: "readonly"
      }
    },
    plugins: {
      jest
    },
    rules: {
      ...js.configs.recommended.rules,
      ...jest.configs.recommended.rules
    }
  }
];