import { Form as FormPrimitive } from "@base-ui/react"
import { classNames } from "~/utils";
import { FormAlert, type FormAlertValue } from "./FormAlert";

/**
 * Form component with submission handling and error propagation.
 * Provides context for Fieldset, Field, and FieldsetButtons components.
 * 
 * Supports unified error handling via the `errors` prop:
 * - Field-level errors: `{ fieldName: ['Error message'] }`
 * - Form-level errors: `{ _form: 'Form error message' }`
 * - Form-level feedback: `{ _form: { status: 'warning', title: 'No Changes', message: 'No changes were made' } }`
 * 
 * Form-level feedback is automatically displayed at the top of the form.
 * Field-level errors are propagated to Field components.
 * 
 * @component
 * @category Forms
 * @accessibility Handles form submission and ARIA attributes from Base UI
 * @since 0.1.0
 * @related Fieldset - Use to group Fields within the Form
 * @related Field - Individual form fields within Fieldset
 * @related FormAlert - Automatically rendered for form-level feedback
 * @see {@link https://crafted-ui.com/docs/forms/form}
 * 
 * @param errors - Unified error object with field errors and optional _form property for form-level feedback
 */
type BaseFormProps = Omit<Parameters<typeof FormPrimitive>[0], "errors">;

export type FormProps = BaseFormProps & {
    errors?: {
        _form?: FormAlertValue;
        [key: string]: string | string[] | FormAlertValue | undefined;
    } | null;
}

export const Form = ({ errors, className, children, ref, ...props }: FormProps) => {
    const formAlert = errors?._form;

    return (
        <FormPrimitive className={classNames("flex flex-col space-y-6", className)} ref={ ref } { ...props }>
            <FormAlert feedback={formAlert} />
            { children }
        </FormPrimitive>
    )
}
