import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";

const libraryName = "module-name";
const pkg = require("./package.json");

export default {
  input: pkg.main,
  output: {
    file: `dist/${libraryName}.js`,
    format: "cjs"
  },
  plugins: [resolve(), commonjs(), json()]
};
