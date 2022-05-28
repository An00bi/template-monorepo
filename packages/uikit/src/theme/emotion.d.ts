import "@emotion/react"
import { ColorsI } from "./colors"
import { LayoutI } from "./layout"
import { FontsI } from "./fonts"
import { MediaqueriesI } from "./mediaqueries"

declare module "@emotion/react" {
  export interface Theme {
    colors: ColorsI
    fonts: FontsI
    layout: LayoutI
    mq: MediaqueriesI
  }
}
