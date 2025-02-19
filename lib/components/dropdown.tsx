import { SetStateAction } from "react";
import { classNames } from "../utils.js";

export type DropdownProps = {
    children?: React.ReactNode;
}

export const Dropdown = (props: DropdownProps) => {
    const children = props.children;

    return (
        <div className="relative h-full">
            { children }
        </div>
    )
}

export type DropdownButtonProps = {
    showMenu?: boolean;
    setShowMenu?: (value: SetStateAction<boolean>) => void;
    children?: React.ReactNode;
}

export const DropdownButton = (props: DropdownButtonProps) => {
    const showMenu = props.showMenu || false;
    const setShowMenu = props.setShowMenu || (() => {});
    const children = props.children;

    const toggleDropdownMenuDrop = () => {
        setShowMenu(!showMenu);
    }

    return (
        <button onClick={toggleDropdownMenuDrop}
                className={classNames(
                    "h-full flex flex-col place-content-center px-3 py-2"
                )}
                id="menu-button" aria-expanded="true" aria-haspopup="true">
            <span className="sr-only">Open menu</span>
            { children }
        </button>
    )
}

export type DropdownMenuProps = {
    showMenu?: boolean;
    menuAlign?: string;
    children?: React.ReactNode;
}

export const DropdownMenu = (props: DropdownMenuProps) => {
    const showMenu = props.showMenu || false;
    const menuAlign = props.menuAlign || "left";
    const children = props.children;

    return (
        <div    className={classNames(
            showMenu ? "block" : "hidden",
            "absolute z-10 w-48", 
            menuAlign === "right" ? "right-0 origin-top-right" : "left-0 origin-top-left",
            "rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        )}
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}
        >
            <div className="flex flex-col py-0.5" role="none">
                { children }
            </div>
        </div>  
    )
}

export type DropdownMenuItemProps = {
    href?: string;
    children?: React.ReactNode;
}

export const DropdownMenuItem = (props: DropdownMenuItemProps) => {
    const href = props.href || "#";
    const children = props.children;

    return (
        <a  href={href}
            className={classNames(
                "px-4 py-2", 
                "text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
            )}>
            { children }
        </a>        
    )
}