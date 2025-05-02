import { Dialog as DialogPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils"

export type ModalDescriptionProps = React.ComponentProps<typeof DialogPrimitive.Description>

export const ModalDescription = ({ className, children, ...props}: ModalDescriptionProps) => {

    return (
        <DialogPrimitive.Description className={classNames("", className)} { ...props }>
            { children }
        </DialogPrimitive.Description>
    )
}
