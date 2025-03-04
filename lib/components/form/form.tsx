import { Form as FormPrimitive } from "@base-ui-components/react"
import { forwardRef, type ComponentProps } from "react"

export const Form = forwardRef<HTMLFormElement, ComponentProps<typeof FormPrimitive>>(({
    children,   
    ...props
}, ref) => {

    return (
        <FormPrimitive ref={ ref } { ...props }>
            { children }
        </FormPrimitive>
    )
})
