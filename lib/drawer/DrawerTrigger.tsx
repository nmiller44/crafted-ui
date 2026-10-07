import { isValidElement } from "react"
import { Drawer as DrawerPrimitive } from "@base-ui/react"
import { classNames } from "~/utils"

/**
 * Opening control that supports a child button or a detached drawer handle.
 * @component
 * @category Components
 * @since 0.3.2
 */
export type DrawerTriggerProps<Payload = unknown> = DrawerPrimitive.Trigger.Props<Payload>

export const DrawerTrigger = <Payload,>({ className, children, render, ...props }: DrawerTriggerProps<Payload>) => {
    const childRender = isValidElement(children) ? children : undefined

    return (
        <DrawerPrimitive.Trigger {...props} render={render ?? childRender} className={(state) => classNames("", typeof className === "function" ? className(state) : className)}>
            {childRender ? null : children}
        </DrawerPrimitive.Trigger>
    )
}