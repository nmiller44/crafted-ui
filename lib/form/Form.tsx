import { Form as FormPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

/**
 * Form component with submission handling and error propagation.
 * Provides context for Fieldset, Field, and FieldsetButtons components.
 * 
 * @component
 * @category Forms
 * @accessibility Handles form submission and ARIA attributes from Base UI
 * @since 0.1.0
 * @related Fieldset - Use to group Fields within the Form
 * @related Field - Individual form fields within Fieldset
 * @see {@link https://crafted-ui.com/docs/forms/form}
 */
export type FormProps = React.ComponentProps<typeof FormPrimitive>

export const Form = ({ className, children, ref, ...props }: FormProps) => {

    return (
        <FormPrimitive className={classNames(className)} ref={ ref } { ...props }>
            { children }
        </FormPrimitive>
    )
}
