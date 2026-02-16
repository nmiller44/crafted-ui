import { Menu as MenuPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils"

/**
 * MenuTrigger component that opens the dropdown menu.
 * 
 * Accepts any child element (Button, Avatar, etc.) as the trigger.
 * Adds outline-none and select-none styling for clean interaction.
 * 
 * @see https://base-ui.com/components/react-menu
 * @since 0.2.0
 */
export type MenuTriggerProps = React.ComponentProps<typeof MenuPrimitive.Trigger>

export const MenuTrigger = ({ className, children, ...props}: MenuTriggerProps) => {

    return (
        <MenuPrimitive.Trigger className={classNames("outline-none select-none", className)} { ...props }>
            { children }
        </MenuPrimitive.Trigger>
    )
}
