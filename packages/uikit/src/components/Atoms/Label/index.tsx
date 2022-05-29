import React from "react"
import { useTheme } from "@emotion/react"
import * as style from "./style"
import { ColorsI } from "@/theme/colors"

export interface LabelI {
  children: React.ReactNode
  color?: keyof ColorsI
}

const Label = ({ children, color = "black" }: LabelI) => {
  const theme = useTheme()

  return <p css={style.base(theme)(color)}>{children}</p>
}

export default Label
