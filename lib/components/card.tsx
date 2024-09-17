import { classNames } from "../utils.js";

export type CardProps = {
    title?: string;
    showTitle?: boolean;
    children: React.ReactNode;
}

export type CardHeaderProps = {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export type CardBodyProps = {
    children?: React.ReactNode;
}

export type CardFooterProps = {
    children?: React.ReactNode;
}

export const Card = (props: CardProps) => {

    const title = props.title;
    const showTitle = props.showTitle || !!title || false;
    const children = props.children


    return (
        <div className="rounded-md border border-neutral-200 bg-white shadow shadow-neutral-300 flex flex-col">
            {
                showTitle &&
                <div className="px-5 py-6 border-b border-neutral-200">
                    <div className="text-lg font-medium leading-6 text-neutral-900">{ title }</div>
                    <div></div>
                </div>
            }
            { children }
        </div>
    )
}

export const CardHeader = (props: CardHeaderProps) => {
    const children = props.children;

    return (
        <div className={classNames(
            "px-5 py-6 border-b border-neutral-200",
            "text-lg font-medium leading-6 text-neutral-900"
            )}>
            { children }
        </div>
    )
}

export const CardBody = (props: CardBodyProps) => {
    const children = props.children;

    return (
        <div className="p-5 grow">
            { children }
        </div>
    )
}

export const CardFooter = (props: CardFooterProps) => {
    const children = props.children;

    return (
        <div className={classNames(
            "px-5 py-6 border-t border-neutral-200",
            "text-neutral-900"
            )}>
            { children }
        </div>
    )
}