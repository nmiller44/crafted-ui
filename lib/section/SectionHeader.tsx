import { Heading2 } from "~/heading/Heading2";
import { classNames } from "~/utils";

export type SectionHeaderProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
}

export const SectionHeader = ({ title, subtitle, className, children, ...props }: SectionHeaderProps) => {

    return (
        <div className={classNames("pb-3 border-b border-border", className)} { ...props }>
            { !!title 
                ? <Heading2 title={ title } subtitle={ subtitle } />
                : children 
            }
        </div>
    )
}
