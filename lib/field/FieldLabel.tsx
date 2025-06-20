import { Field as FieldPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

export type FieldLabelProps = React.ComponentProps<typeof FieldPrimitive.Label>

export const FieldLabel = ({ className, children, ...props }: FieldLabelProps) => {

    return (
        <FieldPrimitive.Label className={classNames(
                                            "flex items-center gap-x-1.5",
                                            "pb-1 text-sm font-medium text-foreground", 
                                            className
                                        )} {...props}>
            { children }
        </FieldPrimitive.Label>
    )
}