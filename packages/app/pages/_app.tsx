import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { CustomThemeProvider, theme } from "@monorepo/ui-kit"
import { store } from "../store"

import "../styles/globals.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <CustomThemeProvider theme={theme}>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </Provider>
  )
}

export default MyApp
