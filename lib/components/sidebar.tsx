import { classNames, colorStyle } from "../utils.js";
import { Heading5 } from "./heading.js";


export type SidebarProps = {
    color?: "default" | "primary" | "dark";
    className?: string;
    children?: React.ReactNode;
}

export const Sidebar = ({ color = "default", className, children }: SidebarProps) => {
    return (
        <div className={classNames(
                            "h-screen flex flex-col w-72 space-y-6", 
                            "group",
                            colorStyle(color),
                            className)}>
            { children }
        </div>
    )
}

export type SidebarHeaderProps = {
    title?: string;
    subtitle?: string;
    className?: string;
    children?: React.ReactNode;
}

export const SidebarHeader = ({ title, subtitle, className, children }: SidebarHeaderProps) => {
    return (
        <div className={classNames("px-6 pt-6", className)}>
            { !!title 
                ? <Heading5 title={title} subtitle={subtitle} />
                : children
            }
        </div>
    )
}

export type SidebarContentProps = {
    children?: React.ReactNode;
}

export const SidebarContent = ({ children }: SidebarContentProps) => {
    return (
        <div className="grow px-6">
            { children }
        </div>
    )
}

export type SidebarFooterProps = {
    children?: React.ReactNode;
}

export const SidebarFooter = ({ children }: SidebarFooterProps) => {
    return (
        <div className="px-6 pb-6">
            { children }
        </div>
    )
}