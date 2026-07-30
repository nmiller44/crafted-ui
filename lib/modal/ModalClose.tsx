import { isValidElement } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react"
import { classNames } from "~/utils"

export type ModalCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>

export const ModalClose = ({ className, children, ...props}: ModalCloseProps) => {
    const render = isValidElement(children) ? children : undefined
    const content = render ? null : children

    return (
        <DialogPrimitive.Close { ...props } render={render} className={classNames("", className)}>
            { content }
        </DialogPrimitive.Close>
    )
}
