import { Heading3 } from "~/heading/Heading3";
import { classNames } from "~/utils";

/**
 * Placeholder for empty states with optional icon and message.
 * Displays a centered container with a dashed border to indicate empty content.
 * 
 * @component
 * @category Components
 * @accessibility Uses semantic heading structure and meets WCAG AA contrast
 * @since 0.2.0
 * @see {@link https://crafted-ui.com/docs/components/empty}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-components-empty}
 */
export type EmptyProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;   
}

export const Empty = ({ title, subtitle, className, children, ...props }: EmptyProps) => {

    return (
        <div className={classNames(
                            "max-w-xl mx-auto", 
                            "rounded-lg border border-muted-foreground border-2 border-dashed", 
                            "px-10 py-12 text-center",
                            "space-y-6",
                            className
                )} { ...props }>
            { !!title && <Heading3 title={ title } subtitle={ subtitle } className="text-muted-foreground" subtitleClass="text-muted-foreground" /> }
            { children }
        </div> 
    )
};