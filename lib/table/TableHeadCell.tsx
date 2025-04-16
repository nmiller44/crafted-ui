import { classNames } from "~/utils";

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