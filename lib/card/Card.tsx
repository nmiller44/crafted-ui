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
                                body ? "p-5 py-6" : "",
                                className)} { ...props }>
            { !!title &&
                <CardHeader title={ title } subtitle={ subtitle } />
            }
            { children }
        </div>
    )
}