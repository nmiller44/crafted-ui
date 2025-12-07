import { RadioGroup as RadioGroupPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";

export type RadioGroupProps = React.ComponentProps<typeof RadioGroupPrimitive>;

export const RadioGroup = ({
    children,
    className,
    ...props
}: RadioGroupProps) => {

    return (
        <RadioGroupPrimitive 
            className={classNames(
                "flex flex-col space-y-3 space-x-6 group",
                className
            )} 
            {...props}
        >
            {children}
        </RadioGroupPrimitive>
    )
}
