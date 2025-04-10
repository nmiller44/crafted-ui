import { Badge } from "../badge";

export type MetricDiffProps = React.ComponentProps<'div'> & {
    diff: string;
    dir?: "negative" | "positive" | "neutral" | "blank";
}

export const MetricDiff = ({ diff, dir = "blank", className, children }: MetricDiffProps) => {

    const dirToColor: { blank: "blank"; positive: "green"; negative: "red"; neutral: "yellow"; } = {
        blank: "blank",
        positive: "green",
        negative: "red",
        neutral: "yellow"
    }

    const color: ("blank" | "green" | "red" | "yellow") = dirToColor[dir] || "blank";

    return (
        <>  
            { !!diff
                ? <Badge color={ color } className={ className }>{ diff }</Badge>
                : <div className={ className }>{ children }</div>
            }
        </>
    )
}