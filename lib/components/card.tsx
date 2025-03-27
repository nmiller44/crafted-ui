import { classNames } from "../utils.js";
import { Heading5 } from "./heading.js";

export type CardProps = {
    title?: string;
    subtitle?: string;
    className?: string;
    children?: React.ReactNode;
}

export const Card = ({ title, subtitle, className, children }: CardProps) => {

    return (
        <div className={classNames( 
                                "flex flex-col",
                                "rounded-md border border-border bg-card text-card-foreground shadow",
                                className)}>
            { !!title
                ? <CardHeader title={ title } subtitle={ subtitle } />
                : children
            }
        </div>
    )
}

export type CardHeaderProps = {
    title?: string;
    subtitle?: string;
    className?: string;
    children?: React.ReactNode;
}

export const CardHeader = ({ title, subtitle, className, children }: CardHeaderProps) => {

    return (
        <div className={classNames(
                            "px-5 py-6 border-b border-border",
                            className)}>
            { !!title 
                ? <Heading5 title={ title } subtitle={ subtitle } />
                : children 
            }
        </div>
    )
}

export type CardBodyProps = {
    className?: string;
    children?: React.ReactNode;
}

export const CardBody = ({ className, children }: CardBodyProps) => {

    return (
        <div className={classNames("p-5 grow", className)}>
            { children }
        </div>
    )
}

export type CardFooterProps = {
    className?: string;
    children?: React.ReactNode;
}

export const CardFooter = ({ className, children }: CardFooterProps) => {

    return (
        <div className={classNames(
                            "px-5 py-6 border-t border-border",
                            "text-foreground",
                            className)}>
            { children }
        </div>
    )
}
