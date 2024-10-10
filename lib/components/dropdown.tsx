import { SetStateAction } from "react";
import { classNames } from "../utils.js";

export type DropdownProps = {
    children: React.ReactNode;
}

export type DropdownButtonProps = {
    showMenu: boolean;
    setShowMenu: (value: SetStateAction<boolean>) => void;
    // setShowMenu: SetStateAction<boolean>;
    children: React.ReactNode;
}

export type DropdownMenuProps = {
    children: React.ReactNode;
}

export type DropdownMenuItemProps = {
    children: React.ReactNode;
}

export const Dropdown = (props: DropdownProps) => {
    return (
        <div className="relative">
            { props.children }
        </div>
    )
}

export const DropdownButton = (props: DropdownButtonProps) => {

    const toggleDropdownMenuDrop = () => {
        props.setShowMenu(!props.showMenu);
    }

    return (
        <button onClick={toggleDropdownMenuDrop}
            className={classNames(
                "px-3 py-2"
            )}
            id="menu-button" aria-expanded="true" aria-haspopup="true">
            <span className="sr-only">Open menu</span>
            { props.children }
        </button>
    )
}

export const DropdownMenu = (props: DropdownMenuProps) => {
    
    return (
        <div    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}
        >
            <div className="flex flex-col py-0.5" role="none">
                { props.children }
            </div>
        </div>  
    )
}

export const DropdownMenuItem = (props: DropdownMenuItemProps) => {

    return (
        <div className="px-4 py-2 text-neutral-700">
            { props.children }
        </div>        
    )
}