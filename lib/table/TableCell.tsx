import { classNames } from "~/utils";

/**
 * TableCell component for individual data cells.
 * 
 * @see {@link TableCellProps.colspan} - Spans multiple columns when set
 * @since 0.2.0
 * @param colspan - Number of columns to span (maps to colSpan attribute)
 */
export type TableCellProps = React.ComponentProps<"td"> & {
    colspan?: number
}

export const TableCell = ({ children, className, colspan, ...props }: TableCellProps) => {
    return (
        <td 
            colSpan={colspan}
            className={classNames(
                "px-4 py-5 border-b border-border",
                className
            )}
            {...props}
        >
            {children}
        </td>     
    )
};