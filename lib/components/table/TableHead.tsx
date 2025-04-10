import { classNames } from "../../utils";

export interface TableHeadProps {
    children?: React.ReactNode;
    className?: string;
}

export const TableHead = ({ children, className }: TableHeadProps) => {
    return (
        <thead className={classNames(
            "bg-muted/50 text-xs", 
            className
        )}>
            <tr>
                {children}
            </tr>
        </thead>        
    )
};