import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import external from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import dts from "rollup-plugin-dts"
import packageJson from "./package.json"

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        name: "react-ts-lib",
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [external(), resolve(), commonjs(), typescript({ tsconfig: "./tsconfig.json" }), postcss()],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
]

export default config
