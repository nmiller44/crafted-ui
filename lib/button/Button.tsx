import { classNames } from "~/utils";
import type { Clr } from "~/types/colors";

/**
 * A versatile button component with multiple color variants and styling options.
 * 
 * @component
 * @category Components
 * @accessibility Supports keyboard navigation, focus states, and all native button attributes
 * @since 0.1.0
 */
export type ButtonProps = React.ComponentProps<"button"> & {
    clr?: Clr,
    outline?: boolean,
    full?: boolean,
    rounded?: boolean,
    type?: "button" | "submit" | "reset",
}

/**
 * @param clr - Color variant (defaults to "primary")
 * @param outline - Outline styling instead of filled (defaults to false)
 * @param full - Full width button (defaults to false)
 * @param rounded - Pill-shaped borders (defaults to false)
 * @param type - Defaults to "button". Only use "submit" for form submissions to prevent unintended form submissions
 */
export const Button = ({ clr = "primary", outline = false, full = false, rounded = false, type = "button", className, children, ...props }: ButtonProps) => {

    const colorStyle = {
        blank: 'border-transparent text-foreground bg-transparent hover:bg-foreground/10 focus:ring-foreground',
        dark: 'border-transparent text-background bg-foreground hover:bg-foreground/80 focus:ring-foreground',
        primary: 'border-transparent text-primary-foreground bg-primary hover:bg-primary/80 focus:ring-primary',
        muted: 'border-transparent text-muted-foreground bg-muted hover:bg-muted/10 focus:ring-muted',
        secondary: 'border-transparent text-secondary-foreground bg-secondary hover:bg-secondary/80 focus:ring-secondary',
        accent: 'border-transparent text-accent-foreground bg-accent hover:bg-accent/80 focus:ring-accent',
        destructive: 'border-transparent text-destructive-foreground bg-destructive hover:bg-destructive/80 focus:ring-destructive',
        
        danger: 'border-transparent text-white bg-danger hover:bg-danger/80 focus:ring-danger',
        warning: 'border-transparent text-white bg-warning hover:bg-warning/80 focus:ring-warning',
        success: 'border-transparent text-white bg-success hover:bg-success/80 focus:ring-success',
        info: 'border-transparent text-white bg-info hover:bg-info/80 focus:ring-info',

        slate: 'border-transparent text-white bg-slate-600 hover:bg-slate-500 focus:ring-slate-300',
        gray: 'border-transparent text-white bg-gray-600 hover:bg-gray-500 focus:ring-gray-300',
        zinc: 'border-transparent text-white bg-zinc-600 hover:bg-zinc-500 focus:ring-zinc-300',
        neutral: 'border-transparent text-white bg-neutral-600 hover:bg-neutral-500 focus:ring-neutral-300',
        stone: 'border-transparent text-white bg-stone-600 hover:bg-stone-500 focus:ring-stone-300',
        red: 'border-transparent text-white bg-red-600 hover:bg-red-500 focus:ring-red-300',
        orange: 'border-transparent text-white bg-orange-600 hover:bg-orange-500 focus:ring-orange-300',
        amber: 'border-transparent text-white bg-amber-600 hover:bg-amber-500 focus:ring-amber-300',
        yellow: 'border-transparent text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-yellow-300',
        lime: 'border-transparent text-white bg-lime-600 hover:bg-lime-500 focus:ring-lime-300',
        green: 'border-transparent text-white bg-green-600 hover:bg-green-500 focus:ring-green-300',
        emerald: 'border-transparent text-white bg-emerald-600 hover:bg-emerald-500 focus:ring-emerald-300',
        teal: 'border-transparent text-white bg-teal-600 hover:bg-teal-500 focus:ring-teal-300',
        cyan: 'border-transparent text-white bg-cyan-600 hover:bg-cyan-500 focus:ring-cyan-300',
        sky: 'border-transparent text-white bg-sky-600 hover:bg-sky-500 focus:ring-sky-300',
        blue: 'border-transparent text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-300',
        indigo: 'border-transparent text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-300',
        violet: 'border-transparent text-white bg-violet-600 hover:bg-violet-500 focus:ring-violet-300',
        purple: 'border-transparent text-white bg-purple-600 hover:bg-purple-500 focus:ring-purple-300',
        fuchsia: 'border-transparent text-white bg-fuchsia-600 hover:bg-fuchsia-500 focus:ring-fuchsia-300',
        pink: 'border-transparent text-white bg-pink-600 hover:bg-pink-500 focus:ring-pink-300',
        rose: 'border-transparent text-white bg-rose-600 hover:bg-rose-500 focus:ring-rose-300',
    }

    const outlineStyle = {
        blank: 'border-foreground text-foreground bg-transparent hover:bg-foreground/10 focus:ring-foreground',
        dark: 'border-foreground text-foreground bg-transparent hover:bg-foreground/10 focus:ring-foreground',
        primary: 'border-primary text-primary bg-transparent hover:bg-primary/10 focus:ring-primary',
        muted: 'border-muted text-muted-foreground bg-transparent hover:bg-muted/80 focus:ring-muted',
        secondary: 'border-secondary text-secondary bg-transparent hover:bg-secondary/10 focus:ring-secondary',
        accent: 'border-accent text-accent bg-transparent hover:bg-accent/10 focus:ring-accent',
        destructive: 'border-destructive text-destructive bg-transparent hover:bg-destructive/10 focus:ring-destructive',
        
        danger: 'border-danger text-danger bg-transparent hover:bg-danger/10 focus:ring-danger',
        warning: 'border-warning text-warning bg-transparent hover:bg-warning/10 focus:ring-warning',
        success: 'border-success text-success bg-transparent hover:bg-success/10 focus:ring-success',
        info: 'border-info text-info bg-transparent hover:bg-info/10 focus:ring-info',

        slate: 'border-slate-600 text-slate-600 bg-transparent hover:bg-slate-50 focus:ring-slate-300',
        gray: 'border-gray-600 text-gray-600 bg-transparent hover:bg-gray-50 focus:ring-gray-300',
        zinc: 'border-zinc-600 text-zinc-600 bg-transparent hover:bg-zinc-50 focus:ring-zinc-300',
        neutral: 'border-neutral-600 text-neutral-600 bg-transparent hover:bg-neutral-50 focus:ring-neutral-300',
        stone: 'border-stone-600 text-stone-600 bg-transparent hover:bg-stone-50 focus:ring-stone-300',
        red: 'border-red-600 text-red-600 bg-transparent hover:bg-red-50 focus:ring-red-300',
        orange: 'border-orange-600 text-orange-600 bg-transparent hover:bg-orange-50 focus:ring-orange-300',
        amber: 'border-amber-600 text-amber-600 bg-transparent hover:bg-amber-50 focus:ring-amber-300',
        yellow: 'border-yellow-600 text-yellow-600 bg-transparent hover:bg-yellow-50 focus:ring-yellow-300',
        lime: 'border-lime-600 text-lime-600 bg-transparent hover:bg-lime-50 focus:ring-lime-300',
        green: 'border-green-600 text-green-600 bg-transparent hover:bg-green-50 focus:ring-green-300',
        emerald: 'border-emerald-600 text-emerald-600 bg-transparent hover:bg-emerald-50 focus:ring-emerald-300',
        teal: 'border-teal-600 text-teal-600 bg-transparent hover:bg-teal-50 focus:ring-teal-300',
        cyan: 'border-cyan-600 text-cyan-600 bg-transparent hover:bg-cyan-50 focus:ring-cyan-300',
        sky: 'border-sky-600 text-sky-600 bg-transparent hover:bg-sky-50 focus:ring-sky-300',
        blue: 'border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-300',
        indigo: 'border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-50 focus:ring-indigo-300',
        violet: 'border-violet-600 text-violet-600 bg-transparent hover:bg-violet-50 focus:ring-violet-300',
        purple: 'border-purple-600 text-purple-600 bg-transparent hover:bg-purple-50 focus:ring-purple-300',
        fuchsia: 'border-fuchsia-600 text-fuchsia-600 bg-transparent hover:bg-fuchsia-50 focus:ring-fuchsia-300',
        pink: 'border-pink-600 text-pink-600 bg-transparent hover:bg-pink-50 focus:ring-pink-300',
        rose: 'border-rose-600 text-rose-600 bg-transparent hover:bg-rose-50 focus:ring-rose-300',
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
