import { Dialog as DialogPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils"

export type ModalTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>

export const ModalTrigger = ({ className, children, ...props}: ModalTriggerProps) => {

    return (
        <DialogPrimitive.Trigger className={classNames("", className)} { ...props }>
            { children }
        </DialogPrimitive.Trigger>
    )
}
