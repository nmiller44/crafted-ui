import { classNames } from "~/utils"
import { motionClasses, useNomotion } from "~/motion"
import { useSidebarCollapsed } from "~/sidebar/SidebarContext"

/**
 * Header item within a Vertlist component for grouping and labeling sections.
 * 
 * Supports stretched links: placing a single `<a>` tag as a child makes the entire item 
 * clickable. Commonly used for navigation lists.
 * 
 * @component
 * @category Components
 * @since 0.1.0
 * @related Vertlist - Parent list that contains the header
 * @see {@link https://crafted-ui.com/docs/components/vertlist}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-components-vertlist}
 * @param hideWhenCollapsed - Collapses and fades noninteractive headings in a Sidebar rail; do not use on linked headers
 */
export type VertlistHeaderProps = React.ComponentProps<"li"> & {
    hideWhenCollapsed?: boolean
}

export const VertlistHeader = ({ hideWhenCollapsed = false, className, children, ...props }: VertlistHeaderProps) => {
    const collapsed = useSidebarCollapsed()
    const nomotion = useNomotion()
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
                                    hideWhenCollapsed && motionClasses(nomotion, "max-h-12 overflow-hidden whitespace-nowrap transition-[max-height,padding,opacity]"),
                                    hideWhenCollapsed && collapsed && "max-h-0 py-0 opacity-0",
                                    className)} {...props}>
            { children }
        </li>
    )
}