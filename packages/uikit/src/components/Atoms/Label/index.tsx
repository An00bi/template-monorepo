import { ColorsI } from "@/theme/colors"
import { useTheme } from "@emotion/react"
import React from "react"
import * as style from "./style"

export interface LabelI {
  children: React.ReactNode
  color: keyof ColorsI
}

const Label = ({ children, color }: LabelI) => {
  const theme = useTheme()
  return <p css={style.base(theme)(color)}>{children}</p>
}

Label.defaultProps = {
  color: "black",
}

export default Label
