import { Radio as RadioPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

export type RadioProps = React.ComponentProps<typeof RadioPrimitive.Root> & {
    value: string;
    children: React.ReactNode;
    className?: string;
}

export const Radio = ({
    value,
    children,
    className,
    ...props
}: RadioProps) => {
    
    return (
        <RadioPrimitive.Root value={value} className={classNames(
                                                "flex items-center gap-2",
                                                "cursor-pointer group",
                                                className
                                            )} {...props}>
            <div className={classNames(
                    "size-4 rounded-full border-2",
                    "flex items-center justify-center",
                    "border-border bg-white",
                    "group-data-[checked]:border-primary",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    "transition-colors duration-200"
                )}>
                <RadioPrimitive.Indicator>
                    <div className="size-2 rounded-full bg-primary" />
                </RadioPrimitive.Indicator>
            </div>
            <span className="text-sm text-neutral-700 select-none">
                {children}
            </span>
        </RadioPrimitive.Root>
    )
}