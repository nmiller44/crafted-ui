import { classNames } from "~/utils";

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