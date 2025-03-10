import { Field as FieldPrimitive } from "@base-ui-components/react"
import { classNames } from "../../utils.js"; 
import { LabelHTMLAttributes } from "react";



export type FieldProps = {
    name?: string;
    className?: string;
    children?: React.ReactNode;
}

export const Field = ({ name, className, children }: FieldProps) => {

    return (
        <FieldPrimitive.Root name={ name } className={classNames("space-y-1.5", className)}>
            { children }
        </FieldPrimitive.Root>
    )
}

export const FieldLabel = ({ className, children }: LabelHTMLAttributes<HTMLLabelElement>) => {

    return (
        <FieldPrimitive.Label className={classNames(
                                // "inline-block", // switched to flex for Checkbox and Inline Elements
                                "flex items-center gap-x-1.5",
                                "pb-1 text-sm font-medium text-neutral-700", 
                                className
                            )}>
            { children }
        </FieldPrimitive.Label>
    )
}

export const FieldError = () => {
    
    return (
        <FieldPrimitive.Error className={classNames("text-sm text-red-600")} />
    )
}

export type FieldInsetProps = {
    text?: string;
    position?: string;
    children?: React.ReactNode;
}

export const FieldInset = ({
    text,
    position = "right",
    children,
}: FieldInsetProps) => {

    return (
        <div    className={classNames(
                    "pointer-events-none absolute inset-y-0 flex items-end pb-[9px]",
                    position === "left" ? "left-0 pl-3" : "right-0 pr-3"
                )}>
            { !!text
                ? <span className="text-neutral-500 text-sm">{ text }</span>
                : children
            }
        </div>
    )
}
