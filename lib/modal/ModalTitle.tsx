import { Dialog as DialogPrimitive } from "@base-ui/react"
import { Heading5 } from "~/heading"
import { classNames } from "~/utils"

export type ModalTitleProps = React.ComponentProps<typeof DialogPrimitive.Title> & {
    title?: string
    subtitle?: string
}

export const ModalTitle = ({ title, subtitle, className, children, ...props}: ModalTitleProps) => {

    return (
        <DialogPrimitive.Title className={classNames("", className)} { ...props }>
            { !!title
            ?   <Heading5 title={ title } subtitle={ subtitle } />
            : children 
            }
        </DialogPrimitive.Title>
    )
}
