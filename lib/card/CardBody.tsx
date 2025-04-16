import { classNames } from "~/utils";

export type CardBodyProps = React.ComponentProps<"div">

export const CardBody = ({ className, children, ...props }: CardBodyProps) => {

    return (
        <div className={classNames("p-5 grow", className)} { ...props }>
            { children }
        </div>
    )
}