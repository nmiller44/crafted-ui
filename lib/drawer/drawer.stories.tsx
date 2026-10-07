import { useId, useState } from "react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Drawer, createDrawerHandle } from "./Drawer"
import { DrawerContent } from "./DrawerContent"
import { DrawerTrigger } from "./DrawerTrigger"
import { DrawerClose } from "./DrawerClose"
import { DrawerTitle } from "./DrawerTitle"
import type { DrawerSide } from "./DrawerContext"
import { Button } from "../button/Button"
import { Avatar } from "../avatar/Avatar"
import { Badge } from "../badge/Badge"
import { Heading4 } from "../heading/Heading4"
import { IconBeer } from "../icons/IconBeer"
import { IconBuilding } from "../icons/IconBuilding"
import { IconCalendar } from "../icons/IconCalendar"
import { IconDownload } from "../icons/IconDownload"
import { IconLocation } from "../icons/IconLocation"
import { IconMenu } from "../icons/IconMenu"
import { IconSearch } from "../icons/IconSearch"
import { IconShare } from "../icons/IconShare"
import { IconX } from "../icons/IconX"
import { Vertlist } from "../vertlist/Vertlist"
import { VertlistHeader } from "../vertlist/VertlistHeader"
import { VertlistItem } from "../vertlist/VertlistItem"

const meta = {
    title: "CraftedUI/Components/Drawer",
    component: Drawer,
} satisfies Meta<typeof Drawer>

export default meta
type Story = StoryObj<typeof Drawer>

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

const HelmetNavigation = () => {
    const titleId = useId()
    const [handle] = useState(() => createDrawerHandle())
    const [open, setOpen] = useState(false)
    const [brandVisible, setBrandVisible] = useState(false)
    const [currentPage, setCurrentPage] = useState("Dashboard")

    const handleOpenChange = (nextOpen: boolean) => {
        setOpen(nextOpen)
        if (nextOpen) {
            setBrandVisible(true)
        } else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setBrandVisible(false)
        }
    }

    return (
        <div className="min-h-[40rem] bg-muted/30">
            <header className="flex items-center gap-3 border-b border-border bg-background px-3 py-3">
                <DrawerTrigger handle={handle}>
                    <Button ghost aria-label="Open Helmet navigation" title="Open Helmet navigation" className="size-10 shrink-0">
                        <IconMenu aria-hidden="true" />
                    </Button>
                </DrawerTrigger>
                <HelmetBrand />
            </header>
            {brandVisible && (
                <div aria-hidden="true" className="pointer-events-none fixed left-16 top-3 z-[100] flex h-10 items-center">
                    <HelmetBrand />
                </div>
            )}
            <Drawer handle={handle} side="left" open={open} onOpenChange={handleOpenChange}>
                <DrawerContent
                    aria-labelledby={titleId}
                    hideClose
                    size="sm"
                    contentClassName="gap-0 p-0"
                    bodyClassName="flex flex-col space-y-0 overflow-hidden"
                    onTransitionEnd={(event) => {
                        if (!open && event.target === event.currentTarget && event.propertyName === "transform") {
                            setBrandVisible(false)
                        }
                    }}
                >
                    <header className="flex shrink-0 items-center gap-3 border-b border-border px-3 py-3">
                        <DrawerClose>
                            <Button ghost aria-label="Close Helmet navigation" title="Close Helmet navigation" className="size-10 shrink-0">
                                <IconX aria-hidden="true" />
                            </Button>
                        </DrawerClose>
                        <DrawerTitle id={titleId} className="sr-only">Helmet navigation</DrawerTitle>
                    </header>
                    <nav aria-label="Helmet" className="flex min-h-0 flex-1 flex-col overflow-y-auto p-3">
                        <div className="grow space-y-6">
                            {navigationGroups.map((group, groupIndex) => (
                                <Vertlist key={group.title ?? groupIndex} className="group bg-background">
                                    {group.title && <VertlistHeader>{group.title}</VertlistHeader>}
                                    {group.items.map(({ page, icon: Icon, ...item }) => (
                                        <VertlistItem key={page}>
                                            <a
                                                href={`#${page.toLowerCase()}`}
                                                aria-current={currentPage === page ? "page" : undefined}
                                                className={`flex items-center gap-2${currentPage === page ? " active" : ""}`}
                                                onClick={(event) => {
                                                    event.preventDefault()
                                                    setCurrentPage(page)
                                                    handleOpenChange(false)
                                                }}
                                            >
                                                <Icon className="size-4 shrink-0" aria-hidden="true" />
                                                {page}
                                                {"count" in item && <Badge clr={page === "Accounts" ? "warning" : "primary"} pill className="ml-auto">{item.count}</Badge>}
                                            </a>
                                        </VertlistItem>
                                    ))}
                                </Vertlist>
                            ))}
                        </div>
                        <div className="mt-6 border-t border-border pt-3">
                            <Vertlist className="group bg-background">
                                <VertlistItem>
                                    <a href="#profile" className="flex items-center gap-2" onClick={(event) => {
                                        event.preventDefault()
                                        setCurrentPage("Profile")
                                        handleOpenChange(false)
                                    }}>
                                        <Avatar size="sm" fallback="RH" className="size-7 shrink-0 text-xs" />
                                        <span className="flex flex-col leading-tight">
                                            <span className="font-medium">Ramona Hops</span>
                                            <span className="text-xs text-muted-foreground">Head Brewer</span>
                                        </span>
                                    </a>
                                </VertlistItem>
                            </Vertlist>
                        </div>
                    </nav>
                </DrawerContent>
            </Drawer>
            <main className="p-8"><Heading4 title={currentPage} /></main>
        </div>
    )
}

