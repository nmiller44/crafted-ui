import { CardHeader } from "~/card/CardHeader";
import { classNames } from "~/utils";

export type CardProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
    body?: boolean;
    full?: boolean;
}

export const Card = ({ title, subtitle, body = false, full = false, className, children, ...props }: CardProps) => {

    return (
        <div className={classNames( 
                                "flex flex-col",
                                "bg-card text-card-foreground",
                                full    ? "md:rounded-md md:border md:border-border md:shadow"
                                        : "rounded-md border border-border shadow",
                                className)} { ...props }>
            { !!title &&
                <CardHeader title={ title } subtitle={ subtitle } />
            }
            <div className={classNames(
                                "space-y-6",
                                body    ? full ? "p-0 md:px-8 md:py-10" :  "px-8 py-10"
                                        : ""
                            )}>
                { children }
            </div>
        </div>
    )
}