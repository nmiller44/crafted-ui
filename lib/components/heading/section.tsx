export type HeadingSectionProps = {
    title: string;
}

export const HeadingSection = (props: HeadingSectionProps) => {

    const title = props.title || "Section";

    return (
        <div className="pb-3 mb-4 border-b">
            <h3 className="pl-1 text-xl font-semibold">{ title }</h3>
        </div>
    )
}