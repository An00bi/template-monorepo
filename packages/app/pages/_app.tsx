import type { AppProps } from "next/app"
import { CustomThemeProvider, theme } from "@monorepo/ui-kit"
import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomThemeProvider theme={theme}>
      <Component {...pageProps} />
    </CustomThemeProvider>
  )
}

export default MyApp
