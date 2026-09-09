import { Field as FieldPrimitive } from "@base-ui/react"
import { classNames } from "~/utils";

/**
 * Label for a form input within a Field.
 *
 * Field renders this automatically when given a label prop. Compose it directly when the label
 * needs custom content such as an icon or badge.
 *
 * @component
 * @category Forms
 * @accessibility Associates the label with its input via Base UI, so clicking it focuses the control
 * @since 0.1.0
 * @related Field - Renders FieldLabel automatically when label is provided
 * @see {@link https://crafted-ui.com/docs/forms/field}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-field}
 */
export type FieldLabelProps = React.ComponentProps<typeof FieldPrimitive.Label>

export const FieldLabel = ({ className, children, ...props }: FieldLabelProps) => {

    return (
        <FieldPrimitive.Label className={classNames(
                                            "flex items-center gap-x-1.5",
                                            "pb-1 text-sm font-medium text-foreground", 
                                            className
                                        )} {...props}>
            { children }
        </FieldPrimitive.Label>
    )
}