/**
 * TableRow component for individual table rows.
 * 
 * Contains TableCell components. Add hover states with className for interactivity.
 * 
 * @since 0.2.0
 */
export type TableRowProps = React.ComponentProps<"tr">

export const TableRow = ({ children, className, ...props }: TableRowProps) => {
    return (
        <tr className={className} {...props}>
            {children}
        </tr>        
    )
}