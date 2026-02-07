import { classNames } from "~/utils";

/**
 * FieldsetButtons component for form action buttons.
 * CRITICAL: Always use FieldsetButtons for form buttons instead of custom div wrappers. Must be placed inside a Fieldset component.
 * 
 * @component
 * @category Forms
 * @accessibility Provides proper layout and spacing for form action buttons
 * @since 0.1.0
 * @related Fieldset - Parent component that should contain FieldsetButtons
 * @related Button - Typical children for form actions (Submit, Cancel, etc.)
 * @see {@link https://crafted-ui.com/docs/forms/fieldsetbuttons}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-fieldsetbuttons}
 */
export type FieldsetButtonsProps = React.ComponentProps<"div"> & {
    align?: 'left' | 'center' | 'right';  
}

/**
 * @param align - Alignment of action buttons (defaults to 'right')
 */
export const FieldsetButtons = ({ 
        align = 'right', 
        className, 
        children, 
        ...props 
    }: FieldsetButtonsProps) => {

    return (
        <div className={classNames(
                            "flex space-x-4",
                            align === 'right' ? "justify-end" : align === 'center' ? "justify-center" : "justify-start",
                            "col-span-full",
                            className
                        )} { ...props }>
            { children}
        </div> 
    )
};