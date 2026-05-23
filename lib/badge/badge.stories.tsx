import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta = {
  title: 'CraftedUI/Components/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12">
        <div className="max-w-sm flex flex-wrap gap-3">
            <Badge>Default</Badge>
            <Badge title="Outline" outline />
            <Badge title="Blank" />
            <Badge title="Blank" outline />
            <Badge title="Primary" clr="primary" />
            <Badge title="Primary" clr="primary" outline />
            <Badge title="Muted" clr="muted" />
            <Badge title="Muted" clr="muted" outline />
            <Badge title="Secondary" clr="secondary" />
            <Badge title="Secondary" clr="secondary" outline />
            <Badge title="Accent" clr="accent" />
            <Badge title="Accent" clr="accent" outline />
            <Badge title="Destructive" clr="destructive" />
            <Badge title="Destructive" clr="destructive" outline />
            <Badge title="Danger" clr="danger" />
            <Badge title="Danger" clr="danger" outline />
            <Badge title="Warning" clr="warning" />
            <Badge title="Warning" clr="warning" outline />
            <Badge title="Success" clr="success" />
            <Badge title="Success" clr="success" outline />
            <Badge title="Info" clr="info" />
            <Badge title="Info" clr="info" outline />
        </div>
        <div className="max-w-sm flex flex-wrap gap-3">
            <Badge title="Green" clr="green" />
            <Badge title="Green Outline" clr="green" outline />
            <Badge title="Red" clr="red" />
            <Badge title="Red Outline" clr="red" outline />
            <Badge title="Yellow" clr="yellow" />
            <Badge title="Yellow Outline" clr="yellow" outline />
            <Badge title="Blue" clr="blue" />
            <Badge title="Blue Outline" clr="blue" outline />
            <Badge title="Purple" clr="purple" />
            <Badge title="Purple Outline" clr="purple" outline />
        </div>
    </div>
  )
};

export const WithLinks: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Stretched Links</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Badge supports stretched links: placing a single <code className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground text-xs">&lt;a&gt;</code> tag 
          as a child makes the entire badge clickable. This is useful for clickable tags and filter chips.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm font-medium text-foreground mb-2">Example Usage:</div>
          <pre className="p-4 rounded-md bg-muted text-sm overflow-x-auto">
{`<Badge clr="primary">
  <a href="/filter/ipa">IPA</a>
</Badge>

<Badge clr="green" outline>
  <a href="/status/available">Available</a>
</Badge>`}
          </pre>
        </div>

        <div>
          <div className="text-sm font-medium text-foreground mb-2">Visual Reference:</div>
          <div className="flex flex-wrap gap-3">
            <Badge clr="primary">
              <a href="#" onClick={(e) => e.preventDefault()}>IPA</a>
            </Badge>
            <Badge clr="blue">
              <a href="#" onClick={(e) => e.preventDefault()}>Stout</a>
            </Badge>
            <Badge clr="green">
              <a href="#" onClick={(e) => e.preventDefault()}>Lager</a>
            </Badge>
            <Badge clr="purple" outline>
              <a href="#" onClick={(e) => e.preventDefault()}>Sour</a>
            </Badge>
            <Badge clr="yellow" outline>
              <a href="#" onClick={(e) => e.preventDefault()}>Citrus</a>
            </Badge>
            <Badge clr="red">
              <a href="#" onClick={(e) => e.preventDefault()}>Sold Out</a>
            </Badge>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-md bg-muted/30 border border-border">
        <p className="text-xs text-muted-foreground">
          <strong>Note:</strong> The link's clickable area automatically expands to cover the entire badge. 
          Use this pattern for filter tags, status indicators, and category navigation. Only use one link per badge.
        </p>
      </div>
    </div>
  )
};
