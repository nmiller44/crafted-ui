import { classNames } from "~/utils";

/**
 * Text or icon positioned inside a Field's input, such as a currency symbol or unit.
 *
 * Renders inside the input and ignores pointer events, so it never blocks typing or focus.
 *
 * @component
 * @category Forms
 * @since 0.1.0
 * @related Field - Provides the positioning context for the inset
 * @see {@link https://crafted-ui.com/docs/forms/field}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-forms-field}
 *
 * @param text - Rendered as muted text. When omitted, children are rendered instead
 * @param position - Side of the input to sit on (defaults to "right")
 */
export type FieldInsetProps = React.ComponentProps<"div"> & {
    text?: string;
    position?: "left" | "right";
}

export const FieldInset = ({ text, position = "right", className, children, ...props }: FieldInsetProps) => {

    return (
        <div className={classNames(                    
                            "pointer-events-none absolute top-[1.75rem] h-[2.5rem] flex items-center",
                            position === "left" ? "left-0 pl-3 inset-left" : "right-0 pr-3 inset-right", 
                            className
                        )} { ...props }>
            { !!text
                ? <span className="text-muted-foreground text-sm">{ text }</span>
                : children
            }
        </div>
    )
}
