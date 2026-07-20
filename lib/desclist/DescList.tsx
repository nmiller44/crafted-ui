import React from "react";
import { classNames } from "~/utils";
import { DescListHeader } from "./DescListHeader";

const DescListContext = React.createContext<{ inline?: boolean; emptyValue?: React.ReactNode }>({});

export const useDescListContext = () => React.useContext(DescListContext);

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
 * @param inline - When true, displays all items with label and value on the same line
 * @param emptyValue - Default display value for empty or missing item values (defaults to "-")
 * @param wrapperClassName - Classes for the outer wrapper div (not the <dl> element)
 */
export type DescListProps = React.ComponentProps<"dl"> & {
    title?: string;
    subtitle?: string;
    inline?: boolean;
    emptyValue?: React.ReactNode;
    wrapperClassName?: string;
}

export const DescList = ({ title, subtitle, inline = false, emptyValue, wrapperClassName, className, children, ...props }: DescListProps) => {

    return (
        <DescListContext.Provider value={{ inline, emptyValue }}>
            <div className={classNames("space-y-6", wrapperClassName)}>
                { !!title && <DescListHeader title={ title } subtitle={ subtitle } /> }
                <dl className={classNames("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-6 text-sm leading-5 text-foreground", className)}
                     {...props}>
                    {children}
                </dl>
            </div>
        </DescListContext.Provider>
    )
}
