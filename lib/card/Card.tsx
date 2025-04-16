import { CardHeader } from "~/card/CardHeader";
import { classNames } from "~/utils";

export type CardProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
}

export const Card = ({ title, subtitle, className, children, ...props }: CardProps) => {

    return (
        <div className={classNames( 
                                "flex flex-col",
                                "rounded-md border border-border bg-card text-card-foreground shadow",
                                className)} { ...props }>
            { !!title &&
                <CardHeader title={ title } subtitle={ subtitle } />
            }
            { children }
        </div>
    )
}