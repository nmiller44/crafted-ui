import { classNames } from "~/utils";

/**
 * Main content region of a Card. Applies the standard padding, grows to fill the available
 * height, and spaces its children vertically.
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
                            "px-8 py-10 grow", 
                            "space-y-6",
                            className
                    )} { ...props }>
            { children }
        </div>
    )
}