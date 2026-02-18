import { classNames } from "~/utils";
import { DescListHeader } from "./DescListHeader";

/**
 * Displays key-value pairs in structured description list format.
 * Uses semantic HTML with responsive 12-column grid that adapts from single column on mobile to flexible multi-column layouts on desktop.
 * 
 * @component
 * @category Components
 * @accessibility Uses semantic HTML (<dl>, <dt>, <dd>) for proper screen reader support
 * @since 0.2.0
 * @related DescListItem - Individual key-value pairs within the list
 * @related DescListHeader - Header component with title and subtitle
 * @see {@link https://crafted-ui.com/docs/components/desclist}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-components-desclist}
 * 
 * @param wrapperClassName - Classes for the outer wrapper div (not the <dl> element)
 */
export type DescListProps = React.ComponentProps<"dl"> & {
    title?: string;
    subtitle?: string;
    wrapperClassName?: string;
}

export const DescList = ({ title, subtitle, wrapperClassName, className, children, ...props }: DescListProps) => {

    return (
        <div className={classNames("space-y-8", wrapperClassName)}>
            { !!title && <DescListHeader title={ title } subtitle={ subtitle } /> }
            <dl className={classNames("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-8", className)}
                 {...props}>
                {children}
            </dl>
        </div>
    )
}
