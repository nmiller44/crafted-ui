import { Dialog as DialogPrimitive } from "@base-ui-components/react"

export type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root>

export const Modal = ({ open, onOpenChange, children, ...props}: ModalProps) => {

    return (
        <DialogPrimitive.Root open={ open } onOpenChange={ onOpenChange } { ...props }>
            { children }
        </DialogPrimitive.Root>
    )
}
