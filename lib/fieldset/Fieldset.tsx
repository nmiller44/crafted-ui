import { Fieldset as FieldsetPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";
import { FieldsetLegend } from "./FieldsetLegend";

export type FieldsetProps = React.ComponentProps<typeof FieldsetPrimitive.Root> & {
    title?: string;
    subtitle?: string;
}

export const Fieldset = ({ title, subtitle, className, children, ...props }: FieldsetProps) => {

    return (
        <FieldsetPrimitive.Root className={classNames("space-y-8", className)} {...props}>
            { !!title && <FieldsetLegend title={ title } subtitle={ subtitle } /> }
            { children }
        </FieldsetPrimitive.Root>
    )
}