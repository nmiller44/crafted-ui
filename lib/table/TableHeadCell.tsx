import { classNames } from "~/utils";

/**
 * TableHeadCell component for individual header cells.
 * 
 * @see {@link TableHeadCellProps.colspan} - Spans multiple columns when set
 * @since 0.2.0
 * @param colspan - Number of columns to span (maps to colSpan attribute)
 */
export type TableHeadCellProps = React.ComponentProps<"th"> & {
    colspan?: number
}

export const TableHeadCell = ({ children, className, colspan, ...props }: TableHeadCellProps) => {
    return (
        <th 
            colSpan={colspan} 
            className={classNames(
                "p-4 pt-3 font-medium text-muted-foreground text-left border-b border-border",
                className
            )}
            {...props}
        >
            {children}
        </th>     
    )
};