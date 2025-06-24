import { classNames } from "~/utils";

export type DescListLabelProps = React.ComponentProps<"dt"> & {
    children?: React.ReactNode;
}

export const DescListLabel = ({ className, children, ...props }: DescListLabelProps) => {

    return (
        <dt className={classNames(
            "text-sm font-semibold text-foreground",
            className
        )} {...props}>
            {children}
        </dt>
    )
}