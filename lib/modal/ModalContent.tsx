import { Dialog as DialogPrimitive } from "@base-ui/react"
import { classNames } from "~/utils"
import { ModalTitle } from "./ModalTitle"
import { ModalClose } from "./ModalClose"

export type ModalContentProps = React.ComponentProps<typeof DialogPrimitive.Popup> & {
    title?: string
    subtitle?: string
    size?: "sm" | "md" | "lg" | "xl"
    hideClose?: boolean
}

export const ModalContent = ({ title, subtitle, size = "md", hideClose = false, className, children, ...props}: ModalContentProps) => {
    const protectCloseSpace = !title && !hideClose

    const sizeClass = {
        sm: "w-96",      // 384px - compact content
        md: "w-[32rem]", // 512px - forms with 1-2 columns
        lg: "w-[40rem]", // 640px - wider forms or data tables
        xl: "w-[48rem]", // 768px - complex layouts
    }[size]

    return (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Backdrop className="fixed inset-0 bg-black opacity-20 transition-all duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0 dark:opacity-70" />
            <DialogPrimitive.Popup className={classNames(
                                    "flex flex-col space-y-8",
                                    "fixed top-1/2 left-1/2 -mt-8 max-w-[calc(100vw-3rem)]", 
                                    sizeClass,
                                    "-translate-x-1/2 -translate-y-1/2",
                                    "p-6",
                                    "rounded-lg bg-card outline outline-1 outline-border", 
                                    "transition-all duration-150 data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
                                    className
                                )} { ...props }>
                { !hideClose && <div className="absolute top-4 right-4"><ModalClose>X</ModalClose></div> }
                { !!title && <ModalTitle title={ title } subtitle={ subtitle } /> }
                <div className={classNames("space-y-8", protectCloseSpace && "[&>:first-child>:first-child]:pr-10")}>
                    { children }
                </div>
            </DialogPrimitive.Popup>
        </DialogPrimitive.Portal>
    )
}
