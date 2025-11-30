import { classNames } from "~/utils"

export type TablistProps = React.ComponentProps<"ul"> & {
    bordered?: boolean
}

export const Tablist = ({ bordered = false, className, children, ...props }: TablistProps) => {

    return (
        <ul className={classNames(  
                        bordered ? "group bordered border-b border-border" : "",

                        // Handle full height in nav
                        "h-full items-center",
                        
                        "flex space-x-8",
                        className
                    )} {...props}>
                        { children }
        </ul>
    )
}
