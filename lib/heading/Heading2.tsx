import { classNames } from "~/utils";

/**
 * Heading2 component for major section headings.
 * 
 * Use the `title` prop for simple text headings or pass children for custom content.
 * Optional subtitle provides context below the main heading.
 * 
 * @since 0.2.0
 */
export type HeadingProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;  
    subtitleClass?: string; 
    wrapperClass?: string; 
}

export const Heading2 = ({ title, subtitle, className, children, subtitleClass, wrapperClass, ...props }: HeadingProps) => {
    return (
        <div className={classNames("space-y-1.5", wrapperClass)} {...props}>
            { !!title
                ? <h2 className={classNames("text-3xl font-bold tracking-tight", className)}>{ title }</h2>
                : children
            }
            { !!subtitle && <p className={classNames("text-md text-muted-foreground", subtitleClass)}>{ subtitle }</p> }
        </div>
    )
}
