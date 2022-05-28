import React from "react"
import * as icons from "./icons"

export interface IconI {
  name: "CodeBrackets" | "Comments"
}

const Icon = ({ name = "CodeBrackets" }: IconI) => {
  return <span>{icons[name]()}</span>
}

export default Icon
