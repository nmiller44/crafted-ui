export type CardProps = {
    title?: string;
    showTitle?: boolean;
    children: React.ReactNode;
}

export const Card = (props: CardProps) => {

    const title = props.title;
    const showTitle = props.showTitle || !!title || false;

    return (
        <div className="p-3">
            <div className="rounded-md border border-gray-200 bg-white">
                {
                    showTitle &&
                    <div className="border-b border-gray-200 p-5">
                        <div className="text-lg font-medium leading-6 text-gray-900">{ title }</div>
                        <div></div>
                    </div>
                }
                <div className="p-3 pt-2">
                    { props.children }
                </div>
            </div>
        </div>
    )
}