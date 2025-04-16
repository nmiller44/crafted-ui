import { classNames } from "~/utils";

export type ButtonProps = React.ComponentProps<"button">

export const Button = ({ type = "button", className, children, ...props }: ButtonProps) => {

    const buttonClass = classNames(
        "relative *:after:absolute *:after:inset-0", //stretched link
        // outline ? outlineStyle[color] : colorStyle[color],
        'border-transparent text-primary-foreground bg-primary hover:bg-primary/80 focus:ring-primary',
        // full ? "w-full" : "",
        "inline-flex text-center justify-center content-center items-center",
        "rounded-md", // rounded ? "rounded-full" : "rounded-md", 
        "border px-3.5 py-2.5 space-x-2",
        "text-sm font-semibold shadow-sm",
        "focus:outline-none focus:ring-2 focus:ring-offset-2",
        className
    )

    return (
        <button type={type}
                className={classNames(buttonClass, className)} { ...props }>
            { children }
        </button>
    )
}
