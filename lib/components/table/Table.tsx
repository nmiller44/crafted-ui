import { classNames } from "@/utils";

export interface TableProps {
    children?: React.ReactNode;
    className?: string;
}

export const Table = ({ children, className }: TableProps) => {
    return (
        <table className={classNames("table-auto w-full text-sm", className)}>
            {children}
        </table>
    )
}