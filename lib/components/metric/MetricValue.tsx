import { classNames } from "@/utils";

export type MetricValueProps = React.ComponentProps<"div"> & {
    value: string;
    dir?: "negative" | "positive" | "neutral" | "blank";
}

export const MetricValue = ({ value, dir, className, children }: MetricValueProps) => {

    return (
        <div className={classNames(
                            "text-xl font-bold", 
                            className)}>
                { value }
                { children }
        </div>
    )
}