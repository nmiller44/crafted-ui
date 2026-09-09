import { classNames } from "~/utils";

/**
 * Bordered footer region for a Card, used for actions or supporting metadata.
 *
 * @component
 * @category Components
 * @since 0.1.0
 * @related Card - Parent container
 * @related CardBody - Sits above the footer and grows to push it to the bottom
 * @see {@link https://crafted-ui.com/docs/components/card}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-components-card}
 */
export type CardFooterProps = React.ComponentProps<"div">

export const CardFooter = ({ className, children, ...props }: CardFooterProps) => {

    return (
        <div className={classNames(
                        "px-8 py-6 border-t border-border",
                        "text-foreground",
                        className)} { ...props }>
            { children }
        </div>
    )
}