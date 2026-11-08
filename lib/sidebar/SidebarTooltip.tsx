import { Tooltip as TooltipPrimitive } from "@base-ui/react"
import { motionClasses, useNomotion } from "~/motion"
import { classNames } from "~/utils"
import { useSidebarCollapsed } from "./SidebarContext"

/**
 * Adds a collapsed hover/focus label to the actual consumer-supplied navigation link.
 * Supply the anchor or router link through render; retain its accessible text with SidebarLabel.
 *
 * @component
 * @category Layout
 * @accessibility Uses Base UI hoverable, Escape-dismissible tooltips without an interactive wrapper
 * @since 0.4.1
 * @param label - Required destination label, also applied as the trigger's accessible name
 * @param render - Actual link element or Base UI render function; must forward props and ref
 * @param tooltipClassName - Classes for the portaled label, separate from trigger classes
 */
export type SidebarTooltipProps = Omit<React.ComponentProps<typeof TooltipPrimitive.Trigger>, "render" | "handle" | "payload"> & {
    label: string
    render: NonNullable<React.ComponentProps<typeof TooltipPrimitive.Trigger>["render"]>
    tooltipClassName?: string
}

export const SidebarTooltip = ({ label, tooltipClassName, ...props }: SidebarTooltipProps) => {
    const collapsed = useSidebarCollapsed()
    const nomotion = useNomotion()
    return (
        <TooltipPrimitive.Root disabled={!collapsed}>
            <TooltipPrimitive.Trigger {...props} aria-label={props["aria-label"] ?? label} />
            <TooltipPrimitive.Portal>
                <TooltipPrimitive.Positioner side="right" sideOffset={12} className="z-50">
                    <TooltipPrimitive.Popup className={classNames(
                        "rounded-md border border-border bg-popover px-3 py-2 text-sm text-popover-foreground shadow-md",
                        motionClasses(nomotion, "transition-opacity data-[starting-style]:opacity-0 data-[ending-style]:opacity-0"),
                        tooltipClassName
                    )}>
                        {label}
                    </TooltipPrimitive.Popup>
                </TooltipPrimitive.Positioner>
            </TooltipPrimitive.Portal>
        </TooltipPrimitive.Root>
    )
}
