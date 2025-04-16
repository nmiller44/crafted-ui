import { classNames } from "~/utils";
import { MetricTitle } from "./MetricTitle";
import { MetricDiff } from "./MetricDiff";
import { MetricValue } from "./MetricValue";

export type MetricProps = React.ComponentProps<"div"> & {
    title?: string;
    value?: string;
    diff?: string;
    dir?: "negative" | "positive" | "neutral" | "blank";
}

export const Metric = ({ title, value, diff, dir = "blank", className, children, ...props }: MetricProps) => {

    return (
        <div className={classNames("flex flex-col h-full justify-between space-y-3", className)} { ...props }>
        { !!value
            ?   
                !!title &&
                    <>
                    <div className="flex justify-between">
                        <MetricTitle title={ title } />
                        { !!diff && 
                        <div>
                            <MetricDiff diff={ diff } dir={ dir } />
                        </div>
                        }
                    </div>     
                    <div>
                        <MetricValue value={ value } />
                    </div>
                    </>
            :   children
            }
        </div>
    )
}
