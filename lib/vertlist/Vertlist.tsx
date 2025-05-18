import { classNames } from "~/utils"

export type VertlistProps = React.ComponentProps<"ul">

export const Vertlist = ({ className, children, ...props }: VertlistProps) => {

    return (
        <ul className={classNames(
                        "flex flex-col space-y-2", 
                        className)} 
            {...props}>
            { children }
        </ul>
    )
}