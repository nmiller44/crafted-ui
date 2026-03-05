import { classNames } from "~/utils";
import { renderHeadingContent } from "./utils";

/**
 * Heading3 component for subsection headings.
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

export const Heading3 = ({ title, subtitle, className, children, subtitleClass, wrapperClass, ...props }: HeadingProps) => {
    return (
        <div className={classNames("space-y-1.5", wrapperClass)} {...props}>
            {renderHeadingContent({
                title,
                children,
                tag: "h3",
                className: classNames("text-2xl font-bold tracking-tight", className),
            })}
            { !!subtitle && <p className={classNames("text-sm text-muted-foreground", subtitleClass)}>{ subtitle }</p> }
        </div>
    )
}
