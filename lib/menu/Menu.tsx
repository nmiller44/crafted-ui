import { Menu as MenuPrimitive } from "@base-ui/react"
import { MotionProvider } from "~/motion"

/**
 * Menu component for displaying dropdown menus with actions and navigation.
 * 
 * Wraps Base UI Menu.Root primitive and provides the foundation for dropdowns.
 * Use with MenuTrigger, MenuContent, and MenuItem subcomponents.
 * 
 * @param nomotion - Disables opening and closing transitions
 * @see https://base-ui.com/components/react-menu
 * @since 0.2.0
 */
export type MenuProps<Payload = unknown> = MenuPrimitive.Root.Props<Payload> & {
    nomotion?: boolean
}

export type MenuHandle<Payload = undefined> = MenuPrimitive.Handle<Payload>

export const createMenuHandle = <Payload = undefined>(): MenuHandle<Payload> => {
    return MenuPrimitive.createHandle<Payload>()
}

export const Menu = <Payload,>({ children, nomotion, ...props}: MenuProps<Payload>) => {

    return (
        <MotionProvider nomotion={nomotion}>
            <MenuPrimitive.Root { ...props }>
                { children }
            </MenuPrimitive.Root>
        </MotionProvider>
    )
}
