import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { CalendarIcon, ShareIcon } from '../icons';

const meta = {
  title: 'CraftedUI/Components/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
      <div className="max-w-2xl p-6 bg-card border border-border rounded-lg">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-1">Barrel-Aged Stout Tasting</h3>
          <p className="text-sm text-muted-foreground">Join us for an exclusive tasting of our limited barrel-aged collection</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button clr="primary">Register</Button>
          <Button clr="primary" outline>Details</Button>
          <Button clr="secondary" outline>
            <CalendarIcon />
          </Button>
          <Button clr="accent" outline>
            <ShareIcon />
          </Button>
          <Button clr="destructive" outline>Cancel</Button>
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
