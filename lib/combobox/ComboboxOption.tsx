import { Combobox as ComboboxPrimitive } from "@base-ui/react"
import { classNames } from "~/utils";

/**
 * Custom option rendering for Combobox dropdown.
 * Only use when you need custom content (badges, icons, complex layouts). For simple text options, use Combobox items prop.
 * 
 * @component
 * @category Forms
 * @since 0.2.3
 * @related Combobox - Parent component that auto-generates options from items prop
 * @see {@link https://crafted-ui.com/docs/forms/combobox}
 */
export type ComboboxOptionProps = React.ComponentProps<typeof ComboboxPrimitive.Item> & {
    value: any;
    children: React.ReactNode;
}

export const ComboboxOption = ({
    value,
    children,
    className,
    ...props
}: ComboboxOptionProps) => {
    
    return (
        <ComboboxPrimitive.Item value={value} className={classNames(
                                                "flex gap-x-2 items-center px-3 py-0.5", 
                                                "cursor-pointer", 
                                                "data-[highlighted]:bg-neutral-100 data-[highlighted]:outline-0",
                                                "active:outline-0 *:outline-0",
                                                className
                                            )} { ...props }>
            <div className="size-3 col-start-1">
                <ComboboxPrimitive.ItemIndicator>
                    <svg fill="currentcolor" width="10" height="10" viewBox="0 0 10 10" className="size-full">
                        <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
                    </svg>
                </ComboboxPrimitive.ItemIndicator>
            </div>
            <div className="col-start-2 text-sm">{ children }</div>
        </ComboboxPrimitive.Item>
    )
}
