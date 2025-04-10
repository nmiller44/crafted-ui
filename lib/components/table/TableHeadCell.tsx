import { classNames } from "../../utils";

export interface TableHeadCellProps {
    children?: React.ReactNode;
    className?: string;
    colspan?: number;
}

export const TableHeadCell = ({ children, className, colspan }: TableHeadCellProps) => {
    return (
        <th 
            colSpan={colspan} 
            className={classNames(
                "p-4 pt-3 font-medium text-muted-foreground text-left border-b border-border",
                className
            )}
        >
            {children}
        </th>     
    )
};