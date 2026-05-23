import { classNames } from "~/utils";
import { DescListLabel } from "./DescListLabel";
import { useDescListContext } from "./DescList";

/**
 * Individual key-value pair for DescList.
 * By default spans full width. Use className with Tailwind grid utilities (md:col-span-6, md:col-span-4) for multi-column layouts.
 * 
 * @component
 * @category Components
 * @since 0.2.0
 * @related DescList - Parent wrapper component
 * @related DescListLabel - Label component for the key
 * 
 * @param inline - When true, displays label and value on the same line. Overrides parent DescList inline setting
 * @param nocolon - When true, prevents automatic colon after inline labels
 */
export type DescListItemProps = React.ComponentProps<"div"> & {
    label?: string;
    value?: React.ReactNode;
    inline?: boolean;
    nocolon?: boolean;
}

export const DescListItem = ({ label, value, inline, nocolon = false, className, children, ...props }: DescListItemProps) => {
    const context = useDescListContext();
    const isInline = inline !== undefined ? inline : context.inline;

    return (
        <div className={classNames(
            isInline 
                ? "flex items-center gap-x-2"
                : "space-y-2",
            "col-span-full",
            className
        )} {...props}>
            <DescListLabel inline={isInline} nocolon={nocolon} className={isInline ? "flex-shrink-0" : ""}>{ label }</DescListLabel>
            <dd className={classNames(
                "text-sm text-foreground leading-6",
                isInline ? "flex-1" : ""
            )}>
                {value || children}
            </dd>
        </div>
    )
}
