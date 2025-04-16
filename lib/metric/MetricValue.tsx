import { classNames } from "~/utils";

export type MetricValueProps = React.ComponentProps<"div"> & {
    value: string;
}

export const MetricValue = ({ value, className, children, ...props }: MetricValueProps) => {

    return (
        <div className={classNames(
                            "text-xl font-bold", 
                            className)} { ...props }>
                { value }
                { children }
        </div>
    )
}