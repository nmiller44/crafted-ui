import { Select as SelectPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";
import { SelectOption } from "./SelectOption";
import { ReactNode } from "react";
import { IconChevronDown } from "~/icons";

export type SelectProps = React.ComponentProps<typeof SelectPrimitive.Root> & {
    placeholder?: string;
    align?: "start" | "center" | "end";
    alignOffset?: number;
    className?: string;
    "aria-invalid"?: boolean | "true" | "false";
}

/**
 * Configuration for individual select options.
 * 
 * @property value - The value associated with the option (can be any type)
 * @property label - The display text/content shown when the option is selected
 */
export type SelectItemProp = {
    value: unknown;
    label: ReactNode;
};

/**
 * Dropdown select for choosing from a list of options.
 * The items prop is essential for proper functionality - without it, selected values display as raw strings.
 * 
 * @component
 * @category Forms
 * @accessibility Full keyboard navigation and ARIA support from Base UI
 * @since 0.1.0
 * @related SelectOption - Custom option rendering (rarely needed)
 * @see {@link https://crafted-ui.com/docs/forms/select}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-select}
 * 
 * @param items - Array of option objects with value and label properties. Essential for proper display
 * @param align - Dropdown alignment relative to trigger (defaults to "start")
 * @param alignOffset - Pixel offset for dropdown alignment
 */
export const Select = ({
    placeholder,
    align = "start",
    alignOffset = 0,
    items = [] as SelectItemProp[],
    children,
    className,
    "aria-invalid": ariaInvalid,
    disabled = false,
    ...props
}: SelectProps) => {
    // Auto-disable when items is empty and no children provided
    const isEmpty = !items || items.length === 0;
    const shouldDisable = disabled || (isEmpty && !children);

    return (
        <div className="mt-1">
            <SelectPrimitive.Root items={items} {...props} disabled={shouldDisable}>
                <SelectPrimitive.Trigger 
                    aria-invalid={ariaInvalid}
                    className={classNames(
                        "flex items-center justify-between",
                        "w-full py-2 px-3",
                        "rounded-t-md border-0 ring-1 ring-inset ring-border outline-0 shadow-sm",
                        "aria-[expanded=false]:rounded-b-md",
                        "aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-danger",
                        "text-sm text-foreground placeholder:text-muted-foreground", 
                        "focus:ring-2 focus:ring-inset focus:border-foreground focus:outline-0 focus:ring-foreground",
                        "cursor-pointer *:cursor-pointer", // "*:outline-0"
                        "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed data-[disabled]:[&>*]:cursor-not-allowed",
                        className
                    )}
                >
                    <SelectPrimitive.Value />
                    <SelectPrimitive.Icon className="text-muted-foreground flex-shrink-0">
                        <IconChevronDown className="size-4" />
                    </SelectPrimitive.Icon>
                </SelectPrimitive.Trigger>
                <SelectPrimitive.Portal>
                    <SelectPrimitive.Positioner alignItemWithTrigger={false} side="bottom" align="start">
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
        </div>
    )
}
