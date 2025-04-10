import { classNames } from "../../utils";

export interface TableCellProps {
    children?: React.ReactNode;
    className?: string;
    colspan?: number;
}

export const TableCell = ({ children, className, colspan }: TableCellProps) => {
    return (
        <td 
            colSpan={colspan}
            className={classNames(
                "px-4 py-5 border-b border-border",
                className
            )}
        >
            {children}
        </td>     
    )
};