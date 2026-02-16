import { Menu as MenuPrimitive } from "@base-ui-components/react"

/**
 * Menu component for displaying dropdown menus with actions and navigation.
 * 
 * Wraps Base UI Menu.Root primitive and provides the foundation for dropdowns.
 * Use with MenuTrigger, MenuContent, and MenuItem subcomponents.
 * 
 * @see https://base-ui.com/components/react-menu
 * @since 0.2.0
 */
export type MenuProps = React.ComponentProps<typeof MenuPrimitive.Root>

export const Menu = ({ children, ...props}: MenuProps) => {

    return (
        <MenuPrimitive.Root { ...props }>
            { children }
        </MenuPrimitive.Root>
    )
}
