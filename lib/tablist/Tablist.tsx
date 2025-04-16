import { classNames } from "~/utils"

export type TablistProps = React.ComponentProps<"ul">

export const Tablist = ({ className, children, ...props }: TablistProps) => {

    return (
        <ul className={classNames(  
                        // bordered ? "border-b border-border" : "", 
                        "flex space-x-8",
                        className
                    )} {...props}>
                        { children }
        </ul>
    )
}
