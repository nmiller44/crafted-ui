import { Field as FieldPrimitive } from "@base-ui-components/react"
import { classNames } from "lib/utils";



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

export type FieldInsetProps = {
    text?: string;
    insetPosition?: string;
    children?: React.ReactNode;
}

export const FieldInset = ({
    text,
    insetPosition = "right",
    children,
}: FieldInsetProps) => {

    return (
        <div    className={classNames(
                    "pointer-events-none absolute inset-y-0 flex items-end pb-[9px]",
                    "text-neutral-500 text-sm",
                    insetPosition === "left" ? "left-0 pl-3" : "right-0 pr-3"
                )}>
            { !!text
                ? <span className="text-neutral-500 text-sm">{ text }</span>
                : children
            }
        </div>
    )
}