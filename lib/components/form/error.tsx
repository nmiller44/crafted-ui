export type FormErrorProps = {
    errors?: string[];
}

export const FormError = (props: FormErrorProps) => {
    const errors = props.errors;

    return (
        !!errors && 
            <div className="mt-2 text-sm text-red-600">
                { errors.toString() }
            </div>
    )
}