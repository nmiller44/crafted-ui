import { Select as SelectPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
    placeholder?: string;
    align?: "start" | "center" | "end";
    alignOffset?: number;
    className?: string;
}

export const Select = ({
    placeholder,
    align = "start",
    alignOffset = 0,
    children,
    className,
    ...props
}: SelectProps) => {

    return (
        <SelectPrimitive.Root {...props}>
            <SelectPrimitive.Trigger className={classNames(
                                        "flex gap-2 items-center",
                                        "mt-1 block w-full py-2 px-3",
                                        "rounded-t-md border-0 ring-1 ring-inset ring-neutral-300 outline-0 shadow-sm",
                                        "aria-[expanded=false]:rounded-b-md",
                                        "aria-[invalid=true]:ring-red-600",
                                        "text-sm text-neutral-900 placeholder:text-neutral-400", 
                                        "focus:ring-2 focus:ring-inset focus:border-neutral-800 focus:outline-0 focus:ring-neutral-800",
                                        "cursor-pointer *:cursor-pointer", // "*:outline-0"
                                        className
                                    )}>
                <SelectPrimitive.Icon className="text-neutral-800">
                    ▼
                </SelectPrimitive.Icon>
                <SelectPrimitive.Value placeholder={ placeholder } />
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
                <SelectPrimitive.Positioner align={ align } alignOffset={ alignOffset }>
                    <SelectPrimitive.Popup className={classNames(
                                                "bg-white",
                                                "w-[calc(var(--anchor-width)-2px)] mx-px rounded-b-md border-0 ring-1 ring-neutral-300 shadow-sm outline-0",
                                                "transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
                                                )}>
                        { children }
                    </SelectPrimitive.Popup>
                </SelectPrimitive.Positioner>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    )
}