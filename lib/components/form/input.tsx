

export type FormInputProps = {
    id?: string;
    name?: string;
    children?: React.ReactNode;
}

export type FormInputLabelProps = {
    id?: string;
    children?: React.ReactNode;
}

export type FormInputFieldProps = {
    id: string;
    type?: string;
    value?: string;
    readonly?: boolean;
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormInput = (props: FormInputProps) => {
    const id = props.id || "";
    const label = !!props.name || false;

    const inputClass = "py-2" //{ `${label && "py-2 "}` }

    return (
        <div className={ inputClass }>
            { props.children }
        </div>
    )
}

export const FormInputLabel = (props: FormInputLabelProps) => {
    const id = props.id || "";

    return (
        <div>
            <label htmlFor={ id } className="block pb-1 text-sm font-medium text-gray-700">
                { props.children }
            </label>             
        </div>  
    )
}

export const FormInputField = (props: FormInputFieldProps) => {

    const id = props.id || "";
    const type = props.type || "text";
    const value = props.value;
    const readonly = props.readonly || false;
    const onChange = props.onChange;

    const offset = 'pl-3' // leftIcon ? 'pl-7' : 'pl-3';

    return (
        <div className="relative">
            <input type={ type } name={ id } id={ id } autoComplete={ id } 
                    { ...(value && {defaultValue: value})}
                    { ...(readonly && {readOnly: true})}
                    className={`mt-1 block w-full py-2 px-3 ${offset} rounded-md border border-gray-300 shadow-sm focus:border-mid-green focus:ring-mid-green sm:text-sm`}
                    { ...(onChange && {onChange: onChange})}
                />
            { props.children}
        </div>
    )
}