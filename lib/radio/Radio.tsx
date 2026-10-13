import { Radio as RadioPrimitive } from "@base-ui/react"
import { useId } from "react";
import { classNames } from "~/utils";

export type RadioProps = React.ComponentProps<typeof RadioPrimitive.Root>;

export const Radio = ({
    value,
    children,
    className,
    ...props
}: RadioProps) => {
    const labelId = useId();
    const labelledBy = props['aria-labelledby'] ?? (
        props['aria-label'] ? '' : children ? labelId : undefined
    );
    
    return (
        <RadioPrimitive.Root value={value} render={(rootProps, state) => (
            <span {...rootProps} tabIndex={state.disabled ? -1 : rootProps.tabIndex} />
        )} className={classNames(
                                                "flex items-center gap-2",
                                                "cursor-pointer group focus:outline-none",
                                                "data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed",
                                                className
                                            )} {...props} aria-labelledby={labelledBy}>
            <div className={classNames(
                    "text-foreground",
                    "size-4 rounded-full border-0 ring-1 ring-inset ring-border shadow-sm", 
                    "flex items-center justify-center",
                    "group-focus:ring-2 group-focus:ring-foreground",
                    "group-aria-[invalid=true]:ring-2 group-aria-[invalid=true]:ring-danger",
                    "group-data-[invalid]:ring-2 group-data-[invalid]:ring-danger",
                    "group-focus:outline-offset-2",
                    "group-[[aria-invalid=true]:focus]:outline-2 group-[[aria-invalid=true]:focus]:outline-danger",
                    "group-[[data-invalid]:focus]:outline-2 group-[[data-invalid]:focus]:outline-danger"
                )}>
                <RadioPrimitive.Indicator>
                    <div className="size-2 rounded-full bg-primary" />
                </RadioPrimitive.Indicator>
            </div>
            <span id={labelId} className="text-sm text-neutral-700 select-none">
                {children}
            </span>
        </RadioPrimitive.Root>
    )
}