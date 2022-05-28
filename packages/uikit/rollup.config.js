import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import external from "rollup-plugin-peer-deps-external"
import dts from "rollup-plugin-dts"
import packageJson from "./package.json"
import path from "path"
import alias from "@rollup/plugin-alias"

const projectRootDir = path.resolve(__dirname)

const config = [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [external(), commonjs(), resolve(), typescript({ tsconfig: "./tsconfig.json" })],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/uikit.d.ts", format: "es" }],
    plugins: [
      alias({
        entries: [
          {
            find: "@",
            replacement: path.resolve(projectRootDir, "./src"),
          },
        ],
      }),
      dts(),
    ],
  },
]

export default config
