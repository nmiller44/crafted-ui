export type TableBodyProps = React.ComponentProps<"tbody">

export const TableBody = ({ children, className, ...props }: TableBodyProps) => {
    return (
        <tbody className={className} {...props}>
            {children}
        </tbody>        
    )   
}