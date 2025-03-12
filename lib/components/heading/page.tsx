

export type HeadingPageProps = {
    title?: string;
    children?: React.ReactNode;
}

export const HeadingPage = (props: any) => {
    const title = props.title;
    const children = props.children;

    return (
        <header>
            <div className="flex py-6">
                { props.title
                    ? <h1 className="text-3xl font-bold leading-7 text-neutral-900">{ title }</h1>
                    : children
                }
            </div>
        </header>
    )
}