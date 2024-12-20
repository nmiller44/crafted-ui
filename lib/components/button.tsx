import { classNames } from "../utils.js";

export type ButtonProps = {
    id?: string;
    type?: "button" | "submit" | "reset";
    value?: string;
    color?: string;                             //"green" | "red" | "yellow" | "white";
    rounded?: boolean;
    square?: boolean;
    className?: string;
    form?: string;
    btnRef?: React.RefObject<HTMLButtonElement>;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
}

const colorStyleMapper = (color: string) => {
    switch(color) {
        case "green":               return "border-transparent text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 ";
        case "red":                 return "border-transparent text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 ";
        case "yellow":              return "border-transparent text-white bg-yellow-400 hover:bg-yellow-800 focus:ring-yellow-300 ";
        case "white":               return "border-gray-300 text-neutral-700 bg-white hover:bg-gray-50 focus:ring-indigo-500 ";

        case "outline-red":         return "border-red-700 text-red-700 bg-transparent hover:bg-red-50 focus:ring-red-300 ";
        case "outline-green":       return "border-green-700 text-green-700 bg-transparent hover:bg-green-50 focus:ring-green-300 ";

        default:                    return "border-transparent text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-300 ";
    }
}

export const Button = (props: ButtonProps) => {
    const id = props.id || 'button-base-undefined';
    const type = props.type || 'button';
    const value = props.value;
    const btnRef = props.btnRef;
    const className = props.className ? ` ${props.className}` : "";
    const form = props.form;
    
    const colorStyle = props.color ? colorStyleMapper(props.color) : " ";
    
    return (
        <button 
            type={type}   
            // className={`${colorStyle}inline-flex justify-center ${rounded} border py-2 ${square} text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2${className}`}
            className={classNames(
                colorStyle,
                "inline-flex w-full justify-center",
                props.rounded ? "rounded-full" : "rounded-md",                              
                "border py-2",
                props.square ? "px-2" : "px-3",
                "text-sm font-semibold shadow-sm",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                className
            )}
            id={id}
            name={id}
            { ...(value && {value: value})}
            onClick={props.onClick}
            ref={btnRef}
            { ...(form && {form: form})}
        >
                { props.children }
        </button>    
    )
}