import { RadioGroup as RadioGroupPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

export type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive> & {
    children?: React.ReactNode;
    className?: string;
}

export const RadioGroup = ({
    children,
    className,
    ...props
}: RadioGroupProps) => {

    return (
        <RadioGroupPrimitive className={classNames(
                        "space-y-3",
                        className
                    )} {...props}>
            {children}
        </RadioGroupPrimitive>
    )
}
