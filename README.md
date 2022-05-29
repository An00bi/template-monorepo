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
