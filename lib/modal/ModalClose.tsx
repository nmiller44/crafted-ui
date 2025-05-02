import { Dialog as DialogPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils"

export type ModalCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>

export const ModalClose = ({ className, children, ...props}: ModalCloseProps) => {

    return (
        <DialogPrimitive.Close className={classNames("", className)} { ...props }>
            { children }
        </DialogPrimitive.Close>
    )
}
