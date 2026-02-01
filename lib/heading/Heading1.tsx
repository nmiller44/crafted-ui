import { classNames } from "~/utils";

export type HeadingProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;  
    subtitleClass?: string; 
    wrapperClass?: string; 
}

export const Heading1 = ({ title, subtitle, className, children, subtitleClass, wrapperClass, ...props }: HeadingProps) => {
    return (
        <div className={classNames("space-y-1.5", wrapperClass)} {...props}>
            { !!title
                ? <h1 className={classNames("text-4xl font-bold tracking-tight", className)}>{ title }</h1>
                : children
            }
            { !!subtitle && <p className={classNames("text-lg text-muted-foreground", subtitleClass)}>{ subtitle }</p> }
        </div>
    )
}
