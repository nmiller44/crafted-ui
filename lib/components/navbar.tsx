
import { classNames } from "../utils.js";

export type NavbarProps = {
    children?: React.ReactNode;
}

export const Navbar = (props: NavbarProps) => {

    const children = props.children;

    return (
        <nav className="bg-white h-14 border-b">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
                { children }
            </div>
        </nav>
    )
}

export type NavbarCollapseButtonProps = {
    showCollapse?: boolean;
    setshowCollapse?: (value: boolean) => void;
    children?: React.ReactNode;
}

export const NavbarCollapseButton = (props: NavbarCollapseButtonProps) => {

    const showCollapse = props.showCollapse || false;
    const setShowCollapse = props.setshowCollapse || ((boo: boolean) => {});
    const children = props.children;

    const toggleCollapse = () => {
        setShowCollapse(!showCollapse);
    }

    return (
        <button type="button"
                className={classNames("block md:hidden",
                    "relative inline-flex items-center justify-center rounded-md p-2"
                )}
                onClick={toggleCollapse}
                aria-controls="mobile-menu" 
                aria-expanded={showCollapse}>
            <span className="sr-only">Open main menu</span>
            { children }
        </button>
    )   
}

export type NavbarCollapseListProps = {
    showCollapse: boolean;
    children: React.ReactNode;
}

export const NavbarCollapseList = (props: NavbarCollapseListProps) => {
    const showCollapse = props.showCollapse;
    const children = props.children;

    return (
        <div className={classNames(
            showCollapse ? "flex" : "hidden",
            "flex-col",
            "p-2 md:p-0 md:flex md:flex-row"
        )}>
            { children }
        </div>
    )
}

export type NavbarCollapseListItemProps = {
    href?: string;
    children: React.ReactNode;
}

export const NavbarCollapseListItem = (props: NavbarCollapseListItemProps) => {
    const href = props.href || "#";
    const children = props.children;

    return (
        <a  href={href}
            className={classNames(
            "ml-0 md:ml-8 px-3 py-2 rounded-md",
            "font-medium text-neutral-600 md:text-sm md:text-neutral-500",
            "hover:text-neutral-800 hover:bg-neutral-100",
        )}>
            { children }
        </a>
    )
}
