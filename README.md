# template-monorepo

`yarn set version berry`

Open .yarnrc.yml

```
nodeLinker: node-modules

plugins:
  - path: .yarn/plugins/@yarnpkg/plugin-interactive-tools.cjs
    spec: "@yarnpkg/plugin-interactive-tools"

yarnPath: .yarn/releases/yarn-3.2.1.cjs
```
