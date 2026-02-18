import { classNames } from "~/utils";

/**
 * Table component for displaying structured data in rows and columns.
 * 
 * Use with TableHead, TableHeadCell, TableBody, TableRow, and TableCell subcomponents.
 * Applies table-auto layout and full width by default.
 * 
 * @since 0.2.0
 */
export type TableProps = React.ComponentProps<"table">

export const Table = ({ children, className, ...props }: TableProps) => {
    return (
        <table className={classNames("table-auto w-full text-sm", className)} {...props}>
            {children}
        </table>
    )
}