import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui-components/react";
import { classNames } from "~/utils";

export type CheckboxGroupProps = React.ComponentProps<typeof CheckboxGroupPrimitive> & {
    horizontal?: boolean;
};

export const CheckboxGroup = ({ 
    children, 
    className,
    horizontal = false,
    ...props 
}: CheckboxGroupProps) => {
    return (
        <CheckboxGroupPrimitive className={classNames(
                            "flex space-y-3 space-x-6", 
                            horizontal ? "flex-row" : "flex-col",
                            className)} {...props}>
            {children}
        </CheckboxGroupPrimitive>
    );
};
