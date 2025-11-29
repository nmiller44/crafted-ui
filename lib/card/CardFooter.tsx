import { classNames } from "~/utils";

export type CardFooterProps = React.ComponentProps<"div">

export const CardFooter = ({ className, children, ...props }: CardFooterProps) => {

    return (
        <div className={classNames(
                        "px-8 py-6 border-t border-border",
                        "text-foreground",
                        className)} { ...props }>
            { children }
        </div>
    )
}