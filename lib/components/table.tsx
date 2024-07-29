
export type TableProps = {
    children?: React.ReactNode;
}

export type TableHeadProps = {
    children?: React.ReactNode;
}

export type TableHeadCellProps = {
    children?: React.ReactNode;
}

export type TableCellProps = {
    children?: React.ReactNode;
}

export const Table = (props: TableProps) => {
    return (
        <div className="p-4">
            <div className="rounded-lg bg-white text-sm leading-5 text-slate-700 shadow-xl shadow-black/5 ring-1 ring-slate-700/10">
                <table className="table-auto w-full text-sm">
                    { props.children }
                </table>
            </div>
        </div>
    )
}

export const TableHead = (props: TableHeadProps) => {
    return (
        <thead className="bg-slate-50 text-xs">
            <tr>
                { props.children }
            </tr>
        </thead>        
    )
};

export const TableHeadCell = (props: TableHeadCellProps) => {

    // const colspan = props.colspan || undefined;

    return (
        <th //colSpan={colspan} 
            className="p-4 pt-3 font-medium text-slate-400 text-left border-b border-slate-100">
            { props.children }
        </th>     
    )
};

export const TableCell = (props: TableCellProps) => {
    // const colspan = props.colspan || 1;

    return (
        <td //colSpan={colspan}
            className="py-5 pl-4 border-b border-slate-100">
            { props.children }
        </td>     
    )
};