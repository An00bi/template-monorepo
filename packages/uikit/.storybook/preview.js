import React from "react"
import { theme } from "@/theme"
import CustomThemeProvider from "@/style/CustomThemeProvider"
import { Reset } from "@/style/Reset"

export const decorators = [
  (Story) => (
    <CustomThemeProvider theme={theme}>
      <Reset />
      <Story />
    </CustomThemeProvider>
  ),
]
