import { Menu as MenuPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils"

export type MenuTriggerProps = React.ComponentProps<typeof MenuPrimitive.Trigger>

export const MenuTrigger = ({ className, children, ...props}: MenuTriggerProps) => {

    return (
        <MenuPrimitive.Trigger className={classNames("outline-none select-none", className)} { ...props }>
            { children }
        </MenuPrimitive.Trigger>
    )
}
