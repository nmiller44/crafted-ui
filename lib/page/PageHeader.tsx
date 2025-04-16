import { Heading1 } from "~/heading/Heading1";
import { classNames } from "~/utils";

export type PageHeaderProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
}

export const PageHeader = ({ title, subtitle, className, children, ...props }: PageHeaderProps) => {

    return (
        <div className={classNames("pb-10", className)} { ...props }>
            { !!title 
                ? <Heading1 title={ title } subtitle={ subtitle } />
                : children 
            }
        </div>
    )
}
