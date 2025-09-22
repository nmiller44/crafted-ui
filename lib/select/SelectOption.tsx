import { Select as SelectPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

export type SelectOptionProps = React.ComponentProps<typeof SelectPrimitive.Item> & {
    value: any;
    children: React.ReactNode;
}

export const SelectOption = ({
    value,
    children,
    className,
    ...props
}: SelectOptionProps) => {
    
    return (
        <SelectPrimitive.Item value={value} className={classNames(
                                                "flex gap-x-2 items-center px-3 py-0.5", 
                                                "cursor-pointer", 
                                                "hover:bg-neutral-100 hover:outline-0",
                                                "active:outline-0 *:outline-0",
                                                className
                                            )} { ...props }>
            <div className="size-3 col-start-1">
                <SelectPrimitive.ItemIndicator>
                    <svg fill="currentcolor" width="10" height="10" viewBox="0 0 10 10" className="size-full">
                        <path d="M9.1603 1.12218C9.50684 1.34873 9.60427 1.81354 9.37792 2.16038L5.13603 8.66012C5.01614 8.8438 4.82192 8.96576 4.60451 8.99384C4.3871 9.02194 4.1683 8.95335 4.00574 8.80615L1.24664 6.30769C0.939709 6.02975 0.916013 5.55541 1.19372 5.24822C1.47142 4.94102 1.94536 4.91731 2.2523 5.19524L4.36085 7.10461L8.12299 1.33999C8.34934 0.993152 8.81376 0.895638 9.1603 1.12218Z" />
                    </svg>
                </SelectPrimitive.ItemIndicator>
            </div>
            <SelectPrimitive.ItemText className="col-start-2 text-sm">{ children }</SelectPrimitive.ItemText>
        </SelectPrimitive.Item>
    )
}
