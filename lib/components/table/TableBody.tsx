import { classNames } from "../../utils";

export interface TableBodyProps {
    children?: React.ReactNode;
    className?: string;
}

export const TableBody = ({ children, className }: TableBodyProps) => {
    return (
        <tbody className={className}>
            {children}
        </tbody>        
    )   
}