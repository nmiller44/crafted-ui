export type FormLabelProps = {
    id?: string;
    children?: React.ReactNode;
}

export const FormLabel = (props: FormLabelProps) => {
    const id = props.id || "";
    const children = props.children;

    return (
        <label htmlFor={ id } className="block pb-1 text-sm font-medium">
            { children }
        </label>              
    )
}