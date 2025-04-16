import { classNames } from "~/utils"

export type TablistItemProps = React.ComponentProps<"li">

export const TablistItem = ({ className, children, ...props }: TablistItemProps) => {
    return (
        <li className={classNames(  "relative px-2 py-1.5", 
                                    "text-sm",

                                    // Don't round bottom on bordered
                                    "rounded-t-md not-group-[.border-b]:rounded-md",

                                    // Text color based on parent bg
                                    "group-[.bg-primary]:text-primary-foreground",
                                    "group-[.bg-foreground]:text-background", 

                                    // Hover bg color based on parent bg
                                    "group-[.bg-primary]:has-[a]:hover:bg-secondary group-[.text-primary-foreground]:has-[a]:hover:text-secondary-foreground",
                                    "group-[.bg-background]:has-[a]:hover:bg-muted",
                                    "group-[.bg-foreground]:has-[a]:hover:bg-muted-foreground",

                                    // Active bg color based on parent bg with border
                                    "has-[.active]:group-[.bg-primary]:bg-secondary has-[.active]:group-[.text-primary-foreground]:text-secondary-foreground",
                                    "has-[.active]:group-[.bg-background]:bg-muted",
                                    "has-[.active]:group-[.bg-foreground]:bg-muted-foreground",
                                    
                                    // Bordered active highlight
                                    "group-[.border-b]:has-[.active]:bg-transparent",

                                    // Bordered active border and text color primary
                                    "group-[.border-b]:has-[.active]:text-primary group-[.border-b]:has-[.active]:font-bold group-[.border-b]:has-[.active]:border-b-2 group-[.border-b]:has-[.active]:border-primary",

                                    "*:after:absolute *:after:inset-0",
                                    className)} {...props}>
            { children }
        </li>
    )
}
