import { classNames } from "~/utils"

export type VertlistHeaderProps = React.ComponentProps<"li">

export const VertlistHeader = ({ className, children, ...props }: VertlistHeaderProps) => {
    return (
        <li className={classNames(  "relative px-2 py-1.5 rounded-md", 
                                    "text-sm font-semibold",

                                    "group-[.bg-primary]:has-[a]:hover:bg-secondary group-[.text-primary-foreground]:has-[a]:hover:text-secondary-foreground",
                                    "group-[.bg-background]:has-[a]:hover:bg-muted",
                                    "group-[.bg-foreground]:has-[a]:hover:bg-muted-foreground",

                                    "has-[.active]:group-[.bg-primary]:bg-secondary has-[.active]:group-[.text-primary-foreground]:text-secondary-foreground",
                                    "has-[.active]:group-[.bg-background]:bg-muted",
                                    "has-[.active]:group-[.bg-foreground]:bg-muted-foreground",

                                    "*:after:absolute *:after:inset-0",
                                    className)} {...props}>
            { children }
        </li>
    )
}