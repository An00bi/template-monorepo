import React from "react"
import { useTheme } from "@emotion/react"
import { ColorsI } from "@/theme/colors"
import * as style from "./style"

export interface LabelI {
  children: React.ReactNode
  color?: keyof ColorsI
}

const Label = ({ children, color = "black" }: LabelI) => {
  const theme = useTheme()

  return <p css={style.base(theme)(color)}>{children}</p>
}

Label.defaultProps = {
  color: "black",
}

export default Label
