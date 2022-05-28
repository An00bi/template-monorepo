import { ColorsI } from "@/theme/colors"
import { css, Theme } from "@emotion/react"

export const base = (theme: Theme) => (color: keyof ColorsI) => {
  return css({
    color: theme?.colors?.[color] || "black",
  })
}
