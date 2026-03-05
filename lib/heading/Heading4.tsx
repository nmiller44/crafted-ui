import { classNames } from "~/utils";
import { renderHeadingContent } from "./utils";

/**
 * Heading4 component for minor headings.
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

export const Heading4 = ({ title, subtitle, className, children, subtitleClass, wrapperClass, ...props }: HeadingProps) => {
    return (
        <div className={classNames("space-y-1.5", wrapperClass)} {...props}>
            {renderHeadingContent({
                title,
                children,
                tag: "h4",
                className: classNames("text-xl font-bold tracking-tight", className),
            })}
            { !!subtitle && <p className={classNames("text-sm text-muted-foreground", subtitleClass)}>{ subtitle }</p> }
        </div>
    )
}
