export type HeadingSectionProps = {
    title: string;
}

export const HeadingSection = (props: HeadingSectionProps) => {

    const title = props.title || "Section";

    return (
        <div className="pb-5 border-b">
            <h3 className="pl-1 mb-4 text-lg font-semibold">{ title }</h3>
        </div>
    )
}