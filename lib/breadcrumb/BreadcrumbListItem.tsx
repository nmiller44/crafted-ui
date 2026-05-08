import { classNames } from "~/utils";

/**
 * Individual breadcrumb item containing a link or active page indicator.
 * 
 * @component
 * @category Layout
 * @accessibility Active page should use span with className="active" and aria-current="page"
 * @since 0.2.6
 * @see {@link https://crafted-ui.com/docs/components/breadcrumb}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-layout-breadcrumb}
 */
export type BreadcrumbListItemProps = React.ComponentProps<"li">

export const BreadcrumbListItem = ({ className, children, ...props }: BreadcrumbListItemProps) => {

    return (
        <li className={classNames(
                        "text-muted-foreground", 
                        "has-[.active]:text-primary has-[.active]:font-bold",
                        "[&>a]:hover:text-foreground",
                        className)} { ...props }>
            { children }
        </li>
    )
}
