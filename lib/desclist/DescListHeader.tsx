import { Heading5 } from "~/heading";
import { classNames } from "~/utils";

/**
 * Header component for DescList with title and subtitle.
 * Automatically used by DescList when title prop is provided.
 * 
 * @component
 * @category Components
 * @since 0.2.0
 * @related DescList - Parent component that uses this header
 */
export type DescListHeaderProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
}

export const DescListHeader = ({ title, subtitle, className, children, ...props }: DescListHeaderProps) => {

    return (
        <div 
            className={classNames(
                        "border-b pb-5",
                        className)} {...props}>
            { !!title && <Heading5 title={ title } subtitle={ subtitle } /> }
            { children }
        </div>
    )
}
