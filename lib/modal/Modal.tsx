import { Dialog as DialogPrimitive } from "@base-ui/react"
import { MotionProvider } from "~/motion"

/**
 * @param nomotion - Disables opening and closing transitions
 */
export type ModalProps = React.ComponentProps<typeof DialogPrimitive.Root> & {
    nomotion?: boolean
}
export type ModalHandle<Payload = undefined> = DialogPrimitive.Handle<Payload>

export const createModalHandle = <Payload = undefined>(): ModalHandle<Payload> => {
    return DialogPrimitive.createHandle<Payload>()
}

export const Modal = ({ open, onOpenChange, children, nomotion, ...props}: ModalProps) => {

    return (
        <MotionProvider nomotion={nomotion}>
            <DialogPrimitive.Root open={ open } onOpenChange={ onOpenChange } { ...props }>
                { children }
            </DialogPrimitive.Root>
        </MotionProvider>
    )
}
