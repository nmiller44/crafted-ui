import { Drawer as DrawerPrimitive } from "@base-ui/react"
import { DrawerSideContext, type DrawerSide } from "./DrawerContext"
import { MotionProvider } from "~/motion"

/**
 * Edge panel with Base UI focus management, dismissal, and swipe gestures.
 * @component
 * @category Components
 * @accessibility Preserves Base UI modality, focus containment, and focus restoration
 * @since 0.3.2
 * @param side - Panel edge and swipe-dismiss direction; defaults to right
 * @param nomotion - Disables opening and closing transitions
 */
export type DrawerProps<Payload = unknown> = Omit<DrawerPrimitive.Root.Props<Payload>,
    "swipeDirection" | "snapPoints" | "snapPoint" | "defaultSnapPoint" | "onSnapPointChange" | "snapToSequentialPoints"
> & {
    side?: DrawerSide
    nomotion?: boolean
}

export type DrawerHandle<Payload = undefined> = DrawerPrimitive.Handle<Payload>

export const createDrawerHandle = <Payload = undefined>(): DrawerHandle<Payload> => {
    return DrawerPrimitive.createHandle<Payload>()
}

export const Drawer = <Payload,>({ side = "right", nomotion, ...props }: DrawerProps<Payload>) => {
    const swipeDirection = { left: "left", right: "right", top: "up", bottom: "down" } as const

    return (
        <MotionProvider nomotion={nomotion}>
            <DrawerSideContext.Provider value={side}>
                <DrawerPrimitive.Root {...props} swipeDirection={swipeDirection[side]} />
            </DrawerSideContext.Provider>
        </MotionProvider>
    )
}