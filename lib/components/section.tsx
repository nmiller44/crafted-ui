import { Heading2 } from "./heading.js"



export type SectionProps = {
    children?: React.ReactNode
}

export const Section = ({ children }: SectionProps) => {

    return (
        <section className="[&:not(:first-child)]:mt-12">
            { children }
        </section>
    )
}

export type SectionHeaderProps = {
    title?: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export const SectionHeader = ({ title, subtitle, children }: SectionHeaderProps) => {

    return (
        <div className="pb-3 border-b border-gray-200">
            <Heading2 title={title} subtitle={subtitle}>
                { children }
            </Heading2>
        </div>
    )
}