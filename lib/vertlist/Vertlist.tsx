import { classNames } from "~/utils"

/**
 * Vertical list for stacking items with consistent spacing, commonly used for sidebar navigation.
 *
 * @component
 * @category Components
 * @since 0.1.0
 * @related VertlistItem - Individual item within the list
 * @related VertlistHeader - Labels a group of items
 * @see {@link https://crafted-ui.com/docs/components/vertlist}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-components-vertlist}
 */
export type VertlistProps = React.ComponentProps<"ul">

export const Vertlist = ({ className, children, ...props }: VertlistProps) => {

    return (
        <ul className={classNames(
                        "flex flex-col space-y-2", 
                        className)} 
            {...props}>
            { children }
        </ul>
    )
}