import { classNames } from "~/utils";
import { IconChevronRight } from "~/icons";

/**
 * Visual separator between breadcrumb items with multiple built-in styles.
 * 
 * @component
 * @category Layout
 * @accessibility Hidden from screen readers with aria-hidden="true"
 * @since 0.2.6
 * @see {@link https://crafted-ui.com/docs/layout/breadcrumb}
 * @see {@link https://storybook.crafted-ui.com/?path=/story/craftedui-layout-breadcrumb}
 * 
 * @param type - Separator style: "chevron" (default), "slash", or "dot"
 * @param children - Custom separator content overrides type prop
 */
export type BreadcrumbSeparatorProps = React.ComponentProps<"span"> & {
    type?: "chevron" | "slash" | "dot";
};

export const BreadcrumbSeparator = ({
    type = "chevron",
    className,
    children,
    ...props
}: BreadcrumbSeparatorProps) => {
    const content = {
        chevron: <IconChevronRight className="size-3 relative top-[0.125rem]" />,
        slash: <span>/</span>,
        dot: <span>•</span>,
    };

    return (
        <span
            className={classNames("text-muted-foreground inline-flex items-baseline", className)}
            aria-hidden="true"
            {...props}
        >
            {children || content[type]}
        </span>
    );
};
