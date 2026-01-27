import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { IconCalendar, IconShare } from '../icons';

const meta = {
  title: 'CraftedUI/Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-6 grow">
      <div className="max-w-3xl p-8 bg-card border border-border rounded-lg">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-foreground">Barrel-Aged Stout Tasting</h3>
              <span className="px-2 py-1 text-xs font-medium text-success bg-success/10 border border-success/20 rounded">Available</span>
            </div>
            <p className="text-muted-foreground">Join us for an exclusive tasting of our limited barrel-aged collection featuring rare bourbon and whiskey barrel releases.</p>
          </div>
          <Button clr="secondary" ghost aria-label="Share event">
            <IconShare />
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 mb-6 border-y border-border">
          <div>
            <div className="text-sm text-muted-foreground">Date</div>
            <div className="text-sm font-medium text-foreground">January 15, 2026</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Time</div>
            <div className="text-sm font-medium text-foreground">7:00 PM - 10:00 PM</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Price</div>
            <div className="text-sm font-medium text-foreground">$45 per person</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <Button clr="primary">Reserve Your Spot</Button>
          <Button clr="primary" outline>
            <IconCalendar /> Add to Calendar
          </Button>
          <Button clr="secondary" outline>View Full Details</Button>
          <div className="flex-1"></div>
          <Button clr="muted" ghost disabled aria-label="Add to favorites">
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12">
        <div className="max-w-sm flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button outline>Outline</Button>
            <Button clr="blank">Blank</Button>
            <Button clr="blank" outline>Outline Blank</Button>
            <Button clr="primary">Primary</Button>
            <Button clr="primary" outline>Outline Primary</Button>
            <Button clr="dark">Dark</Button>
            <Button clr="dark" outline>Outline Dark</Button>
            <Button clr="muted">Muted</Button>
            <Button clr="muted" outline>Outline Muted</Button>
            <Button clr="secondary">Secondary</Button>
            <Button clr="secondary" outline>Outline Secondary</Button>
            <Button clr="accent">Accent</Button>
            <Button clr="accent" outline>Outline Accent</Button>
            <Button clr="destructive">Destructive</Button>
            <Button clr="destructive" outline>Outline Destructive</Button>
        </div>
        <div className="max-w-sm flex flex-wrap gap-3">
            <Button clr="green">Green</Button>
            <Button clr="green" outline>Outline Green</Button>
            <Button clr="red">Red</Button>
            <Button clr="red" outline>Outline Red</Button>
            <Button clr="yellow">Yellow</Button>
            <Button clr="yellow" outline>Outline Yellow</Button>
            <Button clr="blue">Blue</Button>
            <Button clr="blue" outline>Outline Blue</Button>
            <Button clr="purple">Purple</Button>
            <Button clr="purple" outline>Outline Purple</Button>
        </div>
    </div>
  )
};

export const Ghost: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12">
        <div className="max-w-sm flex flex-wrap gap-3 items-center">
            <Button ghost>Default</Button>
            <Button clr="primary" ghost>Primary</Button>
            <Button clr="secondary" ghost>Secondary</Button>
            <Button clr="accent" ghost>Accent</Button>
            <Button clr="destructive" ghost>Destructive</Button>
            <Button clr="muted" ghost>Muted</Button>
        </div>
        <div className="max-w-sm flex flex-wrap gap-3 items-center">
            <Button clr="green" ghost>Green</Button>
            <Button clr="red" ghost>Red</Button>
            <Button clr="blue" ghost>Blue</Button>
            <Button clr="purple" ghost>Purple</Button>
        </div>
        <div className="max-w-sm flex flex-wrap gap-3 items-center">
            <Button clr="destructive" ghost aria-label="Close">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
            <Button clr="primary" ghost aria-label="Add">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </Button>
            <Button clr="accent" ghost aria-label="Edit">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </Button>
        </div>
    </div>
  )
};

export const Focus: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-8">
      <div className="text-sm text-muted-foreground mb-4">
        Use Tab key to navigate between buttons and see focus states. Click buttons to see focus behavior.
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Standard Buttons (with focus ring)</h4>
        <div className="max-w-lg flex flex-wrap gap-3">
          <Button clr="primary" autoFocus>Primary Focused</Button>
          <Button clr="secondary">Secondary</Button>
          <Button clr="accent">Accent</Button>
          <Button clr="destructive">Destructive</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Outline Buttons (with focus ring)</h4>
        <div className="max-w-lg flex flex-wrap gap-3">
          <Button clr="primary" outline>Primary</Button>
          <Button clr="secondary" outline>Secondary</Button>
          <Button clr="accent" outline>Accent</Button>
          <Button clr="destructive" outline>Destructive</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Ghost Buttons (subtle background on focus)</h4>
        <div className="max-w-lg flex flex-wrap gap-3 items-center">
          <Button clr="primary" ghost>Primary</Button>
          <Button clr="secondary" ghost>Secondary</Button>
          <Button clr="accent" ghost>Accent</Button>
          <Button clr="destructive" ghost>Destructive</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Ghost Icon Buttons (background visible on focus)</h4>
        <div className="max-w-lg flex flex-wrap gap-3 items-center">
          <Button clr="primary" ghost aria-label="Calendar">
            <IconCalendar />
          </Button>
          <Button clr="secondary" ghost aria-label="Share">
            <IconShare />
          </Button>
          <Button clr="accent" ghost aria-label="Edit">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </Button>
          <Button clr="destructive" ghost aria-label="Close">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Comparing Focus Styles</h4>
        <div className="max-w-lg flex flex-wrap gap-3 items-center">
          <Button clr="primary">Standard</Button>
          <Button clr="primary" outline>Outline</Button>
          <Button clr="primary" ghost>Ghost</Button>
        </div>
      </div>
    </div>
  )
};

export const Disabled: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-8">
      <div className="text-sm text-muted-foreground mb-4">
        Disabled buttons have reduced opacity and cannot be interacted with.
      </div>
      
      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Standard Buttons</h4>
        <div className="max-w-lg flex flex-wrap gap-3">
          <Button clr="primary" disabled>Primary</Button>
          <Button clr="secondary" disabled>Secondary</Button>
          <Button clr="accent" disabled>Accent</Button>
          <Button clr="destructive" disabled>Destructive</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Outline Buttons</h4>
        <div className="max-w-lg flex flex-wrap gap-3">
          <Button clr="primary" outline disabled>Primary</Button>
          <Button clr="secondary" outline disabled>Secondary</Button>
          <Button clr="accent" outline disabled>Accent</Button>
          <Button clr="destructive" outline disabled>Destructive</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">Ghost Buttons</h4>
        <div className="max-w-lg flex flex-wrap gap-3 items-center">
          <Button clr="primary" ghost disabled>Primary</Button>
          <Button clr="secondary" ghost disabled>Secondary</Button>
          <Button clr="accent" ghost disabled>Accent</Button>
          <Button clr="destructive" ghost disabled>Destructive</Button>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-foreground">With Icons</h4>
        <div className="max-w-lg flex flex-wrap gap-3 items-center">
          <Button clr="primary" disabled>
            <IconCalendar /> Schedule Event
          </Button>
          <Button clr="secondary" outline disabled aria-label="Share">
            <IconShare />
          </Button>
          <Button clr="accent" ghost disabled aria-label="Calendar">
            <IconCalendar />
          </Button>
        </div>
      </div>
    </div>
  )
};
