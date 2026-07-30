import { classNames } from "~/utils";

/**
 * Lightweight circular loading spinner for asynchronous states.
 * Designed to be inline-friendly with minimal built-in layout styling.
 *
 * @component
 * @category Components
 * @accessibility Uses status role with polite live region updates and screen-reader label text
 * @since 0.2.9
 *
 * @param size - Spinner size variant (defaults to "md")
 * @param clr - Semantic color variant or inherited current color (defaults to "current")
 * @param label - Screen-reader loading text (defaults to "Loading")
 */
export type LoaderProps = React.ComponentProps<"span"> & {
    size?: "xs" | "sm" | "md" | "lg";
    clr?: "current" | "foreground" | "primary" | "muted" | "secondary" | "accent" | "destructive" | "danger" | "warning" | "success" | "info";
    label?: string;
}

export const Loader = ({ size = "md", clr = "current", label = "Loading", className, ...props }: LoaderProps) => {

    const sizeStyle = {
        xs: "size-3 border-[1.5px]",
        sm: "size-4 border-2",
        md: "size-5 border-2",
        lg: "size-6 border-[3px]",
    };

    const colorStyle = {
        current: "text-current",
        foreground: "text-foreground",
        primary: "text-primary",
        muted: "text-muted-foreground",
        secondary: "text-secondary",
        accent: "text-accent",
        destructive: "text-destructive",
        danger: "text-danger",
        warning: "text-warning",
        success: "text-success",
        info: "text-info",
    };

    return (
        <span
            role="status"
            aria-live="polite"
            className={classNames(
                "inline-block shrink-0 rounded-full animate-spin",
                "border-current border-r-transparent",
                sizeStyle[size],
                colorStyle[clr],
                className
            )}
            {...props}
        >
            <span className="sr-only">{label}</span>
        </span>
    );
};
