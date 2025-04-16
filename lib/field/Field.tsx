import { Field as FieldPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";
import { FieldError } from "./FieldError";

export type FieldProps = React.ComponentProps<typeof FieldPrimitive.Root>

export const Field = ({ className, children, ...props }: FieldProps) => {

    return (
        <FieldPrimitive.Root className={classNames("relative space-y-1.5", className)} {...props}>
            { children }
            <FieldError />
        </FieldPrimitive.Root>

    )
}