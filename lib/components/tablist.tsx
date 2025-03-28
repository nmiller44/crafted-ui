import { classNames } from "../utils.js";

export type TablistProps = {

    bordered?: boolean;
    className?: string;
    children?: React.ReactNode;
}

export const Tablist = ({ bordered = false, className, children }:TablistProps) => {
    return (
        <ul className={classNames(  
                            bordered ? "border-b border-border" : "", 
                            "flex space-x-12",
                            className
        )}>
            { children }
        </ul>
    )
}

export const TablistItem = ({ className, children }: any) => {
    return (
        <li className={classNames(
                                "px-1 py-4",
                                "text-sm font-medium text-muted-foreground hover:text-foreground",
                                "has-[.active]:text-primary has-[.active]:border-b-2 has-[.active]:border-primary",
                                className
                            )}>
            { children }
        </li>
    )
}