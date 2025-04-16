import { Heading5 } from "~/heading/Heading5";
import { classNames } from "~/utils";

export type CardHeaderProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
}

export const CardHeader = ({ title, subtitle, className, children, ...props }: CardHeaderProps) => {

    return (
        <div className={classNames(
                            "px-5 py-6 border-b border-border",
                            className)} { ...props }>
            { !!title 
                ? <Heading5 title={ title } subtitle={ subtitle } />
                : children 
            }
        </div>
    )
}