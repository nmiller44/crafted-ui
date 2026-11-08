import { createContext, useContext, useSyncExternalStore, type RefObject } from "react"
import { createDrawerHandle } from "~/drawer"

export type SidebarState = {
    label: string
    desktop: boolean
    collapsed: boolean
    collapsePosition: "header" | "edge" | "bottom"
    open: boolean
    contentId: string
    drawerId: string
    drawerHandle: ReturnType<typeof createDrawerHandle>
    desktopRef: RefObject<HTMLElement | null>
    popupRef: RefObject<HTMLDivElement | null>
    breakpointFocusRef: RefObject<boolean>
    setCollapsed: (collapsed: boolean) => void
    setOpen: (open: boolean) => void
}

class SidebarHandleStore {
    readonly drawerHandle = createDrawerHandle()
    private state: SidebarState | null = null
    private listeners = new Set<() => void>()
    private owner: object | null = null

    getSnapshot = () => this.state
    getServerSnapshot = () => null
    subscribe = (listener: () => void) => {
        this.listeners.add(listener)
        return () => { this.listeners.delete(listener) }
    }
    attach(owner: object) {
        if (this.owner && this.owner !== owner) {
            throw new Error("A Sidebar handle can only be attached to one Sidebar.")
        }
        this.owner = owner
    }
    publish(state: SidebarState | null) {
        this.state = state
        this.listeners.forEach((listener) => listener())
    }
    detach(owner: object) {
        if (this.owner === owner) {
            this.owner = null
            this.publish(null)
        }
    }
}

/**
 * Shared connection between a Sidebar and triggers outside its provider.
 * Create once with createSidebarHandle; attach to only one Sidebar.
 */
export type SidebarHandle = SidebarHandleStore

export const createSidebarHandle = (): SidebarHandle => new SidebarHandleStore()

export const SidebarContext = createContext<SidebarState | null>(null)
export const SidebarCollapsedContext = createContext(false)
export const useSidebarCollapsed = () => useContext(SidebarCollapsedContext)

const emptySubscribe = () => () => {}
const emptySnapshot = () => null

export const useSidebarState = (handle?: SidebarHandle) => {
    const context = useContext(SidebarContext)
    const detached = useSyncExternalStore(
        handle?.subscribe ?? emptySubscribe,
        handle?.getSnapshot ?? emptySnapshot,
        handle?.getServerSnapshot ?? emptySnapshot
    )
    if (!handle && !context) {
        throw new Error("Sidebar components require a Sidebar provider or a Sidebar handle.")
    }
    return handle ? detached : context
}
