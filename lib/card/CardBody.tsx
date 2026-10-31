import { classNames } from "~/utils";

/**
 * Main content region of a Card. Grows to fill the available height and spaces its children
 * vertically. Padding is supplied by Card or by the caller when composing regions manually.
 *
 * @component
 * @category Components
 * @since 0.1.0
 * @related Card - Renders CardBody automatically when body or slim is set
 * @see {@link https://crafted-ui.com/docs/components/card}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-components-card}
 */
export type CardBodyProps = React.ComponentProps<"div">

export const CardBody = ({ className, children, ...props }: CardBodyProps) => {

    return (
        <div className={classNames(
                            "flex flex-col", 
                            "grow", 
                            "space-y-8",
                            className
                    )} { ...props }>
            { children }
        </div>
    )
}