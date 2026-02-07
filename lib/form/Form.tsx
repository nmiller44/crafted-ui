import { Form as FormPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

/**
 * Form component wrapper for handling form submission and errors.
 * Provides context for Fieldset, Field, and FieldsetButtons components.
 * 
 * @component
 * @category Forms
 * @accessibility Handles form submission, error propagation, and ARIA attributes from Base UI
 * @since 0.1.0
 * @related Fieldset - Use Fieldset to group Fields within a Form
 * @related Field - Individual form fields within Fieldset
 * @related FieldsetButtons - Action buttons for forms (inside Fieldset)
 * @see {@link https://crafted-ui.com/docs/forms/form}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-form}
 */
export type FormProps = React.ComponentProps<typeof FormPrimitive>

/**
 * @param ref - Optional React ref for the form element
 * @remarks Always use Fieldset to group Fields for proper layout and accessibility.
 */
export const Form = ({ className, children, ref, ...props }: FormProps) => {

    return (
        <FormPrimitive className={classNames(className)} ref={ ref } { ...props }>
            { children }
        </FormPrimitive>
    )
}
