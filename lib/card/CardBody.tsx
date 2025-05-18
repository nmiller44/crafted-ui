import { classNames } from "~/utils";

export type CardBodyProps = React.ComponentProps<"div">

export const CardBody = ({ className, children, ...props }: CardBodyProps) => {

    return (
        <div className={classNames(
                            "flex flex-col", 
                            "p-5 py-6 grow", 
                            className
                    )} { ...props }>
            { children }
        </div>
    )
}