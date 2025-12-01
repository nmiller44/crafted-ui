import { classNames } from "~/utils";

export type CardBodyProps = React.ComponentProps<"div">

export const CardBody = ({ className, children, ...props }: CardBodyProps) => {

    return (
        <div className={classNames(
                            "flex flex-col", 
                            "px-8 py-10 grow", 
                            "space-y-6",
                            className
                    )} { ...props }>
            { children }
        </div>
    )
}