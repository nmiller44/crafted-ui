import { classNames } from "~/utils";

/**
 * List container for breadcrumb items with automatic spacing.
 * 
 * @component
 * @category Layout
 * @since 0.2.6
 * @related BreadcrumbListItem - Contains individual breadcrumb items
 * @related BreadcrumbSeparator - Visual separators between items
 * @see {@link https://crafted-ui.com/docs/layout/breadcrumb}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-layout-breadcrumb}
 */
export type BreadcrumbListProps = React.ComponentProps<"ul">

export const BreadcrumbList = ({ className, children, ...props }: BreadcrumbListProps) => {

    return (
        <ul className={classNames("flex gap-2 items-center", className)} { ...props }>
            { children }
        </ul>
    )
}