export const Feature: Story = {
    parameters: { layout: "fullscreen" },
    render: () => <HelmetNavigation />,
}

export const Basic: Story = {
    render: (args) => (
        <div className="flex flex-wrap gap-4">
            <Drawer {...args}>
                <DrawerTrigger><Button>Right drawer</Button></DrawerTrigger>
                <DrawerContent title="Brew details" subtitle="Hazy Trail IPA">
                    <p className="text-sm">A citrus-forward IPA brewed with Citra and Mosaic hops.</p>
                    <DrawerClose><Button outline>Done</Button></DrawerClose>
                </DrawerContent>
            </Drawer>
            {(["left", "top", "bottom"] satisfies DrawerSide[]).map((side) => (
                <Drawer {...args} side={side} key={side}>
                    <DrawerTrigger><Button className="capitalize">{side} drawer</Button></DrawerTrigger>
                    <DrawerContent title="Tasting notes" size="sm">
                        <p className="text-sm">Orange zest, tropical fruit, and a soft malt finish.</p>
                    </DrawerContent>
                </Drawer>
            ))}
            <Drawer {...args}>
                <DrawerTrigger><Button>Titleless drawer</Button></DrawerTrigger>
                <DrawerContent aria-label="Brewery navigation" size="sm">
                    <nav aria-label="Brewery">
                        <Vertlist>
                            <VertlistItem><a href="#brews">Brews</a></VertlistItem>
                            <VertlistItem><a href="#taprooms">Taprooms</a></VertlistItem>
                        </Vertlist>
                    </nav>
                </DrawerContent>
            </Drawer>
        </div>
    ),
}

const DetachedBrewDrawer = () => {
    const [handle] = useState(() => createDrawerHandle())

    return (
        <div className="space-y-4">
            <DrawerTrigger handle={handle}>
                <Button>Open brew details</Button>
            </DrawerTrigger>
            <Drawer handle={handle}>
                <DrawerContent title="Hazy Trail IPA" subtitle="Seasonal release">
                    <p className="text-sm">Dry-hopped with Citra and Mosaic. ABV 6.5%.</p>
                    <DrawerClose><Button outline>Close details</Button></DrawerClose>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export const NoMotion: Story = {
    name: "No Motion",
    args: { nomotion: true },
    render: (args) => (
        <Drawer {...args} nomotion>
            <DrawerTrigger><Button>Open Brew Details</Button></DrawerTrigger>
            <DrawerContent title="Hazy Trail IPA" subtitle="Seasonal release">
                <p className="text-sm">Dry-hopped with Citra and Mosaic. ABV 6.5%.</p>
                <DrawerClose><Button outline>Done</Button></DrawerClose>
            </DrawerContent>
        </Drawer>
    ),
}

export const DetachedTrigger: Story = {
    render: () => <DetachedBrewDrawer />,
}