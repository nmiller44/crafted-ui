import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Sidebar } from "./Sidebar"
import { SidebarContent } from "./SidebarContent"
import { SidebarTrigger } from "./SidebarTrigger"
import { SidebarLabel } from "./SidebarLabel"
import { SidebarExpanded } from "./SidebarExpanded"
import { SidebarTooltip } from "./SidebarTooltip"
import { createSidebarHandle, useSidebarState } from "./SidebarContext"
import { Avatar } from "~/avatar"
import { Badge } from "~/badge"
import { Heading4 } from "~/heading"
import {
    IconBeer, IconBuilding, IconCalendar, IconDownload,
    IconLocation, IconSearch, IconShare,
} from "~/icons"
import { Vertlist, VertlistHeader, VertlistItem } from "~/vertlist"

const meta = {
    title: "CraftedUI/Components/Sidebar",
    component: Sidebar,
    args: { label: "Helmet navigation" },
    argTypes: {
        collapsePosition: { control: "select", options: ["header", "edge", "bottom"] },
    },
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

const HelmetBrand = () => (
    <span className="flex items-center gap-2 text-base font-semibold text-foreground">
        <svg className="h-7 w-10 shrink-0 text-primary" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M9.98578 4.11462L0 14C1.99734 15.9773 4.27899 17.6437 6.76664 18.9474C7.45424 20.753 8.53203 22.4463 10 23.8995C15.5229 29.3668 24.4772 29.3668 30 23.8995C31.468 22.4463 32.5458 20.753 33.2334 18.9473C35.721 17.6437 38.0027 15.9773 40 14L30.0223 4.12266C30.0149 4.11527 30.0075 4.10788 30 4.1005C24.4772 -1.36683 15.5229 -1.36683 10 4.1005C9.99527 4.10521 9.99052 4.10991 9.98578 4.11462ZM29.0445 20.7309C26.1345 21.7031 23.0797 22.201 20 22.201C16.9203 22.201 13.8656 21.7031 10.9556 20.7309C11.2709 21.145 11.619 21.5424 12 21.9196C16.4183 26.2935 23.5817 26.2935 28 21.9196C28.381 21.5424 28.7292 21.145 29.0445 20.7309ZM12.2051 5.8824C12.9554 6.37311 13.7532 6.79302 14.588 7.13536C16.3038 7.83892 18.1428 8.20104 20 8.20104C21.8572 8.20104 23.6962 7.83892 25.412 7.13536C26.2468 6.79302 27.0446 6.3731 27.795 5.88238C23.4318 1.77253 16.5682 1.77254 12.2051 5.8824Z" />
        </svg>
        <span>Helmet</span>
    </span>
)

const navigationGroups = [
    {
        title: undefined,
        items: [
            { page: "Dashboard", icon: IconBuilding },
            { page: "Brews", icon: IconBeer, count: 12 },
            { page: "Schedule", icon: IconCalendar },
        ],
    },
    {
        title: "Distribution",
        items: [
            { page: "Taprooms", icon: IconLocation },
            { page: "Accounts", icon: IconShare, count: 3 },
            { page: "Reports", icon: IconDownload },
        ],
    },
    {
        title: "Workspace",
        items: [
            { page: "Search", icon: IconSearch },
            { page: "Settings", icon: IconBuilding },
        ],
    },
]

const HelmetNavigation = ({ currentPage, onNavigate }: {
    currentPage: string
    onNavigate: (page: string) => void
}) => {
    const linkProps = (page: string) => ({
        href: `#${page.toLowerCase()}`,
        "aria-current": currentPage === page ? "page" as const : undefined,
        className: `flex items-center gap-2${currentPage === page ? " active" : ""}`,
        onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault()
            onNavigate(page)
        },
    })
    return (
        <nav aria-label="Helmet" className="flex min-h-0 flex-1 flex-col">
            <div className="grow space-y-6">
                {navigationGroups.map((group, groupIndex) => (
                    <Vertlist key={group.title ?? groupIndex} className="group bg-background">
                        {group.title && <VertlistHeader hideWhenCollapsed>{group.title}</VertlistHeader>}
                        {group.items.map(({ page, icon: Icon, ...item }) => (
                            <VertlistItem key={page}>
                                <SidebarTooltip label={page} render={<a {...linkProps(page)} />}>
                                    <Icon className="size-4 shrink-0" aria-hidden="true" />
                                    <SidebarLabel>{page}</SidebarLabel>
                                    {"count" in item && (
                                        <SidebarExpanded>
                                            <Badge clr={page === "Accounts" ? "warning" : "primary"} pill className="ml-auto -my-0.5 text-foreground">
                                                {item.count}
                                            </Badge>
                                        </SidebarExpanded>
                                    )}
                                </SidebarTooltip>
                            </VertlistItem>
                        ))}
                    </Vertlist>
                ))}
            </div>
            <div className="mt-6 border-t border-border pt-2">
                <Vertlist className="group bg-background">
                    <VertlistItem>
                        <SidebarTooltip label="Ramona Hops profile" render={<a {...linkProps("Profile")} />}>
                            <Avatar size="sm" fallback="RH" className="size-7 shrink-0 text-xs" aria-hidden="true" />
                            <SidebarLabel className="flex flex-col leading-tight">
                                <span className="font-medium">Ramona Hops</span>
                                <span className="text-xs text-muted-foreground">Head Brewer</span>
                            </SidebarLabel>
                        </SidebarTooltip>
                    </VertlistItem>
                </Vertlist>
            </div>
        </nav>
    )
}

