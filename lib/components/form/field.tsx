import { Field as FieldPrimitive } from "@base-ui-components/react"
import { classNames } from "../../utils.js"; 

export const Field = ({ className, children, ...props }: React.ComponentProps<typeof FieldPrimitive.Root>) => {

    return (
        <FieldPrimitive.Root className={classNames("space-y-1.5", className)} {...props}>
            { children }
            <FieldError />
        </FieldPrimitive.Root>
    )
}

export const FieldLabel = ({ className, children, ...props }: React.ComponentProps<typeof FieldPrimitive.Label>) => {

    return (
        <FieldPrimitive.Label className={classNames(
                                // "inline-block", // switched to flex for Checkbox and Inline Elements
                                "flex items-center gap-x-1.5",
                                "pb-1 text-sm font-medium text-neutral-700", 
                                className
                            )} {...props}>
            { children }
        </FieldPrimitive.Label>
    )
}

export const FieldError = ({ className, children, ...props }: React.ComponentProps<typeof FieldPrimitive.Error>) => {
    
    return (
        <FieldPrimitive.Error className={classNames("text-sm text-red-600", className)} {...props}>
            { children }
        </FieldPrimitive.Error>
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
                ? <span className="text-muted-foreground text-sm">{ text }</span>
                : children
            }
        </div>
    )
}
