import { classNames } from "~/utils"

/**
 * Individual item within a Vertlist component.
 * 
 * Supports stretched links: placing a single `<a>` tag as a child makes the entire item 
 * clickable. Commonly used for navigation lists.
 * 
 * @component
 * @category Components
 * @since 0.1.0
 */
export type VertlistItemProps = React.ComponentProps<"li">

export const VertlistItem = ({ className, children, ...props }: VertlistItemProps) => {
    return (
        <li className={classNames(  "relative px-2 py-1.5 rounded-md", 
                                    "text-sm",

                                    "has-[a]:hover:bg-secondary has-[a]:hover:text-secondary-foreground",
                                    "group-[.bg-primary]:has-[a]:hover:bg-secondary group-[.text-primary-foreground]:has-[a]:hover:text-secondary-foreground",
                                    "group-[.bg-background]:has-[a]:hover:bg-muted group-[.bg-background]:has-[a]:hover:text-foreground",

                                    "has-[.active]:bg-secondary has-[.active]:text-secondary-foreground",
                                    "has-[.active]:group-[.bg-primary]:bg-secondary has-[.active]:group-[.text-primary-foreground]:text-secondary-foreground",
                                    "has-[.active]:group-[.bg-background]:bg-muted has-[.active]:group-[.bg-background]:text-foreground",

                                    "*:after:absolute *:after:inset-0",
                                    className)} {...props}>
            { children }
        </li>
    )
}
