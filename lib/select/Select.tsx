import { Select as SelectPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";
import { SelectOption } from "./SelectOption";
import { ReactNode } from "react";

export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
    placeholder?: string;
    align?: "start" | "center" | "end";
    alignOffset?: number;
    className?: string;
}

export type SelectItemProp = {
    value: unknown;
    label: ReactNode;
};

export const Select = ({
    placeholder,
    align = "start",
    alignOffset = 0,
    items = [] as SelectItemProp[],
    children,
    className,
    ...props
}: SelectProps) => {

    return (
        <SelectPrimitive.Root items={items} {...props}>
            <SelectPrimitive.Trigger className={classNames(
                                        "flex gap-2 items-center",
                                        "mt-1 block w-full py-2 px-3",
                                        "rounded-t-md border-0 ring-1 ring-inset ring-border outline-0 shadow-sm",
                                        "aria-[expanded=false]:rounded-b-md",
                                        "aria-[invalid=true]:ring-danger",
                                        "text-sm text-foreground placeholder:text-muted-foreground", 
                                        "focus:ring-2 focus:ring-inset focus:border-foreground focus:outline-0 focus:ring-foreground",
                                        "cursor-pointer *:cursor-pointer", // "*:outline-0"
                                        "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:[&>*]:cursor-not-allowed",
                                        className
                                    )}>
                <SelectPrimitive.Icon className="text-foreground mr-2">
                    ▼
                </SelectPrimitive.Icon>
                <SelectPrimitive.Value />
            </SelectPrimitive.Trigger>
            <SelectPrimitive.Portal>
                <SelectPrimitive.Positioner align={ align } alignOffset={ alignOffset }>
                    <SelectPrimitive.Popup className={classNames(
                                                "bg-white",
                                                "w-[calc(var(--anchor-width)-2px)] mx-px rounded-b-md border-0 ring-1 ring-border shadow-sm outline-0",
                                                "transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
                                                )}>
                        { !children && Array.isArray(items) &&
                            items.map((type: SelectItemProp, idx: number) => (
                            <SelectOption key={`${type.value}-${idx}`} value={`${type.value}`}>
                                {type.label}
                            </SelectOption>
                        ))}
                        { children }
                    </SelectPrimitive.Popup>
                </SelectPrimitive.Positioner>
            </SelectPrimitive.Portal>
        </SelectPrimitive.Root>
    )
}
