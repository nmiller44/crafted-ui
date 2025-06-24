import { classNames } from "~/utils";

export type DescListLabelProps = React.ComponentProps<"dt"> & {
    children?: React.ReactNode;
}

export const DescListLabel = ({ className, children, ...props }: DescListLabelProps) => {

    return (
        <dt className={classNames(
            "text-sm font-medium text-muted-foreground",
            className
        )} {...props}>
            {children}
        </dt>
    )
}