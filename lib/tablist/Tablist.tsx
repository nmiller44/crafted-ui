import { classNames } from "~/utils"

/**
 * Horizontal list of tabs for switching between views or sections.
 *
 * Renders a plain list, so mark the active TablistItem yourself. Sized to fill its container's
 * height, which keeps it aligned when used inside a navbar.
 *
 * @component
 * @category Components
 * @since 0.1.0
 * @related TablistItem - Individual tab within the list
 * @see {@link https://crafted-ui.com/docs/components/tablist}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-components-tablist}
 *
 * @param bordered - Adds a bottom border spanning the full tab strip
 */
export type TablistProps = React.ComponentProps<"ul"> & {
    bordered?: boolean
}

export const Tablist = ({ bordered = false, className, children, ...props }: TablistProps) => {

    return (
        <ul className={classNames(  
                        bordered ? "group bordered border-b border-border" : "",

                        // Handle full height in nav
                        "h-full items-center",
                        
                        "flex space-x-8",
                        className
                    )} {...props}>
                        { children }
        </ul>
    )
}
