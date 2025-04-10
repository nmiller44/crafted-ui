import { classNames } from "../utils.js";

export type ButtonProps = React.ComponentProps<"button"> & {
    color?: 'default' | 'green' | 'red' | 'yellow' | 'blue' | 'indigo' | 'purple' | 'pink';
    outline?: boolean;
    full?: boolean;
    rounded?: boolean;
}

const colorStyle = {
    default: 'border-transparent text-neutral-700 bg-neutral-100 hover:bg-neutral-200 focus:ring-neutral-100',
    green: 'border-transparent text-white bg-green-600 hover:bg-green-500 focus:ring-green-300',
    red: 'border-transparent text-white bg-red-600 hover:bg-red-500 focus:ring-red-300',
    yellow: 'border-transparent text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-yellow-300',
    blue: 'border-transparent text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-300',
    indigo: 'border-transparent text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-300',
    purple: 'border-transparent text-white bg-purple-600 hover:bg-purple-500 focus:ring-purple-300',
    pink: 'border-transparent text-white bg-pink-600 hover:bg-pink-500 focus:ring-pink-300',
}

const outlineStyle = {
    default: 'border-neutral-700 text-neutral-700 bg-transparent hover:bg-neutral-50 focus:ring-neutral-300',
    green: 'border-green-700 text-green-700 bg-transparent hover:bg-green-50 focus:ring-green-300',
    red: 'border-red-700 text-red-700 bg-transparent hover:bg-red-50 focus:ring-red-300',
    yellow: 'border-yellow-700 text-yellow-700 bg-transparent hover:bg-yellow-50 focus:ring-yellow-300',
    blue: 'border-blue-700 text-blue-700 bg-transparent hover:bg-blue-50 focus:ring-blue-300',
    indigo: 'border-indigo-700 text-indigo-700 bg-transparent hover:bg-indigo-50 focus:ring-indigo-300',
    purple: 'border-purple-700 text-purple-700 bg-transparent hover:bg-purple-50 focus:ring-purple-300',
    pink: 'border-pink-700 text-pink-700 bg-transparent hover:bg-pink-50 focus:ring-pink-300',
}

export const Button = ({
    type = "button",
    color = "default",
    outline = false,
    full = false,
    rounded = false,
    children,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button  
            type={type}
            className={classNames(
                "relative *:after:absolute *:after:inset-0", //stretched link
                outline ? outlineStyle[color] : colorStyle[color],
                full ? "w-full" : "",
                "inline-flex text-center justify-center content-center items-center",
                rounded ? "rounded-full" : "rounded-md", 
                "border px-3.5 py-2.5 space-x-2",
                "text-sm font-semibold shadow-sm",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                className
            )}
            {...props}
        >
                { children }
        </button>    
    )
}
