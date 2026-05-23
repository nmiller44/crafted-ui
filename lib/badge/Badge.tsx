import { classNames } from "~/utils";

/**
 * Display labels, statuses, and counts with color variants.
 * 
 * Supports stretched links: placing a single `<a>` tag as a child makes the entire badge 
 * clickable, useful for clickable tags and filter chips.
 * 
 * @component
 * @category Components
 * @since 0.1.0
 * @see {@link https://crafted-ui.com/docs/components/badge}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-components-badge}
 */
export type BadgeProps = React.ComponentProps<"div"> & {
    title?: string;
    clr?: 'blank' | 'default' | 'primary' | 'muted' | 'secondary' | 'accent' | 'destructive' | 
        'danger' | 'warning' | 'success' | 'info' |
        'green' | 'red' | 'yellow' | 'blue' | 'indigo' | 'purple' | 'pink';
    outline?: boolean;
    pill?: boolean;
}

export const Badge = ({ title, clr = 'default', outline = false, pill = false, className, children, ...props }: BadgeProps) => {

    const colorStyle = {
        blank: 'bg-transparent text-foreground ring-transparent',
        default: 'bg-foreground/10 text-foreground ring-foreground',
        primary: 'bg-primary/10 text-primary ring-primary',
        muted: 'bg-muted-foreground/10 text-muted-foreground ring-muted-foreground',
        secondary: 'bg-secondary/10 text-secondary ring-secondary',
        accent: 'bg-accent/10 text-accent ring-accent',
        destructive: 'bg-destructive/10 text-destructive ring-destructive',

        danger: 'bg-danger/10 text-danger ring-danger/50',
        warning: 'bg-warning/10 text-warning ring-warning/50',
        success: 'bg-success/10 text-success ring-success/50',
        info: 'bg-info/10 text-info ring-info/50',

        green: 'bg-green-100 text-green-800 ring-green-600/20',
        red: 'bg-red-100 text-red-800 ring-red-600/20',
        yellow: 'bg-yellow-100 text-yellow-800 ring-yellow-600/20',
        blue: 'bg-blue-100 text-blue-800 ring-blue-600/20',
        indigo: 'bg-indigo-100 text-indigo-800 ring-indigo-600/20',
        purple: 'bg-purple-100 text-purple-800 ring-purple-600/20',
        pink: 'bg-pink-100 text-pink-800 ring-pink-600/20',
    }

    const outlineStyle = {
        blank: 'bg-transparent text-foreground ring-transparent',
        default: 'bg-transparent text-foreground ring-foreground/20',
        primary: 'bg-transparent text-primary ring-primary/20',
        muted: 'bg-transparent text-muted-foreground ring-muted-foreground/20',
        secondary: 'bg-transparent text-secondary ring-secondary/20',
        accent: 'bg-transparent text-accent ring-accent/20',
        destructive: 'bg-transparent text-destructive ring-destructive/20',

        danger: 'bg-transparent text-danger ring-danger/50',
        warning: 'bg-transparent text-warning ring-warning/50',
        success: 'bg-transparent text-success ring-success/50',
        info: 'bg-transparent text-info ring-info/50',

        green: 'bg-transparent text-green-800 ring-green-600/20',
        red: 'bg-transparent text-red-800 ring-red-600/20',
        yellow: 'bg-transparent text-yellow-800 ring-yellow-600/20',
        blue: 'bg-transparent text-blue-800 ring-blue-600/20',
        indigo: 'bg-transparent text-indigo-800 ring-indigo-600/20',
        purple: 'bg-transparent text-purple-800 ring-purple-600/20',
        pink: 'bg-transparent text-pink-800 ring-pink-600/20',
    }

    const badgeClass = classNames(
        "relative *:after:absolute *:after:inset-0", //stretched link
        outline ? outlineStyle[clr] : colorStyle[clr],
        "inline-flex items-center",
        pill ? "rounded-full" : "rounded-md", 
        "px-2 py-1 h-min", 
        "text-xs font-medium",
        "ring-1 ring-inset",
        "whitespace-nowrap",
        className
    )

    return (
        <div className={classNames(badgeClass, className)} { ...props }>
            {   
                !!title
                ? title
                : children 
            }
        </div>
    )
}
