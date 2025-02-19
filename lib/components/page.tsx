import { Heading1 } from "./heading.js";



export type PageProps = {
    children?: React.ReactNode
}

export const Page = ({ children }: PageProps) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            { children }
        </div>
    )
}

export type PageHeaderProps = {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export const PageHeader = ({ title, subtitle, children }: PageHeaderProps) => {
    return (
        <div>
            <Heading1 title={title} subtitle={subtitle}>
                { children }
            </Heading1>
        </div>
    )
}