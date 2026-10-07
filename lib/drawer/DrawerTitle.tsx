import { Drawer as DrawerPrimitive } from "@base-ui/react"
import { classNames } from "~/utils"

/**
 * Heading that labels the drawer for assistive technology.
 * @component
 * @category Components
 * @since 0.3.2
 */
export type DrawerTitleProps = React.ComponentProps<typeof DrawerPrimitive.Title> & {
    title?: string
}

export const DrawerTitle = ({ title, className, children, ...props }: DrawerTitleProps) => (
    <DrawerPrimitive.Title {...props} className={(state) => classNames("text-lg font-bold", typeof className === "function" ? className(state) : className)}>
        {title ?? children}
    </DrawerPrimitive.Title>
)