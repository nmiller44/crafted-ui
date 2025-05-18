import { Fieldset as FieldsetPrimitive } from "@base-ui-components/react"
import { Heading5 } from "~/heading";
import { classNames } from "~/utils";

export type FieldsetLegendProps = React.ComponentProps<typeof FieldsetPrimitive.Legend> & {
    title?: string;
    subtitle?: string;
}

export const FieldsetLegend = ({ title, subtitle, className, children, ...props }: FieldsetLegendProps) => {

    return (
        <FieldsetPrimitive.Legend 
            className={classNames(
                        "space-y-1.5",
                        "col-span-full",
                        className)} {...props}>
            { !!title && <Heading5 title={ title } subtitle={ subtitle } /> }
            { children }
        </FieldsetPrimitive.Legend>
    )
}