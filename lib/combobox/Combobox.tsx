import { Combobox as ComboboxPrimitive } from "@base-ui/react"
import { classNames } from "~/utils";
import { ComboboxOption } from "./ComboboxOption";
import { ReactNode } from "react";
import { IconChevronDown } from "~/icons";

export type ComboboxProps = React.ComponentProps<typeof ComboboxPrimitive.Root> & {
    placeholder?: string;
    align?: "start" | "center" | "end";
    alignOffset?: number;
    className?: string;
}

/**
 * Configuration for individual combobox options.
 * 
 * @property value - The value associated with the option
 * @property label - The display text/content shown for the option
 */
export type ComboboxItemProp = {
    value: string;
    label: ReactNode;
};

/**
 * Searchable dropdown for choosing from a filterable list of options.
 * Combines an input field with a dropdown list, allowing users to type to filter options.
 * 
 * @component
 * @category Forms
 * @accessibility Full keyboard navigation and ARIA support from Base UI
 * @since 0.2.3
 * @related ComboboxOption - Custom option rendering (rarely needed)
 * @see {@link https://crafted-ui.com/docs/forms/combobox}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-combobox}
 * 
 * @param items - Array of option objects with value and label properties. Required for filtering
 * @param placeholder - Placeholder text shown when input is empty
 * @param align - Dropdown alignment relative to input (defaults to "start")
 * @param alignOffset - Pixel offset for dropdown alignment
 */
export const Combobox = ({
    placeholder,
    align = "start",
    alignOffset = 0,
    items = [] as ComboboxItemProp[],
    children,
    className,
    disabled = false,
    ...props
}: ComboboxProps) => {
    // Auto-disable when items is empty and no children provided
    const isEmpty = !items || items.length === 0;
    const shouldDisable = disabled || (isEmpty && !children);

    return (
        <div className="mt-1">
            <ComboboxPrimitive.Root 
                items={items}
                {...props} 
                disabled={shouldDisable}
            >
                <ComboboxPrimitive.InputGroup
                    className={classNames(
                        "flex items-center",
                        "w-full",
                        "rounded-t-md border-0 ring-1 ring-inset ring-border outline-0 shadow-sm",
                        "rounded-b-md data-[popup-open]:rounded-b-none",
                        "aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-danger",
                        "data-[invalid]:ring-2 data-[invalid]:ring-danger",
                        "has-[[data-invalid]]:ring-2 has-[[data-invalid]]:ring-danger",
                        "group-data-[invalid]:ring-2 group-data-[invalid]:ring-danger",
                        "text-sm text-foreground",
                        "focus-within:ring-2 focus-within:ring-inset focus-within:ring-foreground",
                        "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
                        className
                    )}
                >
                    <ComboboxPrimitive.Input
                        placeholder={placeholder}
                        className={classNames(
                            "flex-1 min-w-0 py-2 pl-3 pr-1 leading-5",
                            "bg-transparent outline-0 border-0",
                            "text-sm text-foreground placeholder:text-muted-foreground",
                            "disabled:cursor-not-allowed",
                        )}
                    />
                    <ComboboxPrimitive.Icon className="text-muted-foreground flex-shrink-0 pr-2">
                        <IconChevronDown className="size-4" />
                    </ComboboxPrimitive.Icon>
                </ComboboxPrimitive.InputGroup>
                <ComboboxPrimitive.Portal>
                    <ComboboxPrimitive.Positioner side="bottom" align={align} alignOffset={alignOffset}>
                        <ComboboxPrimitive.Popup className={classNames(
                                                    "bg-white",
                                                    "w-[calc(var(--anchor-width)-2px)] mx-px rounded-b-md border-0 ring-1 ring-border shadow-sm outline-0",
                                                    "transition-[transform,scale,opacity] data-[ending-style]:scale-95 data-[starting-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
                                                    )}>
                            <ComboboxPrimitive.List>
                                <ComboboxPrimitive.Empty className="px-3 py-2 text-sm text-muted-foreground">
                                    No results found
                                </ComboboxPrimitive.Empty>
                                { !children ? (
                                    <ComboboxPrimitive.Collection>
                                        {(item: ComboboxItemProp) => (
                                            <ComboboxOption key={item.value} value={item}>
                                                {item.label}
                                            </ComboboxOption>
                                        )}
                                    </ComboboxPrimitive.Collection>
                                ) : children }
                            </ComboboxPrimitive.List>
                        </ComboboxPrimitive.Popup>
                    </ComboboxPrimitive.Positioner>
                </ComboboxPrimitive.Portal>
            </ComboboxPrimitive.Root>
        </div>
    )
}
