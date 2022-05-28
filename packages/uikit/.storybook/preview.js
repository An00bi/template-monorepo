import React from "react"
import { ThemeProvider } from "@emotion/react"
import { theme } from "../src/theme"
import { Reset } from "../src/theme/Reset"

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Reset />
      <Story />
    </ThemeProvider>
  ),
]
