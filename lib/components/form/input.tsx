import { Children, isValidElement } from "react";
import { classNames } from "../../utils.js";


export type FormInputProps = {
    id?: string;
    name?: string;
    type?: string;
    value?: string;
    readonly?: boolean;
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
    const label = !!props.name || false;
    const value = props.value;
    const readonly = props.readonly || false;
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
                <input type={ type } name={ id } id={ id } autoComplete={ id } 
                        { ...(value && (readonly || !!onChange) ? {value: value} : {defaultValue: value}) }
                        { ...(readonly && {readOnly: true})}
                        className={classNames(
                                "mt-1 block w-full py-2 px-3",
                                hasLeftInsetChild ? "pl-7" : "pl-3",
                                "rounded-md border border-gray-300 shadow-sm focus:border-mid-green focus:ring-mid-green sm:text-sm")}
                        { ...(onChange && {onChange: onChange})}
                    />
            </div>
        </div>
    )
}

export const FormInputLabel = (props: FormInputLabelProps) => {
    const id = props.id || "";
    const children = props.children;

    return (
        <label htmlFor={ id } className="block pb-1 text-sm font-medium text-gray-700">
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
                    "text-gray-500 text-sm",
                    insetPosition === "left" ? "left-0 pl-3" : "right-0 pr-3"
                )}>
            { !!text
                ? <span className="text-gray-500 text-sm">{ text }</span>
                : children
            }
        </div>
    )
}