import { classNames } from "@/utils.js";
import { MetricTitle } from "@/components/metric/MetricTitle";
import { MetricDiff } from "@/components/metric/MetricDiff";

export type MetricProps = React.ComponentProps<"div"> & {
    title?: string;
    value?: string;
    diff?: string;
    dir?: "negative" | "positive" | "neutral" | "blank";
}

export const Metric = ({ title, value, diff, dir = "blank", className, children }: MetricProps) => {

    return (
        <div className={classNames("flex flex-col h-full justify-between space-y-3", className)}>
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
                        <div className="text-xl font-bold">{ value }</div>
                    </div>
                    </>
            :   children
            }
        </div>
    )
}

