import React from "react"
import { IconsNamesT } from "./data/iconsType"
import * as iconsComponents from "./icons"

export interface IconI {
  name: IconsNamesT
}

const Icon = ({ name }: IconI) => {
  if (!name) return <></>
  return <span>{iconsComponents[name]()}</span>
}

export default Icon
