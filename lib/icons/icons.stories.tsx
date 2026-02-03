import type { Meta, StoryObj } from "@storybook/react";
import {
  IconArrowLeft,
  IconArrowRight,
  IconBeer,
  IconCalendar,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconCopy,
  IconLocation,
  IconMenu,
  IconMinus,
  IconPencil,
  IconPlus,
  IconSearch,
  IconShare,
  IconTrash,
  IconX,
} from "./index";

const meta = {
  title: "CraftedUI/Icons",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const icons = [
  { name: "IconArrowLeft", Component: IconArrowLeft },
  { name: "IconArrowRight", Component: IconArrowRight },
  { name: "IconBeer", Component: IconBeer },
  { name: "IconCalendar", Component: IconCalendar },
  { name: "IconCheck", Component: IconCheck },
  { name: "IconChevronDown", Component: IconChevronDown },
  { name: "IconChevronLeft", Component: IconChevronLeft },
  { name: "IconChevronRight", Component: IconChevronRight },
  { name: "IconChevronUp", Component: IconChevronUp },
  { name: "IconCopy", Component: IconCopy },
  { name: "IconLocation", Component: IconLocation },
  { name: "IconMenu", Component: IconMenu },
  { name: "IconMinus", Component: IconMinus },
  { name: "IconPencil", Component: IconPencil },
  { name: "IconPlus", Component: IconPlus },
  { name: "IconSearch", Component: IconSearch },
  { name: "IconShare", Component: IconShare },
  { name: "IconTrash", Component: IconTrash },
  { name: "IconX", Component: IconX },
];

export const AllIcons: Story = {
  render: () => (
    <div className="max-w-2xl">
      <div className="grid grid-cols-3 gap-4 gap-y-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {icons.map(({ name, Component }) => (
          <div key={name} className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center size-12 border rounded-lg bg-card">
              <Component className="size-6" />
            </div>
            <span className="text-xs text-muted-foreground text-center">{name}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};


export const Customize: Story = {
  render: () => (
    <div className="space-y-8 max-w-lg">
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold">Sizes</h3>
        <div className="flex flex-wrap gap-6 items-end">
          <IconBeer className="size-4" />
          <IconBeer className="size-6" />
          <IconBeer className="size-8" />
          <IconBeer className="size-12" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold">Colors</h3>
        <div className="flex flex-wrap gap-6 items-end">
          <IconBeer className="size-8 text-primary" />
          <IconBeer className="size-8 text-secondary" />
          <IconBeer className="size-8 text-destructive" />
          <IconBeer className="size-8 text-muted-foreground" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold">With Custom Stroke/Fill</h3>
        <div className="flex flex-wrap gap-6 items-end">
          <IconBeer className="size-8" style={{ stroke: '#F59E42', fill: '#FDE68A' }} />
          <IconBeer className="size-8" style={{ stroke: '#92400E', fill: '#FBBF24' }} />
        </div>
      </div>
    </div>
  ),
};

export const Feature: Story = {
  render: () => (
    <div className="space-y-8 max-w-2xl">
      <div className="flex items-center gap-3 p-4 border rounded-lg bg-card">
        <IconBeer className="size-8 text-primary" />
        <span className="font-bold text-lg">Brewmaster Rewards</span>
        <span className="ml-auto flex items-center gap-1 text-muted-foreground">
          <IconCalendar className="size-4" />
          Next event: Feb 15
        </span>
      </div>
      <div className="flex items-center gap-3 p-4 border rounded-lg bg-card">
        <IconBeer className="size-6 text-secondary" />
        <span>Try our new Hazy IPA!</span>
        <IconShare className="size-4 ml-auto text-muted-foreground cursor-pointer" />
      </div>
      <div className="flex items-center gap-3 p-4 border rounded-lg bg-card">
        <IconBeer className="size-6 text-destructive" />
        <span>Low stock: Oktoberfest Märzen</span>
        <IconX className="size-4 ml-auto text-muted-foreground cursor-pointer" />
      </div>
      <div className="flex items-center gap-3 p-4 border rounded-lg bg-card">
        <IconBeer className="size-6 text-primary" />
        <span>Location: Taproom</span>
        <IconLocation className="size-4 ml-auto text-muted-foreground" />
      </div>
    </div>
  ),
};
