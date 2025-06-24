import { classNames } from "~/utils";
import { DescListHeader } from "./DescListHeader";

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
