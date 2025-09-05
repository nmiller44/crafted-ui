import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui-components/react";
import { classNames } from "~/utils";

export type CheckboxGroupProps = React.ComponentProps<typeof CheckboxGroupPrimitive>;

export const CheckboxGroup = ({ 
    children, 
    className, 
    ...props 
}: CheckboxGroupProps) => {
    return (
        <CheckboxGroupPrimitive className={classNames(
                            "flex flex-col space-y-3 space-x-6", 
                            className)} {...props}>
            {children}
        </CheckboxGroupPrimitive>
    );
};
