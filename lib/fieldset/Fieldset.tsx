import { Fieldset as FieldsetPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";
import { FieldsetLegend } from "./FieldsetLegend";

export type FieldsetProps = React.ComponentProps<typeof FieldsetPrimitive.Root> & {
    title?: string;
    subtitle?: string;
    grid?: boolean;
}

export const Fieldset = ({ title, subtitle, grid = false, className, children, ...props }: FieldsetProps) => {

    return (
        <FieldsetPrimitive.Root 
            className={classNames(
                        grid ? "grid grid-cols-12 gap-x-6 gap-y-8" : "flex flex-col space-y-8", 
                        className
                    )} {...props}>
            { !!title && <FieldsetLegend title={ title } subtitle={ subtitle } /> }
            { children }
        </FieldsetPrimitive.Root>
    )
}