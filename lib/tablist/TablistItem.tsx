import { classNames } from "~/utils"

export type TablistItemProps = React.ComponentProps<"li">

export const TablistItem = ({ className, children, ...props }: TablistItemProps) => {
    return (
        <li className={classNames(  "relative px-2 py-1.5", 
                                    "text-sm",

                                    // Handle full height in nav
                                    "flex h-full items-center",

                                    // Don't round bottom on bordered
                                    "rounded-t-md not-group-[.bordered]:rounded-md",

                                    // Reserve border space on bordered tabs to prevent shift
                                    "group-[.bordered]:border-b-2 group-[.bordered]:border-transparent",

                                    // Text color based on parent bg
                                    "group-[.bg-primary]:text-primary-foreground",
                                    "group-[.bg-foreground]:text-background", 

                                    // Hover bg color based on parent bg
                                    "not-[.group]:has-[a]:hover:bg-muted",
                                    "group-[.bg-primary]:has-[a]:hover:bg-secondary group-[.text-primary-foreground]:has-[a]:hover:text-secondary-foreground",
                                    "group-[.bg-background]:has-[a]:hover:bg-muted",
                                    "group-[.bg-foreground]:has-[a]:hover:bg-muted-foreground",

                                    // Active bg color based on parent bg with border
                                    "not-[.group]:has-[.active]:bg-muted",
                                    "has-[.active]:group-[.bg-primary]:bg-secondary has-[.active]:group-[.text-primary-foreground]:text-secondary-foreground",
                                    "has-[.active]:group-[.bg-background]:bg-muted",
                                    "has-[.active]:group-[.bg-foreground]:bg-muted-foreground",
                                    
                                    // Bordered active highlight
                                    "group-[.bordered]:has-[.active]:bg-transparent",

                                // Bordered active border and text color primary
                                "group-[.bordered]:has-[.active]:text-primary group-[.bordered]:has-[.active]:[text-shadow:0.5px_0_0_currentColor] group-[.bordered]:has-[.active]:border-primary",                                    "*:after:absolute *:after:inset-0",
                                    className)} {...props}>
            { children }
        </li>
    )
}
