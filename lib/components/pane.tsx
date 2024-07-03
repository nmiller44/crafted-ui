export type PaneProps = {
    children: React.ReactNode
}

export const Pane = (props: any) => {

    return (
        <div className="px-6 py-12">
            { props.children }
        </div>
    )
}