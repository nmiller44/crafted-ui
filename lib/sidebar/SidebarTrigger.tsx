import { isValidElement } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react"
import { Button } from "~/button"
import { DrawerTrigger } from "~/drawer"
import { IconChevronLeft, IconChevronRight, IconMenu } from "~/icons"
import { classNames } from "~/utils"
import { useSidebarState, type SidebarHandle } from "./SidebarContext"

/**
 * Collapses the desktop sidebar or opens its mobile Drawer.
 * A child button or render prop supplies custom presentation without losing behavior.
 *
 * @component
 * @category Layout
 * @accessibility Supplies action labels, expanded state, and the controlled panel ID
 * @since 0.4.1
 * @param handle - Required only outside the Sidebar provider
 * @param expandLabel - Overrides the desktop expand action name for localization
 * @param collapseLabel - Overrides the desktop collapse action name for localization
 * @param openLabel - Overrides the mobile open action name for localization
 * @param mobileOnly - Hides a header hamburger on desktop when the panel provides its own collapse control
 */
export type SidebarTriggerProps = Omit<React.ComponentProps<typeof ButtonPrimitive>, "ref"> & {
    ref?: React.Ref<HTMLButtonElement>
    handle?: SidebarHandle
    expandLabel?: string
    collapseLabel?: string
    openLabel?: string
    mobileOnly?: boolean
}

export const SidebarTrigger = ({
    handle, expandLabel, collapseLabel, openLabel, mobileOnly = false,
    render, children, className, onClick, disabled, ...props
}: SidebarTriggerProps) => {
    const state = useSidebarState(handle)
    const desktop = state?.desktop ?? false
    if (mobileOnly && desktop) return null
    const label = desktop
        ? state?.collapsed ? expandLabel ?? "Expand sidebar" : collapseLabel ?? "Collapse sidebar"
        : openLabel ?? `Open ${state?.label ?? "sidebar"}`
    const icon = desktop
        ? state?.collapsed ? <IconChevronRight aria-hidden="true" /> : <IconChevronLeft aria-hidden="true" />
        : <IconMenu aria-hidden="true" />
    const childRender = isValidElement(children) ? children : undefined
    const buttonRender = render ?? childRender ?? <Button ghost className="size-10 shrink-0" />
    const content = childRender ? null : children ?? icon
    const sharedProps = {
        ...props,
        disabled: disabled || !state,
        "aria-label": props["aria-label"] ?? label,
        "aria-expanded": desktop ? !state?.collapsed : state?.open ?? false,
        "aria-controls": desktop ? state?.contentId : state?.drawerId,
    }

    if (!desktop) {
        return (
            <DrawerTrigger
                {...sharedProps}
                handle={handle?.drawerHandle ?? state?.drawerHandle}
                render={buttonRender}
                onClick={onClick}
                className={className}
            >
                {content}
            </DrawerTrigger>
        )
    }

    return (
        <ButtonPrimitive
            {...sharedProps}
            render={buttonRender}
            className={(buttonState) => classNames(typeof className === "function" ? className(buttonState) : className)}
            onClick={(event) => {
                onClick?.(event)
                if (!event.defaultPrevented) state?.setCollapsed(!state.collapsed)
            }}
        >
            {content}
        </ButtonPrimitive>
    )
}
