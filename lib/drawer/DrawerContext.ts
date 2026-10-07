import { createContext } from "react"

export type DrawerSide = "left" | "right" | "top" | "bottom"

export const DrawerSideContext = createContext<DrawerSide>("right")