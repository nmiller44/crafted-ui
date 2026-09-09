import { Fieldset as FieldsetPrimitive } from "@base-ui/react"
import { Heading5 } from "~/heading";
import { classNames } from "~/utils";

/**
 * Legend for a Fieldset, naming the group of fields it contains.
 *
 * Fieldset renders this automatically when given a title. Compose it directly when the legend
 * needs custom content.
 *
 * @component
 * @category Forms
 * @accessibility Renders a semantic legend element, naming the group for screen readers
 * @since 0.1.0
 * @related Fieldset - Renders FieldsetLegend automatically when title is provided
 * @related Heading5 - Renders the title and subtitle
 * @see {@link https://crafted-ui.com/docs/forms/fieldset}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-fieldset}
 *
 * @param title - Rendered with Heading5, followed by any children
 * @param subtitle - Secondary text below the title, requires title
 */
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