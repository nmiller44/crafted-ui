import { classNames } from "../../utils";

export interface TableRowProps {
    children?: React.ReactNode;
    className?: string;
}

export const TableRow = ({ children, className }: TableRowProps) => {
    return (
        <tr className={className}>
            {children}
        </tr>        
    )
}