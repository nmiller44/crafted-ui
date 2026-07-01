import { classNames } from "~/utils"

export type ModalButtonsProps = React.ComponentProps<"div"> & {
    align?: "left" | "center" | "right"
}

export const ModalButtons = ({ align = "right", className, children, ...props}: ModalButtonsProps) => {

    return (
        <div className={classNames(
                        "flex gap-3 pt-4",
                        align === "right" ? "justify-end" : align === "center" ? "justify-center" : "justify-start",
                        className
                    )} { ...props }>
            { children }
        </div>
    )
}