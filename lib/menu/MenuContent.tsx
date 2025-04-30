import { Menu as MenuPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils"

export type MenuContentProps = React.ComponentProps<typeof MenuPrimitive.Popup>

export const MenuContent = ({ className, children, ...props}: MenuContentProps) => {

    return (
        <MenuPrimitive.Portal>
            <MenuPrimitive.Backdrop />
            <MenuPrimitive.Positioner className="outline-none" sideOffset={8}>
                <MenuPrimitive.Popup className={classNames(
                                        "rounded-md shadow-md outline outline-1 outline-border", 
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
