import { createContext, createElement, useContext, type ReactNode } from "react"
import type { ClassValue } from "clsx"
import { classNames } from "./utils"

export type MotionProps = {
    nomotion?: boolean
}

const MotionContext = createContext(false)

export const MotionProvider = ({ nomotion, children }: MotionProps & { children: ReactNode }) => {
    const inheritedNomotion = useContext(MotionContext)

    return createElement(
        MotionContext.Provider,
        { value: nomotion ?? inheritedNomotion },
        children
    )
}

export const useNomotion = () => useContext(MotionContext)

export const motionClasses = (nomotion: boolean, ...classes: ClassValue[]) => classNames(
    ...classes,
    !nomotion && "duration-150 ease-out motion-reduce:transition-none",
    nomotion && "transition-none"
)