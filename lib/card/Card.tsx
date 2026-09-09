import { CardBody } from "~/card/CardBody";
import { CardHeader } from "~/card/CardHeader";
import { classNames } from "~/utils";

/**
 * Container for grouping related content, with optional header, body, and footer regions.
 *
 * Compose with CardHeader, CardBody, and CardFooter for full control, or use the body or slim
 * shorthand to wrap children in a single padded region.
 *
 * @component
 * @category Components
 * @since 0.1.0
 * @related CardHeader - Rendered automatically when title is provided
 * @related CardBody - Rendered automatically by the body and slim shorthands
 * @related CardFooter - Bordered region for actions or metadata
 * @see {@link https://crafted-ui.com/docs/components/card}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-components-card}
 *
 * @param title - Renders a CardHeader above the content
 * @param subtitle - Secondary header text, requires title
 * @param body - Wraps children in a CardBody with standard padding. Takes precedence over slim
 * @param slim - Wraps children in a CardBody with reduced padding, suited to compact content such as metrics
 * @param full - Drops the border, shadow, rounded corners, and padding on mobile for an edge-to-edge card
 */
export type CardProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
    body?: boolean;
    slim?: boolean;
    full?: boolean;
}

export const Card = ({ title, subtitle, body = false, slim = false, full = false, className, children, ...props }: CardProps) => {

    return (
        <div className={classNames( 
                                "flex flex-col",
                                "bg-card text-card-foreground",
                                full    ? "md:rounded-md md:border md:border-border md:shadow"
                                        : "rounded-md border border-border shadow",
                                className)} { ...props }>
            { !!title &&
                <CardHeader title={ title } subtitle={ subtitle } />
            }
            { body || slim
                ? <CardBody className={
                            body    ? full ? "p-0 md:px-8 md:py-10" : undefined
                                    : full ? "p-0 md:p-4" : "p-4"
                    }>
                    { children }
                  </CardBody>
                : children
            }
        </div>
    )
}