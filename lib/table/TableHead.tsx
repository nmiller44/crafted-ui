import { classNames } from "~/utils";

export type TableHeadProps = React.ComponentProps<"thead">

export const TableHead = ({ children, className, ...props }: TableHeadProps) => {
    return (
        <thead className={classNames(
            "bg-muted/50 text-xs", 
            className
        )} {...props}>
            <tr>
                {children}
            </tr>
        </thead>        
    )
};