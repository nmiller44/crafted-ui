import { classNames } from "~/utils";

export type BreadcrumbProps = React.ComponentProps<"nav">

export const Breadcrumb = ({ className, children, ...props }: BreadcrumbProps) => {

    return (
        <nav className={classNames(className)} { ...props }>
            { children }
        </nav>
    )
}
