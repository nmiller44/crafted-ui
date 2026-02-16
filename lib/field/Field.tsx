import { Field as FieldPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";
import { FieldError } from "./FieldError";
import { FieldLabel } from "./FieldLabel";

/**
 * Wrapper for form inputs with automatic label and error handling.
 * CRITICAL: Always wrap 2+ Fields in a Fieldset for proper layout and semantics.
 * 
 * @component
 * @category Forms
 * @accessibility Uses semantic HTML and ARIA attributes from Base UI
 * @since 0.1.0
 * @related Fieldset - Always wrap 2+ Fields in a Fieldset for proper layout
 * @related FieldLabel - Automatically rendered when label prop provided
 * @related FieldError - Automatically rendered for field-level errors
 * @see {@link https://crafted-ui.com/docs/forms/field}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-field}
 * 
 * @param label - When provided, automatically renders a FieldLabel above the input
 */
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