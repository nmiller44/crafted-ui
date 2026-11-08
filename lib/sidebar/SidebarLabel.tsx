import { useNomotion } from "~/motion"
import { classNames } from "~/utils"
import { useSidebarCollapsed } from "./SidebarContext"

/**
 * Fades navigation text out of the desktop rail while retaining its accessible name.
 * Fills the remaining link width on one line and shrinks to zero width when collapsed.
 *
 * @component
 * @category Layout
 * @accessibility Collapsed text remains available to assistive technology
 * @since 0.4.1
 */
export type SidebarLabelProps = React.ComponentProps<"span">

export const SidebarLabel = ({ className, ...props }: SidebarLabelProps) => {
    const collapsed = useSidebarCollapsed()
    const nomotion = useNomotion()
    return (
        <span
            {...props}
            data-sidebar-label=""
            className={classNames(
                "min-w-0 flex-1 overflow-hidden whitespace-nowrap",
                // Collapse delays flex-grow until the rail is nearly closed; expand restores it at once. Either way the centered icon does not drift.
                !nomotion && (collapsed
                    ? "[transition:opacity_150ms_ease-out,flex-grow_60ms_ease-out_90ms]"
                    : "[transition:opacity_150ms_ease-out]"),
                "motion-reduce:transition-none",
                collapsed && "grow-0 opacity-0",
                className
            )}
        />
    )
}
