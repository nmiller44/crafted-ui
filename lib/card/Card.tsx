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
 * @param body - Wraps children in a CardBody and supplies standard Card padding. Takes precedence over slim
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
    const cardPadding = body
        ? full
            ? "p-0 md:py-10 md:pb-6"
            : "py-10 pb-6"
        : slim
            ? full ? title ? "md:py-10 md:pb-6" : "p-0 md:p-4" : title ? "py-10 pb-6" : "p-4"
            : title ? full ? "md:py-10 md:pb-6" : "py-10 pb-6" : undefined;
    const contentPadding = body
        ? full ? "md:px-8" : "px-8"
        : title ? slim ? full ? "p-0 md:px-4" : "px-4" : undefined : undefined;

    return (
        <div className={classNames( 
                                "flex flex-col",
                                "space-y-6",
                                "bg-card text-card-foreground",
                                full    ? "md:rounded-md md:border md:border-border md:shadow-lg"
                                        : "rounded-md border border-border shadow-lg",
                                cardPadding,
                                className)} { ...props }>
            { !!title &&
                <CardHeader title={ title } subtitle={ subtitle } />
            }
            { body || slim
                                ? <CardBody className={contentPadding}>
                    { children }
                  </CardBody>
                : children
            }
        </div>
    )
}