import { Field as FieldPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

export type FieldErrorProps = React.ComponentProps<typeof FieldPrimitive.Root>

export const FieldError = ({ className, children, ...props }: FieldErrorProps) => {

    return (
        <FieldPrimitive.Error className={classNames("text-sm text-destructive", className)} { ...props } />
    )
}