const HelmetShell = ({ compact = false, ...args }: React.ComponentProps<typeof Sidebar> & { compact?: boolean }) => {
    const [handle] = useState(createSidebarHandle)
    const [open, setOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState("Dashboard")
    return (
        <div className={`flex min-h-0 flex-col bg-muted/30 ${compact ? "h-[40rem]" : "h-dvh"}`}>
            <header className="flex shrink-0 items-center gap-3 border-b border-border bg-background px-2 py-3">
                <SidebarTrigger handle={handle} mobileOnly={args.collapsePosition !== undefined && args.collapsePosition !== "header"} />
                <HelmetBrand />
            </header>
            <Sidebar {...args} handle={handle} open={open} onOpenChange={setOpen}>
                <div className="flex min-h-0 flex-1">
                    <SidebarContent
                        className="px-3 py-2 [--sidebar-width:16rem]"
                        drawerProps={{
                            title: "Helmet navigation",
                            className: "w-80 p-0",
                            contentClassName: "gap-4 p-3",
                        }}
                    >
                        <HelmetNavigation currentPage={currentPage} onNavigate={(page) => {
                            setCurrentPage(page)
                            setOpen(false)
                        }} />
                    </SidebarContent>
                    <main className="min-w-0 flex-1 overflow-y-auto p-8">
                        <Heading4 title={currentPage} />
                        <p className="mt-2 text-sm text-muted-foreground">
                            Manage the brewery with an expanded sidebar, an icon rail, or mobile navigation.
                        </p>
                    </main>
                </div>
            </Sidebar>
        </div>
    )
}

export const Feature: Story = {
    args: { collapsePosition: "edge" },
    parameters: { layout: "fullscreen" },
    render: (args) => <HelmetShell {...args} />,
}

const EmbeddedSidebarHeader = () => {
    const state = useSidebarState()
    return (
        <div className="mb-4 flex min-h-10 shrink-0 items-center justify-center gap-3 border-b border-border pb-3">
            <SidebarExpanded>
                <div className="min-w-0 flex-1">
                    <HelmetBrand />
                </div>
            </SidebarExpanded>
            {state?.desktop && state.collapsePosition === "header" && <SidebarTrigger className="size-8" />}
        </div>
    )
}

const EmbeddedHelmetShell = (args: React.ComponentProps<typeof Sidebar>) => {
    const [open, setOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState("Dashboard")
    return (
        <Sidebar {...args} open={open} onOpenChange={setOpen}>
            <div className="flex h-dvh min-h-0 bg-muted/30">
                <SidebarContent
                    className="px-3 py-2 [--sidebar-width:16rem]"
                    drawerProps={{
                        className: "w-80 p-0",
                        contentClassName: "gap-4 p-3",
                    }}
                >
                    <EmbeddedSidebarHeader />
                    <HelmetNavigation currentPage={currentPage} onNavigate={(page) => {
                        setCurrentPage(page)
                        setOpen(false)
                    }} />
                </SidebarContent>
                <main className="min-w-0 flex-1 overflow-y-auto p-8">
                    <div className="mb-4 flex items-center gap-3">
                        <SidebarTrigger mobileOnly />
                        <Heading4 title={currentPage} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Branding and navigation controls live inside the sidebar, leaving the workspace without a header row.
                    </p>
                </main>
            </div>
        </Sidebar>
    )
}

export const CollapsePosition: Story = {
    render: (args) => (
        <div className="space-y-8">
            {(["edge", "bottom", "header"] as const).map((collapsePosition) => (
                <section key={collapsePosition} className="space-y-2">
                    <h2 className="text-lg font-semibold capitalize">{collapsePosition}</h2>
                    <HelmetShell {...args} label={`Helmet ${collapsePosition} navigation`} collapsePosition={collapsePosition} compact />
                </section>
            ))}
        </div>
    ),
}

export const EmbeddedHeader: Story = {
    parameters: { layout: "fullscreen" },
    render: (args) => <EmbeddedHelmetShell {...args} />,
}
