import { Dialog as DialogPrimitive } from "@base-ui/react"

export type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root>
export type ModalHandle<Payload = undefined> = DialogPrimitive.Handle<Payload>

export const createModalHandle = <Payload = undefined>(): ModalHandle<Payload> => {
    return DialogPrimitive.createHandle<Payload>()
}

export const Modal = ({ open, onOpenChange, children, ...props}: ModalProps) => {

    return (
        <DialogPrimitive.Root open={ open } onOpenChange={ onOpenChange } { ...props }>
            { children }
        </DialogPrimitive.Root>
    )
}
