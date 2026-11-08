import { DrawerContent, type DrawerContentProps } from "~/drawer"
import { MotionProvider, motionClasses, useNomotion } from "~/motion"
import { classNames } from "~/utils"
import { SidebarCollapsedContext, useSidebarState } from "./SidebarContext"
import { SidebarTrigger } from "./SidebarTrigger"

/**
 * Wraps consumer navigation in a persistent desktop panel and a left mobile Drawer.
 * Customize --sidebar-width and --sidebar-collapsed-width on this component.
 *
 * @component
 * @category Layout
 * @accessibility Preserves Drawer focus management; desktop panel is a breakpoint focus fallback
 * @since 0.4.1
 * @param drawerProps - Mobile DrawerContent overrides, including focus and body styling
 * @param className - Shared panel classes; defaults to the sidebar width token and a 3.5rem rail
 */
export type SidebarContentProps = Omit<React.ComponentProps<"aside">, "id" | "ref"> & {
    drawerProps?: Omit<DrawerContentProps, "children" | "id" | "ref">
}

export const SidebarContent = ({ className, children, drawerProps, ...props }: SidebarContentProps) => {
    const state = useSidebarState()
    const nomotion = useNomotion()
    if (!state) throw new Error("SidebarContent requires a Sidebar provider.")

    const { finalFocus, className: drawerClassName, ...mobileProps } = drawerProps ?? {}
    const width = "w-[var(--sidebar-width,var(--container-sidebar))]"
    return (
        <>
            {state.desktop && (
                <SidebarCollapsedContext.Provider value={state.collapsed}>
                    <aside
                        {...props}
                        id={state.contentId}
                        ref={state.desktopRef}
                        aria-label={props["aria-label"] ?? state.label}
                        tabIndex={props.tabIndex ?? -1}
                        data-collapsed={state.collapsed ? "" : undefined}
                        className={classNames(
                            "relative flex min-h-0 shrink-0 flex-col border-r border-border bg-background text-foreground",
                            state.collapsed ? "w-[var(--sidebar-collapsed-width,3.5rem)]" : width,
                            motionClasses(nomotion, "transition-[width]"),
                            className
                        )}
                    >
                        <div className={classNames(
                            "flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto",
                            // SidebarLabel fills expanded links and animates to zero width. Expanded rows use safe centering so
                            // newly mounted extras cannot push the icon left; the rail centers icons wider than the row.
                            state.collapsed
                                ? "[&_li>:is(a,button):has([data-sidebar-label])]:justify-center"
                                : "[&_li>:is(a,button):has([data-sidebar-label])]:[justify-content:safe_center]",
                            nomotion
                                ? "[&_li>:is(a,button)]:transition-none"
                                : "[&_li>:is(a,button)]:transition-[gap] [&_li>:is(a,button)]:duration-150 [&_li>:is(a,button)]:ease-out motion-reduce:[&_li>:is(a,button)]:transition-none",
                            state.collapsed && "[&_li>:is(a,button)]:gap-0"
                        )}>
                            {children}
                        </div>
                        {state.collapsePosition === "edge" && (
                            <SidebarTrigger
                                title={state.collapsed ? "Expand sidebar" : "Collapse sidebar"}
                                className="absolute -right-3 top-6 z-10 h-8 w-6 rounded-md border border-border bg-background p-0 text-muted-foreground shadow-xs hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring [&_svg]:size-3"
                            />
                        )}
                        {state.collapsePosition === "bottom" && (
                            <div className="mt-2 shrink-0 border-t border-border pt-2">
                                {/* Positioned from the panel edge on the rail's center line so it stays put while the width animates. */}
                                <SidebarTrigger
                                    title={state.collapsed ? "Expand sidebar" : "Collapse sidebar"}
                                    className="absolute left-[calc(var(--sidebar-collapsed-width,3.5rem)/2-1rem)] size-8 text-muted-foreground hover:text-foreground"
                                />
                                <div className="h-8" />
                            </div>
                        )}
                    </aside>
                </SidebarCollapsedContext.Provider>
            )}
            <SidebarCollapsedContext.Provider value={false}>
                <MotionProvider nomotion={state.desktop ? true : nomotion}>
                    <DrawerContent
                        aria-label={state.label}
                        style={props.style}
                        contentClassName="gap-4 p-3"
                        bodyClassName="flex flex-col space-y-0"
                        {...mobileProps}
                        id={state.drawerId}
                        ref={state.popupRef}
                        className={(popupState) => classNames(
                            width, className,
                            typeof drawerClassName === "function" ? drawerClassName(popupState) : drawerClassName
                        )}
                        finalFocus={(interaction) => {
                            if (state.desktop) {
                                return state.breakpointFocusRef.current ? state.desktopRef.current : false
                            }
                            return typeof finalFocus === "function" ? finalFocus(interaction)
                                : typeof finalFocus === "object" ? finalFocus.current : finalFocus ?? true
                        }}
                    >
                        {children}
                    </DrawerContent>
                </MotionProvider>
            </SidebarCollapsedContext.Provider>
        </>
    )
}
