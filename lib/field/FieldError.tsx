import { Field as FieldPrimitive } from "@base-ui/react"
import { classNames } from "~/utils";

/**
 * Validation message for a Field, shown when the input is in an error state.
 *
 * Field renders this automatically, so compose it directly only when the error needs custom
 * placement or content.
 *
 * @component
 * @category Forms
 * @accessibility Base UI links the message to its input and announces it to screen readers
 * @since 0.1.0
 * @related Field - Renders FieldError automatically for field-level errors
 * @see {@link https://crafted-ui.com/docs/forms/field}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-field}
 */
export type FieldErrorProps = React.ComponentProps<typeof FieldPrimitive.Root>

export const FieldError = ({ className, children, ...props }: FieldErrorProps) => {

    return (
        <FieldPrimitive.Error className={classNames("text-sm text-destructive", className)} { ...props } />
    )
}
