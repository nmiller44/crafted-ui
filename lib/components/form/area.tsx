import { classNames } from "../../utils.js";
import { FormError } from "./error.js";

const DEFAULTROWS = 3;

export type FormAreaProps = {
    id?: string;
    rows?: number;
    value?: string;
    errors?: string[];
    children?: React.ReactNode;
    onChange?: any;
}

export const FormArea = (props: FormAreaProps) => {
    const id = props.id || "";
    const rows = props.rows || DEFAULTROWS;
    const value = props.value;
    const errors = props.errors;
    const children = props.children;
    const onChange = props.onChange;

    return (
        <div>
            { children }
            <textarea   id={ id } 
                        name={ id } 
                        rows={ rows } 
                        aria-invalid={ !!errors }
                        required={ !!errors }
                        className={classNames(
                            "mt-1 block w-full py-2 px-3",
                            "rounded-md border-0 ring-1 ring-inset ring-neutral-300 shadow-sm",
                            "invalid:ring-red-600",
                            "text-sm text-neutral-900 placeholder:text-neutral-400", 
                            "focus:ring-2 focus:ring-inset focus:border-neutral-800 focus:outline-none focus:ring-neutral-800")}
                        { ...(value && {defaultValue: value})}
                        { ...(onChange && {onChange: onChange})}
            ></textarea>
            <FormError errors={ errors } />
        </div>
    )
}