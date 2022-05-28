import { Theme, ThemeProvider } from "@emotion/react"

interface CustomThemeProviderI {
  children: React.ReactNode
  theme: Theme
}

const CustomThemeProvider = ({ theme, children }: CustomThemeProviderI) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default CustomThemeProvider
