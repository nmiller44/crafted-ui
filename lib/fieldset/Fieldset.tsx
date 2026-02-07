import { Fieldset as FieldsetPrimitive } from "@base-ui-components/react"
import { classNames } from "~/utils";
import { FieldsetLegend } from "./FieldsetLegend";

/**
 * Fieldset component for grouping related Fields within a Form.
 * CRITICAL: Always wrap 2+ Fields in a Fieldset for proper layout, spacing, and semantic grouping. Provides responsive grid layout when needed.
 * 
 * @component
 * @category Forms
 * @accessibility Uses semantic fieldset/legend elements for screen reader grouping
 * @since 0.1.0
 * @related FieldsetButtons - Use FieldsetButtons for form action buttons (place inside Fieldset)
 * @related Field - Individual form fields that should be wrapped by Fieldset
 * @related Form - Fieldset should be within a Form for submission handling
 * @see {@link https://crafted-ui.com/docs/forms/fieldset}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-fieldset}
 */
export type FieldsetProps = React.ComponentProps<typeof FieldsetPrimitive.Root> & {
    title?: string;
    subtitle?: string;
    grid?: boolean;
}

/**
 * @param title - Legend title for the fieldset group
 * @param subtitle - Optional subtitle below the title
 * @param grid - Enables responsive 12-column grid layout (2 cols mobile, 6 cols tablet, 12 cols desktop). Use Tailwind col-span-* classes on child Fields for responsive sizing (defaults to false)
 * @remarks When grid=false, uses flex-col with space-y-8 for vertical stacking. When grid=true, child components must use Tailwind grid column utilities (e.g., col-span-full, col-span-6, col-span-3).
 */
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