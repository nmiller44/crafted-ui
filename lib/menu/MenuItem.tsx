import { Menu as MenuPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils"

/**
 * MenuItem component for individual menu items.
 * 
 * Supports keyboard navigation and hover states via data-[highlighted] attribute.
 * First and last items have rounded corners. Adapts styling based on parent MenuContent
 * background using group classes (.bg-primary, .bg-background).
 * 
 * @see https://base-ui.com/components/react-menu
 * @since 0.2.0
 */
export type MenuItemProps = React.ComponentProps<typeof MenuPrimitive.Item>

export const MenuItem = ({ className, children, ...props}: MenuItemProps) => {  

    return (
        <MenuPrimitive.Item className={classNames(
                                "px-4 py-2",
                                "outline-none select-none",
                                "text-sm",

                                "first:rounded-t-md last:rounded-b-md",

                                "data-[highlighted]:bg-secondary data-[highlighted]:text-secondary-foreground",
                                "group-[.bg-primary]:data-[highlighted]:bg-secondary group-[.bg-primary]:data-[highlighted]:text-secondary-foreground",
                                "group-[.bg-background]:data-[highlighted]:bg-muted group-[.bg-background]:data-[highlighted]:text-foreground",


                                className
                            )} { ...props }>
            { children }
        </MenuPrimitive.Item>
    )
}
