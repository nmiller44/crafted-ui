import { classNames } from "~/utils";

export type BadgeProps = React.ComponentProps<"div"> & {
    title?: string;
}

export const Badge = ({ title, className, children, ...props }: BadgeProps) => {

    const badgeClass = classNames(
        "relative *:after:absolute *:after:inset-0", //stretched link
        // outline ? outlineStyle[color] : colorStyle[color],
        "bg-primary/30 text-foreground ring-primary",
        "inline-flex items-center",
        // pill ? "rounded-full" : "rounded-md", 
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
