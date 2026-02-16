import { classNames } from "~/utils";

/**
 * Label component for DescList keys.
 * Automatically used by DescListItem. Renders as semantic <dt> element.
 * 
 * @component
 * @category Components
 * @since 0.2.0
 * @related DescListItem - Parent component that uses this label
 */
export type DescListLabelProps = React.ComponentProps<"dt"> & {
    children?: React.ReactNode;
}

export const DescListLabel = ({ className, children, ...props }: DescListLabelProps) => {

    return (
        <dt className={classNames(
            "text-sm font-semibold text-foreground",
            className
        )} {...props}>
            {children}
        </dt>
    )
}