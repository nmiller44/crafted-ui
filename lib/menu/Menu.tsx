import { Menu as MenuPrimitive } from "@base-ui-components/react"

export type MenuProps = React.ComponentProps<typeof MenuPrimitive.Root>

export const Menu = ({ children, ...props}: MenuProps) => {

    return (
        <MenuPrimitive.Root { ...props }>
            { children }
        </MenuPrimitive.Root>
    )
}
