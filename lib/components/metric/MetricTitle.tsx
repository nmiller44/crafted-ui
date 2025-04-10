import { classNames } from "@/utils";

export type MetricTitleProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
}

export const MetricTitle = ({ title, subtitle, className, children }: MetricTitleProps) => {

    return (
        <div className={classNames("flex flex-col space-y-0.5", className)}>
            { !!title &&
                <div className="text-sm text-muted-foreground">{ title }</div>
            }
            { !!subtitle &&
                <div className="text-xs text-muted-foreground/75">{ subtitle }</div>
            }
            { children }
        </div>
    )
}