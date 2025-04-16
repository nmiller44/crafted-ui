import { classNames } from "~/utils";

export type BreadcrumbListItemProps = React.ComponentProps<"li">

export const BreadcrumbListItem = ({ className, children, ...props }: BreadcrumbListItemProps) => {

    return (
        <li className={classNames(
                        "text-muted-foreground", 
                        "has-[.active]:text-primary has-[.active]:font-bold",
                        className)} { ...props }>
            { children }
        </li>
    )
}
