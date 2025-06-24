import { Heading5 } from "~/heading";
import { classNames } from "~/utils";

export type DescListHeaderProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
}

export const DescListHeader = ({ title, subtitle, className, children, ...props }: DescListHeaderProps) => {

    return (
        <div 
            className={classNames(
                        "space-y-1.5",
                        className)} {...props}>
            { !!title && <Heading5 title={ title } subtitle={ subtitle } /> }
            { children }
        </div>
    )
}
