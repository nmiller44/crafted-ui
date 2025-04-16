import { Heading3 } from "~/heading/Heading3";
import { classNames } from "~/utils";

export type EmptyProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;   
}

export const Empty = ({ title, subtitle, className, children, ...props }: EmptyProps) => {

    return (
        <div className={classNames(
                            "max-w-xl mx-auto", 
                            "rounded-lg border border-muted-foreground border-2 border-dashed", 
                            "px-10 py-12 text-center",
                            className
                )} { ...props }>
            { !!title 
                ? <Heading3 title={ title } subtitle={ subtitle } className="text-muted-foreground" subtitleClass="text-muted-foreground" />
                : children 
            }
        </div> 
    )
};