export type EmptyStateProps = {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export const EmptyState = ({ title, subtitle, children }: EmptyStateProps) => {

    return (
        <div className="max-w-xl mx-auto rounded-lg border border-slate-500/20 border-2 border-dashed py-12 text-center">
            <div className="flex flex-col items-center">
                { title 
                ?   <div>
                        <h2 className="text-lg font-semibold text-neutral-400">{ title }</h2>
                        { subtitle && <p className="text-sm text-neutral-300">{ subtitle }</p> }
                    </div>
                : children
                }
            </div> 
        </div> 
    )
};