/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs")
const ICON_PATH = "./src/components/Atoms/Icon"
const iconsNamesPath = `${ICON_PATH}/data/iconsNames.ts`
const iconsTypePath = `${ICON_PATH}/data/iconsType.ts`

try {
  fs.unlinkSync(iconsNamesPath)
  console.log(`🔧 [1/4] iconsNames file removed.`)
} catch (err) {
  console.log(`🔧 [1/4] iconsNames file not found, nothing to remove.`)
}

try {
  fs.unlinkSync(iconsTypePath)
  console.log(`🔧 [2/4] iconsType file removed.`)
} catch (err) {
  console.log(`🔧 [2/4] iconsType file not found, nothing to remove.`)
}

const dataDir = `${ICON_PATH}/data`
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir)
}

const svgIconsPath = `${ICON_PATH}/icons`
const iconsFilesNames: string[] = fs.readdirSync(svgIconsPath)

// --- Generate Icons Names ---
let iconsNames: string = ""
iconsFilesNames.map((fileName: string, i: number) => {
  if (fileName === "index.tsx") return
  iconsNames += `"${fileName.split(".")[0]}"${i !== iconsFilesNames.length - 2 ? ", " : ""}` // -2 we remove the index.tsx from the list
})
const iconsNamesContent = `export const iconsNames = [${iconsNames}]`
fs.writeFile(iconsNamesPath, iconsNamesContent, (err: string) => {
  if (err) {
    console.error(err)
  }
  console.log(`✅ [3/4] iconsNames file generated!`)
})

// --- Generate Icons Type ---

let ciao = ""
iconsFilesNames.map((fileName: string, i: number) => {
  if (fileName === "index.tsx") return
  ciao += `"${fileName.split(".")[0]}" ${i !== iconsFilesNames.length - 2 ? "| " : ""}`
})
const iconsType = `export type IconsNamesT = ${ciao}`
fs.writeFile(iconsTypePath, iconsType, (err: string) => {
  if (err) {
    console.error(err)
  }
  console.log(`✅ [4/4] iconsType file generated!`)
})
