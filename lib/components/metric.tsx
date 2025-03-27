import * as exp from "constants";
import { classNames } from "../utils.js";
import { Badge } from "./badge";

const dirToColor: { blank: "blank"; positive: "green"; negative: "red"; neutral: "yellow"; } = {
    blank: "blank",
    positive: "green",
    negative: "red",
    neutral: "yellow"
}

export type MetricProps = {
    title?: string;
    value?: string;
    diff?: string;
    dir?: "negative" | "positive" | "neutral" | "blank";
    className?: string;
    children?: React.ReactNode;
}

export const Metric = ({ title, value, diff, dir = "blank", className, children }: MetricProps) => {

    return (
        !!value
        ?   <div className="flex flex-col">
                { !!title &&
                    <div className="flex justify-between">
                        <MetricTitle title={ title } />
                        { !!diff && 
                        <div>
                            <MetricDiff diff={ diff } dir={ dir } />
                        </div>
                        }
                    </div>
                }      
                <div>
                    <div className="text-xl font-bold">{ value }</div>
                </div>
            </div>
        :   children
    )
}

export type MetricValueProps = {
    value: string;
    dir?: "negative" | "positive" | "neutral" | "blank";
    className?: string;
    children?: React.ReactNode;
}

export const MetricValue = ({ value, dir, className, children }: MetricValueProps) => {

    return (
        <div className={classNames(
                            "text-xl font-bold", 
                            className)}>
                { value }
        </div>
    )
}

export type MetricTitleProps = {
    title?: string;
    subtitle?: string;
    className?: string;
    children?: React.ReactNode;
}

export const MetricTitle = ({ title, subtitle, className, children }: MetricTitleProps) => {

    return (
        <div className="space-y-2">
            <div className="text-sm text-muted-foreground">{ title }</div>
            <div className="text-xs text-muted-foreground">{ subtitle }</div>
        </div>
    )
}

export type MetricDiffProps = {
    diff: string;
    dir?: "negative" | "positive" | "neutral" | "blank";
    className?: string;
    children?: React.ReactNode;
}

export const MetricDiff = ({ diff, dir = "blank", className, children }: MetricDiffProps) => {

    const color: ("blank" | "green" | "red" | "yellow") = dirToColor[dir] || "blank";

    return (
        <>  
            { !!diff
                ? <Badge color={ color } className={ className }>{ diff }</Badge>
                : children
            }
        </>
    )
}
