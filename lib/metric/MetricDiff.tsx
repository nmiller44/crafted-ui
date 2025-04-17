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

    return (
        <>  
            { !!diff
                ? <Badge clr={ dirToColor[dir] } className={ className } { ...props }>{ diff }</Badge>
                : <div className={ className } { ...props }>{ children }</div>
            }
        </>
    )
}
