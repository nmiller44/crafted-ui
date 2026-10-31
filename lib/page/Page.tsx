import { PageHeader } from "./PageHeader";
import { classNames } from "~/utils";

/**
 * Route-level content with 48px between direct content children, increasing to
 * 64px from the md breakpoint. The gap after a direct-child PageHeader is
 * reduced to 32px / 48px, whether generated from props or composed manually.
 * The parent layout owns the main landmark, container width, and window padding.
 * Classes and HTML attributes apply to the root div, including the header.
 *
 * @component
 * @category Layout
 * @since 0.4.0
 * @related PageHeader - Rendered when either title or subtitle is provided
 * @see {@link https://crafted-ui.com/docs/layout/page}
 */
export type PageProps = React.ComponentProps<"div"> & {
    title?: string,
    subtitle?: string,
}

export const Page = ({ title, subtitle, className, children, ...props }: PageProps) => {

    return (
        <div className={ classNames(
            "w-full space-y-12 md:space-y-16",
            "[&>[data-slot=page-header]:not(:last-child)]:[margin-block-end:calc(var(--spacing)*8)]",
            "md:[&>[data-slot=page-header]:not(:last-child)]:[margin-block-end:calc(var(--spacing)*12)]",
            className
        ) } { ...props }>
            { (title || subtitle) &&
                <PageHeader
                    title={ title }
                    subtitle={ subtitle }
                />
            }
            { children }
        </div>
    )
}
