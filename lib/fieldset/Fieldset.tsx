import { Fieldset as FieldsetPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";
import { FieldsetLegend } from "./FieldsetLegend";

/**
 * Groups related Fields within a Form with optional legend and grid layout.
 * CRITICAL: Always wrap 2+ Fields in a Fieldset for proper layout, spacing, and semantic grouping.
 * 
 * @component
 * @category Forms
 * @accessibility Uses semantic fieldset/legend elements for screen reader grouping
 * @since 0.1.0
 * @related FieldsetButtons - Form action buttons (place inside Fieldset)
 * @related Field - Individual form fields wrapped by Fieldset
 * @see {@link https://crafted-ui.com/docs/forms/fieldset}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-fieldset}
 * 
 * @param grid - Enables responsive 12-column grid layout. Use Tailwind col-span-* classes on child Fields
 */
export type FieldsetProps = React.ComponentProps<typeof FieldsetPrimitive.Root> & {
    title?: string;
    subtitle?: string;
    grid?: boolean;
}


export const Fieldset = ({ title, subtitle, grid = false, className, children, ...props }: FieldsetProps) => {

    return (
        <FieldsetPrimitive.Root 
            className={classNames(
                        grid ? "grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-x-6 gap-y-8" : "flex flex-col space-y-8", 
                        className
                    )} {...props}>
            { !!title && <FieldsetLegend title={ title } subtitle={ subtitle } /> }
            { children }
        </FieldsetPrimitive.Root>
    )
}