import { useContext } from "react"
import { Drawer as DrawerPrimitive } from "@base-ui/react"
import { Button } from "~/button"
import { IconX } from "~/icons"
import { classNames } from "~/utils"
import { DrawerSideContext } from "./DrawerContext"
import { DrawerClose } from "./DrawerClose"
import { DrawerTitle } from "./DrawerTitle"
import { DrawerDescription } from "./DrawerDescription"
import { motionClasses, useNomotion } from "~/motion"

/**
 * Styled drawer with a portal, backdrop, optional heading, and default close control.
 * @component
 * @category Components
 * @accessibility Requires a title or an explicit accessible name
 * @since 0.3.2
 * @param size - Width for side panels or height for top/bottom panels; defaults to md
 * @param hideClose - Removes the default close control; provide another dismissal control
 * @param contentClassName - Additional classes for the padded content wrapper
 * @param bodyClassName - Additional classes for the scrollable body
 */
export type DrawerContentProps = React.ComponentProps<typeof DrawerPrimitive.Popup> & {
    subtitle?: string
    size?: "sm" | "md" | "lg" | "xl"
    hideClose?: boolean
    contentClassName?: string
    bodyClassName?: string
} & (
    | { title: string }
    | { title?: string; "aria-label": string }
    | { title?: string; "aria-labelledby": string }
)

const sideClasses = {
    left: "h-full max-w-[calc(100vw-3rem)] rounded-r-md border-r [transform:translateX(var(--drawer-swipe-movement-x,0px))] data-[starting-style]:[transform:translateX(-100%)] data-[ending-style]:[transform:translateX(-100%)]",
    right: "h-full max-w-[calc(100vw-3rem)] rounded-l-md border-l [transform:translateX(var(--drawer-swipe-movement-x,0px))] data-[starting-style]:[transform:translateX(100%)] data-[ending-style]:[transform:translateX(100%)]",
    top: "w-full max-h-[calc(100dvh-3rem)] rounded-b-md border-b [transform:translateY(var(--drawer-swipe-movement-y,0px))] data-[starting-style]:[transform:translateY(-100%)] data-[ending-style]:[transform:translateY(-100%)]",
    bottom: "w-full max-h-[calc(100dvh-3rem)] rounded-t-md border-t [transform:translateY(var(--drawer-swipe-movement-y,0px))] data-[starting-style]:[transform:translateY(100%)] data-[ending-style]:[transform:translateY(100%)]",
}

const viewportClasses = {
    left: "justify-start",
    right: "justify-end",
    top: "items-start",
    bottom: "items-end",
}

const widthClasses = { sm: "w-96", md: "w-[32rem]", lg: "w-[40rem]", xl: "w-[48rem]" }
const heightClasses = { sm: "h-96", md: "h-[32rem]", lg: "h-[40rem]", xl: "h-[48rem]" }

export const DrawerContent = ({ title, subtitle, size = "md", hideClose = false, className, contentClassName, bodyClassName, children, ...props }: DrawerContentProps) => {
    const side = useContext(DrawerSideContext)
    const nomotion = useNomotion()
    const horizontal = side === "left" || side === "right"

    return (
        <DrawerPrimitive.Portal>
            <DrawerPrimitive.Backdrop className={classNames(
                "fixed inset-0 bg-black/20 dark:bg-black/70 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
                motionClasses(nomotion, "transition-opacity")
            )} />
            <DrawerPrimitive.Viewport className={classNames("fixed inset-0 flex h-dvh", viewportClasses[side])}>
                <DrawerPrimitive.Popup {...props} className={(state) => classNames(
                    "relative flex min-h-0 min-w-0 flex-col border-border bg-card text-card-foreground shadow-md outline-none",
                    sideClasses[side],
                    horizontal ? widthClasses[size] : heightClasses[size],
                    typeof className === "function" ? className(state) : className,
                    motionClasses(nomotion, "transition-transform data-[swiping]:transition-none")
                )}>
                    <DrawerPrimitive.Content className={classNames("flex min-h-0 flex-1 flex-col gap-8 p-6", contentClassName)}>
                        {(title || subtitle || !hideClose) && (
                            <div className="flex shrink-0 items-start justify-between gap-4">
                                <div className="min-w-0 space-y-1.5 break-words">
                                    {title && <DrawerTitle title={title} />}
                                    {subtitle && <DrawerDescription>{subtitle}</DrawerDescription>}
                                </div>
                                {!hideClose && (
                                    <DrawerClose>
                                        <Button clr="blank" ghost aria-label="Close drawer" title="Close drawer" className="size-8 shrink-0 focus-visible:ring-2 focus-visible:ring-ring">
                                            <IconX aria-hidden="true" />
                                        </Button>
                                    </DrawerClose>
                                )}
                            </div>
                        )}
                        <div className={classNames("min-h-0 flex-1 space-y-8 overflow-y-auto", bodyClassName)}>{children}</div>
                    </DrawerPrimitive.Content>
                </DrawerPrimitive.Popup>
            </DrawerPrimitive.Viewport>
        </DrawerPrimitive.Portal>
    )
}