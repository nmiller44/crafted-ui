import { classNames } from "~/utils";
import { DescListLabel } from "./DescListLabel";

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
