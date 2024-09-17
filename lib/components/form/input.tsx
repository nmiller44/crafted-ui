import { Children, isValidElement } from "react";
import { classNames } from "../../utils.js";
import { FormError } from "./error.js";


export type FormInputProps = {
    id?: string;
    name?: string;
    type?: string;
    value?: string;
    readonly?: boolean;
    errors?: string[];
    children?: React.ReactNode;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type FormInputLabelProps = {
    id?: string;
    children?: React.ReactNode;
}

export type FormInputInsetProps = {
    text?: string;
    insetPosition?: string;
    children?: React.ReactNode;
}

export const FormInput = (props: FormInputProps) => {
    const id = props.id || "";
    const type = props.type || "text";
    const value = props.value;
    const readonly = props.readonly || false;
    const errors = props.errors;
    const children = props.children;
    const onChange = props.onChange;

    let hasLeftInsetChild = false;

    if(children) {
        Children.forEach(children, (child) => {
            if (isValidElement(child)) {
                if (child.type === FormInputInset) {
                    if(child.props.insetPosition === "left") { hasLeftInsetChild = true; }
                }
            }
        });
    }

    const inputClass = "py-2" //{ `${label && "py-2 "}` }

    return (
        <div className={ inputClass }>
            <div className="relative">
                { children }
                <input  id={ id } 
                        name={ id } 
                        type={ type } 
                        autoComplete={ `crafted-ui-input-${id}` }
                        { ...(value && (readonly || !!onChange) ? {value: value} : {defaultValue: value}) }
                        { ...(readonly && {readOnly: true})}
                        aria-invalid={ !!errors }
                        required={ !!errors }
                        className={classNames(
                                "mt-1 block w-full py-2 px-3",
                                hasLeftInsetChild ? "pl-7" : "pl-3",
                                "rounded-md border-0 ring-1 ring-inset ring-neutral-300 shadow-sm",
                                "invalid:ring-red-600",
                                "text-sm text-neutral-900 placeholder:text-neutral-400", 
                                "focus:ring-2 focus:ring-inset focus:border-neutral-800 focus:outline-none focus:ring-neutral-800",
                                "disabled:opacity-50 disabled:cursor-not-allowed",
                                )}
                        { ...(onChange && {onChange: onChange})}
                    />
            </div>
            <FormError errors={ errors } />
        </div>
    )
}

export const FormInputLabel = (props: FormInputLabelProps) => {
    const id = props.id || "";
    const children = props.children;

    return (
        <label htmlFor={ id } className="block pb-1 text-sm font-medium text-neutral-700">
            { children }
        </label>              
    )
}

export const FormInputInset = (props: FormInputInsetProps) => {
    const text = props.text;
    const children = props.children;
    const insetPosition = props.insetPosition || "right";

    return (
        <div    className={classNames(
                    "pointer-events-none absolute inset-y-0 flex items-end pb-[9px]",
                    "text-neutral-500 text-sm",
                    insetPosition === "left" ? "left-0 pl-3" : "right-0 pr-3"
                )}>
            { !!text
                ? <span className="text-neutral-500 text-sm">{ text }</span>
                : children
            }
        </div>
    )
}