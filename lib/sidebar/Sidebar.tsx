import { useCallback, useId, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from "react"
import { Drawer } from "~/drawer"
import { MotionProvider, type MotionProps } from "~/motion"
import { createSidebarHandle, SidebarContext, type SidebarHandle, type SidebarState } from "./SidebarContext"

/**
 * Responsive navigation provider: persistent desktop sidebar and left mobile Drawer.
 * Supplies behavior without owning navigation, routing, persistence, or shell markup.
 *
 * @component
 * @category Layout
 * @accessibility Names the panel and releases mobile modality when switching to desktop
 * @since 0.4.1
 * @related SidebarContent - Desktop panel and mobile Drawer presentation
 * @related SidebarTrigger - Context-based or detached responsive control
 * @param label - Accessible name for the desktop panel and mobile Drawer
 * @param desktopMediaQuery - Desktop breakpoint; defaults to (min-width: 768px)
 * @param collapsed - Controlled desktop collapse state, independent of mobile open state
 * @param open - Controlled mobile Drawer state; clear it when onOpenChange requests closure
 * @param handle - Stable handle created with createSidebarHandle for detached triggers
 * @param collapsePosition - Desktop control placement: header (consumer trigger), edge, or bottom; defaults to header
 */
export type SidebarProps = MotionProps & {
    children?: React.ReactNode
    label: string
    collapsePosition?: "header" | "edge" | "bottom"
    handle?: SidebarHandle
    desktopMediaQuery?: string
    collapsed?: boolean
    defaultCollapsed?: boolean
    onCollapsedChange?: (collapsed: boolean) => void
    open?: boolean
    defaultOpen?: boolean
    onOpenChange?: (open: boolean) => void
}

const serverDesktop = () => false

export const Sidebar = ({
    label, handle, collapsePosition = "header", desktopMediaQuery = "(min-width: 768px)",
    collapsed: controlledCollapsed, defaultCollapsed = false, onCollapsedChange,
    open: controlledOpen, defaultOpen = false, onOpenChange, nomotion, children,
}: SidebarProps) => {
    const [internalHandle] = useState(createSidebarHandle)
    const activeHandle = handle ?? internalHandle
    const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)
    const [internalOpen, setInternalOpen] = useState(defaultOpen)
    const collapsed = controlledCollapsed ?? internalCollapsed
    const open = controlledOpen ?? internalOpen
    const contentId = useId()
    const drawerId = useId()
    const desktopRef = useRef<HTMLElement | null>(null)
    const popupRef = useRef<HTMLDivElement | null>(null)
    const breakpointFocusRef = useRef(false)
    const previousDesktop = useRef(false)
    const owner = useRef({})

    const subscribe = useCallback((notify: () => void) => {
        const media = window.matchMedia(desktopMediaQuery)
        const update = () => {
            if (media.matches) {
                breakpointFocusRef.current = popupRef.current?.contains(document.activeElement) ?? false
            }
            notify()
        }
        media.addEventListener("change", update)
        return () => media.removeEventListener("change", update)
    }, [desktopMediaQuery])
    const getDesktop = useCallback(() => window.matchMedia(desktopMediaQuery).matches, [desktopMediaQuery])
    const desktop = useSyncExternalStore(subscribe, getDesktop, serverDesktop)

    const setCollapsed = useCallback((next: boolean) => {
        if (next === collapsed) return
        if (controlledCollapsed === undefined) setInternalCollapsed(next)
        onCollapsedChange?.(next)
    }, [collapsed, controlledCollapsed, onCollapsedChange])
    const setOpen = useCallback((next: boolean) => {
        if (next === open) return
        if (controlledOpen === undefined) setInternalOpen(next)
        onOpenChange?.(next)
    }, [open, controlledOpen, onOpenChange])

    useLayoutEffect(() => {
        if (desktop && !previousDesktop.current && open) setOpen(false)
        previousDesktop.current = desktop
    }, [desktop, open, setOpen])

    const state = useMemo<SidebarState>(() => ({
        label, desktop, collapsed, collapsePosition, open: !desktop && open,
        contentId, drawerId, drawerHandle: activeHandle.drawerHandle,
        desktopRef, popupRef, breakpointFocusRef, setCollapsed, setOpen,
    }), [label, desktop, collapsed, collapsePosition, open, contentId, drawerId, activeHandle, setCollapsed, setOpen])

    useLayoutEffect(() => {
        const token = owner.current
        activeHandle.attach(token)
        return () => activeHandle.detach(token)
    }, [activeHandle])
    useLayoutEffect(() => { activeHandle.publish(state) }, [activeHandle, state])

    return (
        <MotionProvider nomotion={nomotion}>
            <SidebarContext.Provider value={state}>
                <Drawer
                    handle={activeHandle.drawerHandle}
                    side="left"
                    open={state.open}
                    onOpenChange={setOpen}
                    nomotion={nomotion}
                >
                    {children}
                </Drawer>
            </SidebarContext.Provider>
        </MotionProvider>
    )
}
