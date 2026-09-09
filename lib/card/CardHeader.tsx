import { Heading5 } from "~/heading/Heading5";
import { classNames } from "~/utils";

/**
 * Bordered header region for a Card, displaying a title and optional subtitle.
 *
 * Card renders this automatically when given a title. Compose it directly when the header needs
 * custom content, which is rendered from children only when title is omitted.
 *
 * @component
 * @category Components
 * @since 0.1.0
 * @related Card - Renders CardHeader automatically when title is provided
 * @related Heading5 - Renders the title and subtitle
 * @see {@link https://crafted-ui.com/docs/components/card}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-components-card}
 *
 * @param title - Rendered with Heading5. When omitted, children are rendered instead
 * @param subtitle - Secondary text below the title, requires title
 */
export type CardHeaderProps = React.ComponentProps<"div"> & {
    title?: string;
    subtitle?: string;
}

export const CardHeader = ({ title, subtitle, className, children, ...props }: CardHeaderProps) => {

    return (
        <div className={classNames(
                            "px-8 py-6 border-b border-border",
                            className)} { ...props }>
            { !!title 
                ? <Heading5 title={ title } subtitle={ subtitle } />
                : children 
            }
        </div>
    )
}