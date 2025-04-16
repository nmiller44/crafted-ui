import { classNames } from "~/utils";

export type TableProps = React.ComponentProps<"table">

export const Table = ({ children, className, ...props }: TableProps) => {
    return (
        <table className={classNames("table-auto w-full text-sm", className)} {...props}>
            {children}
        </table>
    )
}