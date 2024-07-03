export type SideBarFlexProps = {
    children: React.ReactNode;
}

export const SidebarFlex = (props: SideBarFlexProps) => {

    return (
        <div>
            <aside id="flex-sidebar" className="w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="px-3 py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                        { props.children }
                    </ul>
                </div>
            </aside>
        </div>
    )
}

export type SidebarFlexTileProps = {
    title: string;
    href: string;
    icon: any;
}

export const SidebarFlexTile = (props: SidebarFlexTileProps) => {
    const title = props.title || "Section";
    const href = props.href || "#";
    const Icon = props.icon;

    return (
        <li>
            <a href={href} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            { Icon && 
                <Icon className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" /> 
            }
            <span className="flex-1 ms-3 whitespace-nowrap">{ title }</span>
            </a>
        </li>
    )
}