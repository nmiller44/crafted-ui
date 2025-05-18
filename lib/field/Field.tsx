import { Field as FieldPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";
import { FieldError } from "./FieldError";
import { FieldLabel } from "./FieldLabel";

export type FieldProps = React.ComponentProps<typeof FieldPrimitive.Root> & {
    label?: string | React.ReactNode;
}

export const Field = ({ label, className, children, ...props }: FieldProps) => {

    return (
        <FieldPrimitive.Root 
            className={classNames(
                        "relative space-y-1.5",
                        "col-span-full",
                        className)} {...props}>
            { !!label && <FieldLabel>{ label }</FieldLabel> }
            { children }
            <FieldError />
        </FieldPrimitive.Root>

    )
}