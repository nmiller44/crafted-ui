import { Dialog as DialogPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils"
import { ModalTitle } from "./ModalTitle"

export type ModalContentProps = React.ComponentProps<typeof DialogPrimitive.Popup> & {
    title?: string
    subtitle?: string
    size?: "sm" | "md" | "lg" | "xl"
}

export const ModalContent = ({ title, subtitle, size = "md", className, children, ...props}: ModalContentProps) => {

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
                { !!title && <ModalTitle title={ title } subtitle={ subtitle } /> }
                { children }
            </DialogPrimitive.Popup>
        </DialogPrimitive.Portal>
    )
}
