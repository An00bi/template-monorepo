import { ColorsI } from "@/theme/colors"
import { css, Theme } from "@emotion/react"

export const base = (theme: Theme) => (color: keyof ColorsI) =>
  css({
    color: theme.colors[color],
  })
