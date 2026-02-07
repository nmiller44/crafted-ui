import { classNames } from "~/utils";
import type { Clr } from "~/types/colors";

/**
 * A versatile button component for actions, links, and form submissions.
 * Supports multiple color variants, outline, full width, rounded, and ghost styling.
 * 
 * @component
 * @category Components
 * @accessibility Supports keyboard navigation, focus states, and all native button attributes
 * @since 0.1.0
 * @see {@link https://crafted-ui.com/docs/components/button}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-components-button}
 */
export type ButtonProps = React.ComponentProps<"button"> & {
    clr?: Clr,
    outline?: boolean,
    full?: boolean,
    rounded?: boolean,
    ghost?: boolean,
    type?: "button" | "submit" | "reset",
}

/**
 * @param clr - Color variant (defaults to "primary")
 * @param outline - Outline styling instead of filled (defaults to false)
 * @param full - Full width button (defaults to false)
 * @param rounded - Pill-shaped borders (defaults to false)
 * @param ghost - Minimal styling with no border or background, only text color and hover effect (defaults to false)
 * @param type - Defaults to "button". Only use "submit" for form submissions to prevent unintended form submissions
 */
export const Button = ({ clr = "primary", outline = false, full = false, rounded = false, ghost = false, type = "button", className, children, ...props }: ButtonProps) => {

    const colorStyle = {
        blank: 'text-foreground bg-transparent hover:bg-foreground/10 focus:ring-foreground',
        dark: 'text-background bg-foreground hover:bg-foreground/80 focus:ring-foreground',
        primary: 'text-primary-foreground bg-primary hover:bg-primary/80 focus:ring-primary',
        muted: 'text-muted-foreground bg-muted hover:bg-muted/10 focus:ring-muted',
        secondary: 'text-secondary-foreground bg-secondary hover:bg-secondary/80 focus:ring-secondary',
        accent: 'text-accent-foreground bg-accent hover:bg-accent/80 focus:ring-accent',
        destructive: 'text-destructive-foreground bg-destructive hover:bg-destructive/80 focus:ring-destructive',
        
        danger: 'text-white bg-danger hover:bg-danger/80 focus:ring-danger',
        warning: 'text-white bg-warning hover:bg-warning/80 focus:ring-warning',
        success: 'text-white bg-success hover:bg-success/80 focus:ring-success',
        info: 'text-white bg-info hover:bg-info/80 focus:ring-info',

        slate: 'text-white bg-slate-600 hover:bg-slate-500 focus:ring-slate-300',
        gray: 'text-white bg-gray-600 hover:bg-gray-500 focus:ring-gray-300',
        zinc: 'text-white bg-zinc-600 hover:bg-zinc-500 focus:ring-zinc-300',
        neutral: 'text-white bg-neutral-600 hover:bg-neutral-500 focus:ring-neutral-300',
        stone: 'text-white bg-stone-600 hover:bg-stone-500 focus:ring-stone-300',
        red: 'text-white bg-red-600 hover:bg-red-500 focus:ring-red-300',
        orange: 'text-white bg-orange-600 hover:bg-orange-500 focus:ring-orange-300',
        amber: 'text-white bg-amber-600 hover:bg-amber-500 focus:ring-amber-300',
        yellow: 'text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-yellow-300',
        lime: 'text-white bg-lime-600 hover:bg-lime-500 focus:ring-lime-300',
        green: 'text-white bg-green-600 hover:bg-green-500 focus:ring-green-300',
        emerald: 'text-white bg-emerald-600 hover:bg-emerald-500 focus:ring-emerald-300',
        teal: 'text-white bg-teal-600 hover:bg-teal-500 focus:ring-teal-300',
        cyan: 'text-white bg-cyan-600 hover:bg-cyan-500 focus:ring-cyan-300',
        sky: 'text-white bg-sky-600 hover:bg-sky-500 focus:ring-sky-300',
        blue: 'text-white bg-blue-600 hover:bg-blue-500 focus:ring-blue-300',
        indigo: 'text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-indigo-300',
        violet: 'text-white bg-violet-600 hover:bg-violet-500 focus:ring-violet-300',
        purple: 'text-white bg-purple-600 hover:bg-purple-500 focus:ring-purple-300',
        fuchsia: 'text-white bg-fuchsia-600 hover:bg-fuchsia-500 focus:ring-fuchsia-300',
        pink: 'text-white bg-pink-600 hover:bg-pink-500 focus:ring-pink-300',
        rose: 'text-white bg-rose-600 hover:bg-rose-500 focus:ring-rose-300',
    }

    const outlineStyle = {
        blank: 'border-foreground text-foreground hover:bg-foreground/10 focus:ring-foreground',
        dark: 'border-foreground text-foreground hover:bg-foreground/10 focus:ring-foreground',
        primary: 'border-primary text-primary hover:bg-primary/10 focus:ring-primary',
        muted: 'border-muted text-muted hover:bg-muted/80 focus:ring-muted',
        secondary: 'border-secondary text-secondary hover:bg-secondary/10 focus:ring-secondary',
        accent: 'border-accent text-accent hover:bg-accent/10 focus:ring-accent',
        destructive: 'border-destructive text-destructive hover:bg-destructive/10 focus:ring-destructive',
        
        danger: 'border-danger text-danger hover:bg-danger/10 focus:ring-danger',
        warning: 'border-warning text-warning hover:bg-warning/10 focus:ring-warning',
        success: 'border-success text-success hover:bg-success/10 focus:ring-success',
        info: 'border-info text-info hover:bg-info/10 focus:ring-info',

        slate: 'border-slate-600 text-slate-600 hover:bg-slate-50 focus:ring-slate-300',
        gray: 'border-gray-600 text-gray-600 hover:bg-gray-50 focus:ring-gray-300',
        zinc: 'border-zinc-600 text-zinc-600 hover:bg-zinc-50 focus:ring-zinc-300',
        neutral: 'border-neutral-600 text-neutral-600 hover:bg-neutral-50 focus:ring-neutral-300',
        stone: 'border-stone-600 text-stone-600 hover:bg-stone-50 focus:ring-stone-300',
        red: 'border-red-600 text-red-600 hover:bg-red-50 focus:ring-red-300',
        orange: 'border-orange-600 text-orange-600 hover:bg-orange-50 focus:ring-orange-300',
        amber: 'border-amber-600 text-amber-600 hover:bg-amber-50 focus:ring-amber-300',
        yellow: 'border-yellow-600 text-yellow-600 hover:bg-yellow-50 focus:ring-yellow-300',
        lime: 'border-lime-600 text-lime-600 hover:bg-lime-50 focus:ring-lime-300',
        green: 'border-green-600 text-green-600 hover:bg-green-50 focus:ring-green-300',
        emerald: 'border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-300',
        teal: 'border-teal-600 text-teal-600 hover:bg-teal-50 focus:ring-teal-300',
        cyan: 'border-cyan-600 text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-300',
        sky: 'border-sky-600 text-sky-600 hover:bg-sky-50 focus:ring-sky-300',
        blue: 'border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-300',
        indigo: 'border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-300',
        violet: 'border-violet-600 text-violet-600 hover:bg-violet-50 focus:ring-violet-300',
        purple: 'border-purple-600 text-purple-600 hover:bg-purple-50 focus:ring-purple-300',
        fuchsia: 'border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-50 focus:ring-fuchsia-300',
        pink: 'border-pink-600 text-pink-600 hover:bg-pink-50 focus:ring-pink-300',
        rose: 'border-rose-600 text-rose-600 hover:bg-rose-50 focus:ring-rose-300',
    }

    const ghostStyle = {
        blank: 'hover:text-foreground focus:text-foreground',
        dark: 'hover:text-foreground focus:text-foreground',
        primary: 'hover:text-primary focus:text-primary',
        muted: 'hover:text-muted focus:text-muted',
        secondary: 'hover:text-secondary focus:text-secondary',
        accent: 'hover:text-accent focus:text-accent',
        destructive: 'hover:text-destructive focus:text-destructive',
        
        danger: 'hover:text-danger focus:text-danger',
        warning: 'hover:text-warning focus:text-warning',
        success: 'hover:text-success focus:text-success',
        info: 'hover:text-info focus:text-info',

        slate: 'hover:text-slate-600 focus:text-slate-600',
        gray: 'hover:text-gray-600 focus:text-gray-600',
        zinc: 'hover:text-zinc-600 focus:text-zinc-600',
        neutral: 'hover:text-neutral-600 focus:text-neutral-600',
        stone: 'hover:text-stone-600 focus:text-stone-600',
        red: 'hover:text-red-600 focus:text-red-600',
        orange: 'hover:text-orange-600 focus:text-orange-600',
        amber: 'hover:text-amber-600 focus:text-amber-600',
        yellow: 'hover:text-yellow-600 focus:text-yellow-600',
        lime: 'hover:text-lime-600 focus:text-lime-600',
        green: 'hover:text-green-600 focus:text-green-600',
        emerald: 'hover:text-emerald-600 focus:text-emerald-600',
        teal: 'hover:text-teal-600 focus:text-teal-600',
        cyan: 'hover:text-cyan-600 focus:text-cyan-600',
        sky: 'hover:text-sky-600 focus:text-sky-600',
        blue: 'hover:text-blue-600 focus:text-blue-600',
        indigo: 'hover:text-indigo-600 focus:text-indigo-600',
        violet: 'hover:text-violet-600 focus:text-violet-600',
        purple: 'hover:text-purple-600 focus:text-purple-600',
        fuchsia: 'hover:text-fuchsia-600 focus:text-fuchsia-600',
        pink: 'hover:text-pink-600 focus:text-pink-600',
        rose: 'hover:text-rose-600 focus:text-rose-600',
    }

    const buttonClass = classNames(
        "relative *:after:absolute *:after:inset-0", //stretched link
        "inline-flex text-center justify-center content-center items-center",
        "hover:[text-shadow:0.5px_0_0_currentColor]",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
        ghost ? "focus:[text-shadow:0.5px_0_0_currentColor] focus:bg-muted/30" : "focus:[text-shadow:0.5px_0_0_currentColor]",
        rounded ? "rounded-full" : "rounded-md",
        full ? "w-full" : "",
        ghost ? "text-muted-foreground bg-transparent border-0 p-2 gap-2 text-sm font-normal" : "border border-transparent bg-transparent px-3.5 py-2.5 gap-2 text-sm font-semibold shadow-sm",
        ghost ? "focus:outline-none" : "focus:outline-none focus:ring-2 focus:ring-offset-2",
        ghost ? ghostStyle[clr] : outline ? outlineStyle[clr] : colorStyle[clr],
        className
    )

    return (
        <button type={type}
                className={buttonClass} { ...props }>
            { children }
        </button>
    )
}
