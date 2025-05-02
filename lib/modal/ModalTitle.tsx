import { Dialog as DialogPrimitive } from "@base-ui-components/react"
import { Heading5 } from "~/heading"
import { classNames } from "~/utils"
import { ModalClose } from "./ModalClose"

export type ModalTitleProps = React.ComponentProps<typeof DialogPrimitive.Title> & {
    title?: string
    subtitle?: string
}

export const ModalTitle = ({ title, subtitle, className, children, ...props}: ModalTitleProps) => {

    return (
        <DialogPrimitive.Title className={classNames("pb-5", className)} { ...props }>

            { !!title
            ?   <div className="flex items-top justify-between">
                    <div><Heading5 title={ title } subtitle={ subtitle } /></div>
                    <div><ModalClose>X</ModalClose></div>
                </div>
            : children 
            }
        </DialogPrimitive.Title>
    )
}
