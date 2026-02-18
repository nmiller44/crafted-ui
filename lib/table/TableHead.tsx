import { classNames } from "~/utils";

/**
 * TableHead component for table headers.
 * 
 * Automatically wraps children in a `<tr>` element. Applies muted background
 * and reduced text size for visual hierarchy.
 * 
 * @since 0.2.0
 */
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