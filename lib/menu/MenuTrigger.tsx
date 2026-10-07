import { Menu as MenuPrimitive } from "@base-ui/react"
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
export type MenuTriggerProps<Payload = unknown> = MenuPrimitive.Trigger.Props<Payload>

export const MenuTrigger = <Payload,>({ className, children, ...props}: MenuTriggerProps<Payload>) => {

    return (
        <MenuPrimitive.Trigger className={classNames("outline-none select-none", className)} { ...props }>
            { children }
        </MenuPrimitive.Trigger>
    )
}
