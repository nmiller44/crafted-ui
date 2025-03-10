import { FormLabel } from "./label.js";
import { classNames } from "../../utils.js";
import { FormError } from "./error.js";

export type FormSelectProps = {
    id: string;
    label?: string;
    value?: string;
    readonly?: boolean;
    errors?: string[];
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
}

export type FormSelectOptionProps = {
    value?: string;
    children?: React.ReactNode;
}

export const FormSelect = ({
    id,
    label,
    value = "",
    readonly = false,
    errors,
    children,
    onChange,
    className = ""
}: FormSelectProps) => {

    return (
        <div className="py-2">
            { !!label && <FormLabel id={ id }>{ label }</FormLabel> }
            <select id={ id } name={ id } autoComplete={ id } 
                    onChange={onChange}
                    { ...(value && (readonly || !!onChange) ? {value: value} : {defaultValue: value}) }
                    aria-invalid={ !!errors }
                    required={ !!errors }
                    className={classNames(
                        "mt-1 block w-full py-2 px-3",
                        "rounded-md border-0 ring-1 ring-inset ring-neutral-300 shadow-sm",
                        "invalid:ring-red-600",
                        "text-sm text-neutral-900 placeholder:text-neutral-400", 
                        "focus:ring-2 focus:ring-inset focus:border-neutral-800 focus:outline-none focus:ring-neutral-800")}
            >
                { !value && <option value="" disabled hidden></option> }

                { children }
            
            </select>
            <FormError errors={ errors } />
        </div>
    )
}

export const FormSelectOption = (props: FormSelectOptionProps) => {
    const value = props.value;
    const children = props.children;

    return (
        <option 
            className="text-neutral-700 block px-4 py-2 text-sm"
            { ...(value && {value: value})}
        >
            { children }
        </option>
    )
}