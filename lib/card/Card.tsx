import { CardHeader } from "~/card/CardHeader";
import { classNames } from "~/utils";

export type CardProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
    body?: boolean
}

export const Card = ({ title, subtitle, body = false, className, children, ...props }: CardProps) => {

    return (
        <div className={classNames( 
                                "flex flex-col",
                                "rounded-md border border-border bg-card text-card-foreground shadow",
                                className)} { ...props }>
            { !!title &&
                <CardHeader title={ title } subtitle={ subtitle } />
            }
            <div className={classNames(body ? "px-8 py-10 space-y-6" : "")}>
                { children }
            </div>
        </div>
    )
}