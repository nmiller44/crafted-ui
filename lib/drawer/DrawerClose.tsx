import { isValidElement } from "react"
import { Drawer as DrawerPrimitive } from "@base-ui/react"
import { classNames } from "~/utils"

/**
 * Dismissal control that supports a custom child button.
 * @component
 * @category Components
 * @since 0.3.2
 */
export type DrawerCloseProps = React.ComponentProps<typeof DrawerPrimitive.Close>

export const DrawerClose = ({ className, children, render, ...props }: DrawerCloseProps) => {
    const childRender = isValidElement(children) ? children : undefined

    return (
        <DrawerPrimitive.Close {...props} render={render ?? childRender} className={(state) => classNames("", typeof className === "function" ? className(state) : className)}>
            {childRender ? null : children}
        </DrawerPrimitive.Close>
    )
}