import { classNames } from "~/utils";

/**
 * Label component for DescList keys.
 * Automatically used by DescListItem. Renders as semantic <dt> element.
 * 
 * @component
 * @category Components
 * @since 0.2.0
 * @related DescListItem - Parent component that uses this label
 * 
 * @param inline - When true, uses muted text color for better visual hierarchy in inline layouts
 * @param nocolon - When true, prevents automatic colon after inline labels
 */
export type DescListLabelProps = React.ComponentProps<"dt"> & {
    children?: React.ReactNode;
    inline?: boolean;
    nocolon?: boolean;
}

export const DescListLabel = ({ inline = false, nocolon = false, className, children, ...props }: DescListLabelProps) => {

    return (
        <dt className={classNames(
            "text-sm text-muted-foreground",
            inline ? (nocolon ? "" : "after:content-[':']") : "font-semibold",
            className
        )} {...props}>
            {children}
        </dt>
    )
}