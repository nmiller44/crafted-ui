

export type HeadingProps = {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export const Heading1 = ({ title, subtitle, children }: HeadingProps) => {
    return (
        <div className="space-y-2">
            { title
                ? <h1 className="text-4xl font-bold tracking-tight">{ title }</h1>
                : children
            }
            { subtitle && <p className="text-sm text-neutral-500">{ subtitle }</p> }
        </div>
    )
}

export const Heading2 = ({ title, subtitle, children }: HeadingProps) => {
    return (
        <div className="space-y-2">
            { title
                ? <h2 className="text-3xl font-bold tracking-tight">{ title }</h2>
                : children
            }
            { subtitle && <p className="text-sm text-neutral-500">{ subtitle }</p> }
        </div>
    )
}

export const Heading3 = ({ title, subtitle, children }: HeadingProps) => {
    return (
        <div className="space-y-2">
            { title
                ? <h3 className="text-2xl font-bold tracking-tight">{ title }</h3>
                : children
            }
            { subtitle && <p className="text-sm text-neutral-500">{ subtitle }</p> }
        </div>
    )
}

export const Heading4 = ({ title, subtitle, children }: HeadingProps) => {
    return (
        <div className="space-y-2">
            { title
                ? <h4 className="text-xl font-bold tracking-tight">{ title }</h4>
                : children
            }
            { subtitle && <p className="text-sm text-neutral-500">{ subtitle }</p> }
        </div>
    )
}
