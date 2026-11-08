import { useSidebarCollapsed } from "./SidebarContext"

/**
 * Removes expanded-only content, such as decorative badges, from the desktop rail.
 * Do not wrap controls or text required for an accessible name.
 *
 * @component
 * @category Layout
 * @since 0.4.1
 */
export type SidebarExpandedProps = { children?: React.ReactNode }

export const SidebarExpanded = ({ children }: SidebarExpandedProps) => {
    const collapsed = useSidebarCollapsed()
    return collapsed ? null : children
}
