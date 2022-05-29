# template-monorepo

Yarn Workspaces - NextJS - Typescript - Rollup

## Init

`yarn set version berry`  
`yarn plugin import interactive-tools`

Open .yarnrc.yml and add:

```
nodeLinker: node-modules
```

## Icons

Commands:

`yarn icons:generate`

> Using SVGR transform every svg file in React Component.

---

`yarn icons:data`

> Using the script in `./script/generateIconsData.ts` create a file containing an array of string with all icons names and a file containing a literal.

---

`yarn icons:all`

> Do both `generate` and `data` commands

---

## UIKIT Rollup

⚠️ Rollup and Rollup plugins update may break aliases (don't know why). Tried to update to this versions but not working as expected ¯\_(ツ)\_/¯ ⚠️

> "@rollup/plugin-commonjs": "^21.0.2",
> "@rollup/plugin-node-resolve": "^13.1.3",
> "@rollup/plugin-typescript": "^8.3.1",
> "rollup": "^2.68.0",
> "rollup-plugin-dts": "^4.1.0",
