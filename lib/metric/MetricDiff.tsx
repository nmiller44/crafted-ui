import { Badge } from "~/badge/Badge";

export type MetricDiffProps = React.ComponentProps<'div'> & {
    diff: string;
    dir?: "negative" | "positive" | "neutral" | "blank";
}

export const MetricDiff = ({ diff, dir = "blank", className, children, ...props }: MetricDiffProps) => {

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
                ? <Badge color={ color } className={ className } { ...props }>{ diff }</Badge>
                : <div className={ className } { ...props }>{ children }</div>
            }
        </>
    )
}
