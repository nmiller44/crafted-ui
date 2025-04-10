import { Heading2 } from "@components/heading.js";
import { classNames } from "@/utils.js";

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
