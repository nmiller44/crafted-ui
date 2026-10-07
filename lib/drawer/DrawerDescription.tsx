import { Drawer as DrawerPrimitive } from "@base-ui/react"
import { classNames } from "~/utils"

/**
 * Optional descriptive text associated with the drawer.
 * @component
 * @category Components
 * @since 0.3.2
 */
export type DrawerDescriptionProps = React.ComponentProps<typeof DrawerPrimitive.Description>

export const DrawerDescription = ({ className, ...props }: DrawerDescriptionProps) => (
    <DrawerPrimitive.Description {...props} className={(state) => classNames("text-sm text-muted-foreground", typeof className === "function" ? className(state) : className)} />
)