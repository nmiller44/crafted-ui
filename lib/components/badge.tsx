import { classNames } from "../utils.js";

export const Badge = ({
    title,
    children,
    className,
    color = 'default',
    outline,
    pill,
    ...props
}: {
    title?: string;
    children?: React.ReactNode;
    className?: string;
    color?: 'blank' | 'default' | 'green' | 'red' | 'yellow' | 'blue' | 'indigo' | 'purple' | 'pink';
    outline?: boolean;
    pill?: boolean;
}) => {

    const colorStyle = {
        blank: 'bg-transparent text-foreground ring-transparent',
        default: 'bg-neutral-100 text-foreground ring-neutral-600/20',
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
        default: 'bg-transparent text-foreground ring-neutral-600/20',
        green: 'bg-transparent text-green-800 ring-green-600/20',
        red: 'bg-transparent text-red-800 ring-red-600/20',
        yellow: 'bg-transparent text-yellow-800 ring-yellow-600/20',
        blue: 'bg-transparent text-blue-800 ring-blue-600/20',
        indigo: 'bg-transparent text-indigo-800 ring-indigo-600/20',
        purple: 'bg-transparent text-purple-800 ring-purple-600/20',
        pink: 'bg-transparent text-pink-800 ring-pink-600/20',
    }


    const badgeClass = classNames(
        outline ? outlineStyle[color] : colorStyle[color],
        "inline-flex items-center",
        pill ? "rounded-full" : "rounded-md", 
        "px-2 py-1", 
        "text-xs font-medium",
        "ring-1 ring-inset",
        "whitespace-nowrap",
        className
    )

    return (
        <span className={ badgeClass } { ...props }>
            {   
                !!title
                ? title
                : children 
            }
        </span>
    )
}