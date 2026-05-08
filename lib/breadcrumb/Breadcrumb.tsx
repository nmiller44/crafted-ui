import { classNames } from "~/utils";

/**
 * Navigation wrapper for breadcrumb trails showing page hierarchy.
 * 
 * @component
 * @category Layout
 * @accessibility Uses semantic nav element with aria-label="Breadcrumb"
 * @since 0.2.6
 * @related BreadcrumbList - Direct child component containing breadcrumb items
 * @see {@link https://crafted-ui.com/docs/components/breadcrumb}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-layout-breadcrumb}
 */
export type BreadcrumbProps = React.ComponentProps<"nav">

export const Breadcrumb = ({ className, children, ...props }: BreadcrumbProps) => {

    return (
        <nav aria-label="Breadcrumb" className={classNames(className)} { ...props }>
            { children }
        </nav>
    )
}
