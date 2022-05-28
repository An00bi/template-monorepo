import { css, Global } from "@emotion/react"

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap');
  * {
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
  },
`

export const Reset = () => <Global styles={globalStyles} />
