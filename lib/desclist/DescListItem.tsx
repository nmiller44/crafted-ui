import { classNames } from "~/utils";
import { DescListLabel } from "./DescListLabel";

/**
 * Individual key-value pair for DescList.
 * By default spans full width. Use className with Tailwind grid utilities (md:col-span-6, md:col-span-4) for multi-column layouts.
 * 
 * @component
 * @category Components
 * @since 0.2.0
 * @related DescList - Parent wrapper component
 * @related DescListLabel - Label component for the key
 */
export type DescListItemProps = React.ComponentProps<"div"> & {
    label?: string;
    value?: React.ReactNode;
}

export const DescListItem = ({ label, value, className, children, ...props }: DescListItemProps) => {

    return (
        <div className={classNames(
            "space-y-2",
            "col-span-full",
            className
        )} {...props}>
            <DescListLabel>{ label }</DescListLabel>
            <dd className="text-sm text-foreground leading-6">
                {value || children}
            </dd>
        </div>
    )
}
