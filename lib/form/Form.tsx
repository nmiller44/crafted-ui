import { Form as FormPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

export type FormProps = React.ComponentProps<typeof FormPrimitive>

export const Form = ({ className, children, ref, ...props }: FormProps) => {

    return (
        <FormPrimitive className={classNames(className)} ref={ ref } { ...props }>
            { children }
        </FormPrimitive>
    )
}
