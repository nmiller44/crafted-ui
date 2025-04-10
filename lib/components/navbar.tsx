
import { classNames } from "../utils.js";

export type NavbarProps = {
    border?: boolean;
    children?: React.ReactNode;
}

export const Navbar = ({ border = true, children }: NavbarProps) => {

    return (
        <nav className={classNames(
            "bg-white", 
            border ? "border-b" : ""
        )}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-14 items-center justify-between">
                    { children }
                </div>
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
            "font-medium text-neutral-600 md:text-sm md:text-muted-foreground",
            "hover:text-neutral-800 hover:bg-neutral-100",
        )}>
            { children }
        </a>
    )
}
