import { ColorsI } from "@/theme/colors"

export interface LabelI {
  children: React.ReactNode
  color?: keyof ColorsI
}
