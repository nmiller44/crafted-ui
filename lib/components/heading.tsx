import { classNames } from "../utils.js"; 


export type HeadingProps = {
    title?: string;
    subtitle?: string;
    className?: string;
    children?: React.ReactNode;
}

export const Heading1 = ({ title, subtitle, className, children }: HeadingProps) => {
    return (
        <div className="space-y-2">
            { !!title
                ? <h1 className={classNames("text-4xl font-bold tracking-tight", className)}>{ title }</h1>
                : children
            }
            { !!subtitle && <p className="text-sm text-muted-foreground">{ subtitle }</p> }
        </div>
    )
}

export const Heading2 = ({ title, subtitle, className, children }: HeadingProps) => {
    return (
        <div className="space-y-2">
            { !!title
                ? <h2 className={classNames("text-3xl font-bold tracking-tight", className)}>{ title }</h2>
                : children
            }
            { !!subtitle && <p className="text-sm text-muted-foreground">{ subtitle }</p> }
        </div>
    )
}

export const Heading3 = ({ title, subtitle, className, children }: HeadingProps) => {
    return (
        <div className="space-y-2">
            { !!title
                ? <h3 className={classNames("text-2xl font-bold tracking-tight", className)}>{ title }</h3>
                : children
            }
            { !!subtitle && <p className="text-sm text-muted-foreground">{ subtitle }</p> }
        </div>
    )
}

export const Heading4 = ({ title, subtitle, className, children }: HeadingProps) => {
    return (
        <div className="space-y-2">
            { !!title
                ? <h4 className={classNames("text-xl font-bold tracking-tight", className)}>{ title }</h4>
                : children
            }
            { !!subtitle && <p className="text-sm text-muted-foreground">{ subtitle }</p> }
        </div>
    )
}

export const Heading5 = ({ title, subtitle, className, children }: HeadingProps) => {
    return (
        <div className="space-y-2">
            { !!title
                ? <h5 className={classNames("text-lg font-bold tracking-tight", className)}>{ title }</h5>
                : children
            }
            { !!subtitle && <p className="text-sm text-muted-foreground">{ subtitle }</p> }
        </div>
    )
}
