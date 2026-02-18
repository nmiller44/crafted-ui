import { classNames } from "~/utils";

/**
 * Heading1 component for page-level titles.
 * 
 * Use the `title` prop for simple text headings or pass children for custom content.
 * Optional subtitle provides context below the main heading.
 * 
 * @see {@link HeadingProps.title} - Simple text heading (alternative to children)
 * @see {@link HeadingProps.subtitle} - Optional descriptive text
 * @see {@link HeadingProps.subtitleClass} - Custom classes for subtitle styling
 * @see {@link HeadingProps.wrapperClass} - Custom classes for wrapper div
 * @since 0.2.0
 * @param title - Main heading text (alternative to children)
 * @param subtitle - Optional subtitle text displayed below heading
 * @param subtitleClass - Additional CSS classes for subtitle
 * @param wrapperClass - Additional CSS classes for wrapper div
 */
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
