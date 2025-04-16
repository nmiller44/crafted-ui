export type TableRowProps = React.ComponentProps<"tr">

export const TableRow = ({ children, className, ...props }: TableRowProps) => {
    return (
        <tr className={className} {...props}>
            {children}
        </tr>        
    )
}