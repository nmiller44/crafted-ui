import { classNames } from "../utils.js";

export type BreadcrumbProps = {
    className?: string;
    children?: React.ReactNode;
}

export const Breadcrumb = ({ className, children }: BreadcrumbProps) => {

    return (
        <nav className={classNames("", className)}>
            { children }
        </nav>
    )
}

export type BreadcrumbListProps = {
    className?: string;
    children?: React.ReactNode;
}

export const BreadcrumbList = ({ className, children }: BreadcrumbListProps) => {
    return (
        <ul className={classNames("flex space-x-2 items-center", className)}>
            {children}
        </ul>
    )
}

export type BreadcrumbListItemProps = {
    className?: string;
    children?: React.ReactNode;
}

export const BreadcrumbListItem = ({ className, children }: BreadcrumbListItemProps) => {
    return (
        <li className={classNames(
                        "text-muted-foreground", 
                        "has-[.active]:text-primary has-[.active]:font-bold",
                        className)}>
            {children}
        </li>
    )
}
