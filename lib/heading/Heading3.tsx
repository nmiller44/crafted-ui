import { classNames } from "~/utils";

export type HeadingProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;  
    subtitleClass?: string; 
    wrapperClass?: string; 
}

export const Heading3 = ({ title, subtitle, className, children, subtitleClass, wrapperClass, ...props }: HeadingProps) => {
    return (
        <div className={classNames("space-y-1", wrapperClass)} {...props}>
            { !!title
                ? <h3 className={classNames("text-2xl font-bold tracking-tight", className)}>{ title }</h3>
                : children
            }
            { !!subtitle && <p className={classNames("text-sm text-muted-foreground", subtitleClass)}>{ subtitle }</p> }
        </div>
    )
}
