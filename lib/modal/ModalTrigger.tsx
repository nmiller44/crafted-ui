import { isValidElement } from "react"
import { Dialog as DialogPrimitive } from "@base-ui/react"
import { classNames } from "~/utils"

export type ModalTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>

export const ModalTrigger = ({ className, children, ...props}: ModalTriggerProps) => {
    const render = isValidElement(children) ? children : undefined
    const content = render ? null : children

    return (
        <DialogPrimitive.Trigger { ...props } render={render} className={classNames("", className)}>
            { content }
        </DialogPrimitive.Trigger>
    )
}
