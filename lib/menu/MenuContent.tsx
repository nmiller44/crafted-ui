import { Menu as MenuPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils"

/**
 * MenuContent component that displays the dropdown menu items.
 * 
 * Uses Portal for rendering outside DOM hierarchy and includes Backdrop for click-outside.
 * Automatically positions relative to trigger with 8px offset.
 * Includes scale and opacity animations on open/close transitions.
 * 
 * @see https://base-ui.com/components/react-menu
 * @since 0.2.0
 */
export type MenuContentProps = React.ComponentProps<typeof MenuPrimitive.Popup>

export const MenuContent = ({ className, children, ...props}: MenuContentProps) => {

    return (
        <MenuPrimitive.Portal>
            <MenuPrimitive.Backdrop />
            <MenuPrimitive.Positioner className="outline-none" sideOffset={8}>
                <MenuPrimitive.Popup className={classNames(
                                        "rounded-md shadow-md outline outline-1 outline-border",
                                        "bg-popover text-popover-foreground",
                                        "min-w-28",

                                        "origin-[var(--transform-origin)]",
                                        "transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0",

                                        className
                                    )} { ...props }>
                    { children }
                </MenuPrimitive.Popup>
            </MenuPrimitive.Positioner>
        </MenuPrimitive.Portal>
    )
}
