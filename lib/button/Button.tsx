import { classNames } from "~/utils";

export type ButtonProps = React.ComponentProps<"button"> & {
    clr?: 'blank' | 'default' | 'primary' | 'muted' | 'secondary' | 'accent' | 'destructive' |
           'green' | 'red' | 'yellow' | 'blue' | 'indigo' | 'purple' | 'pink',
    outline?: boolean,
    full?: boolean,
    rounded?: boolean,
}

export const Button = ({ clr = "default", outline = false, full = false, rounded = false, type = "button", className, children, ...props }: ButtonProps) => {

    const colorStyle = {
        blank: 'border-transparent text-foreground bg-transparent hover:bg-foreground/10 focus:ring-foreground',
        default: 'border-transparent text-background bg-foreground hover:bg-foreground/80 focus:ring-foreground',
        primary: 'border-transparent text-primary-foreground bg-primary hover:bg-primary/80 focus:ring-primary',
        muted: 'border-transparent text-muted-foreground bg-muted hover:bg-muted/10 focus:ring-muted',
        secondary: 'border-transparent text-secondary-foreground bg-secondary hover:bg-secondary/80 focus:ring-secondary',
        accent: 'border-transparent text-accent-foreground bg-accent hover:bg-accent/80 focus:ring-accent',
        destructive: 'border-transparent text-destructive-foreground bg-destructive hover:bg-destructive/80 focus:ring-destructive',

        green: 'border-transparent text-white bg-green-600 hover:bg-green-500 focus:ring-green-300',
        red: 'border-transparent text-white bg-red-600 hover:bg-red-500 focus:ring-red-300',
        yellow: 'border-transparent text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-yellow-300',
        blue: 'border-transparent text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-300',
        indigo: 'border-transparent text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-300',
        purple: 'border-transparent text-white bg-purple-600 hover:bg-purple-500 focus:ring-purple-300',
        pink: 'border-transparent text-white bg-pink-600 hover:bg-pink-500 focus:ring-pink-300',
    }

    const outlineStyle = {
        blank: 'border-foreground text-foreground bg-transparent hover:bg-foreground/10 focus:ring-foreground',
        default: 'border-foreground text-foreground bg-transparent hover:bg-foreground/10 focus:ring-foreground',
        primary: 'border-primary text-primary bg-transparent hover:bg-primary/10 focus:ring-primary',
        muted: 'border-muted text-muted-foreground bg-transparent hover:bg-muted/80 focus:ring-muted',
        secondary: 'border-secondary text-secondary bg-transparent hover:bg-secondary/10 focus:ring-secondary',
        accent: 'border-accent text-accent bg-transparent hover:bg-accent/10 focus:ring-accent',
        destructive: 'border-destructive text-destructive bg-transparent hover:bg-destructive/10 focus:ring-destructive',

        green: 'border-green-600 text-green-600 bg-transparent hover:bg-green-50 focus:ring-green-300',
        red: 'border-red-600 text-red-600 bg-transparent hover:bg-red-50 focus:ring-red-300',
        yellow: 'border-yellow-600 text-yellow-600 bg-transparent hover:bg-yellow-50 focus:ring-yellow-300',
        blue: 'border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-300',
        indigo: 'border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-50 focus:ring-indigo-300',
        purple: 'border-purple-600 text-purple-600 bg-transparent hover:bg-purple-50 focus:ring-purple-300',
        pink: 'border-pink-600 text-pink-600 bg-transparent hover:bg-pink-50 focus:ring-pink-300',
    }

    const buttonClass = classNames(
        "relative *:after:absolute *:after:inset-0", //stretched link
        outline ? outlineStyle[clr] : colorStyle[clr],
        full ? "w-full" : "",
        "inline-flex text-center justify-center content-center items-center",
        rounded ? "rounded-full" : "rounded-md", 
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
