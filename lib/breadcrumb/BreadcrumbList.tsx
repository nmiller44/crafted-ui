import { classNames } from "~/utils";

export type BreadcrumbListProps = React.ComponentProps<"ul">

export const BreadcrumbList = ({ className, children, ...props }: BreadcrumbListProps) => {

    return (
        <ul className={classNames("flex space-x-2 items-center", className)} { ...props }>
            { children }
        </ul>
    )
}
