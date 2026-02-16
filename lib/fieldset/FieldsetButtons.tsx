import { classNames } from "~/utils";

/**
 * Action button container for Fieldset with automatic spacing and alignment.
 * CRITICAL: Always place inside a Fieldset component for proper layout.
 * 
 * @component
 * @category Forms
 * @accessibility Proper layout and spacing for keyboard and touch navigation
 * @since 0.1.0
 * @related Fieldset - Parent component that contains these buttons
 * @see {@link https://crafted-ui.com/docs/forms/fieldset}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-fieldset}
 * 
 * @param align - Button alignment (defaults to "right")
 */
export type FieldsetButtonsProps = React.ComponentProps<"div"> & {
    align?: 'left' | 'center' | 'right';  
}

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