export type SectionHeadingProps = {
    title: string;
}

export const SectionHeading = (props: SectionHeadingProps) => {

    const title = props.title || "Section";

    return (
        <div className="pb-5 border-b">
            <h3 className="pl-1 text-lg font-semibold">{ title }</h3>
        </div>
    )
}