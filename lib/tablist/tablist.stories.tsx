import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tablist } from './Tablist';
import { TablistItem } from './TablistItem';

const meta = {
  title: 'CraftedUI/Components/Tablist',
  component: Tablist,
} satisfies Meta<typeof Tablist>;

export default meta;
type Story = StoryObj<typeof Tablist>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-12 px-4 py-2">
            <Tablist bordered>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
        </div>
        <div className="flex flex-col space-y-12 px-4 py-2 group bg-background">
            <Tablist bordered>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
        </div>
        <div className="flex flex-col space-y-12 px-4 py-2">
            <Tablist>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
        </div>
        <div className="flex flex-col space-y-12 px-4 py-2 group bg-background">
            <Tablist>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
        </div>
        <div className="flex flex-col space-y-12 px-4 py-2 group bg-primary">
            <Tablist>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
        </div>
        <div className="flex flex-col space-y-12 px-4 py-2 group bg-foreground">
            <Tablist>
                <TablistItem><div className="active">Tab 1</div></TablistItem>
                <TablistItem><a href="#">Tab 2</a></TablistItem>
                <TablistItem><a href="#">Tab 3</a></TablistItem>
            </Tablist>
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
          TablistItem supports stretched links: placing a single <code className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground text-xs">&lt;a&gt;</code> tag 
          as a child makes the entire tab item clickable. This is commonly used for navigation lists.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm font-medium text-foreground mb-2">Example Usage:</div>
          <pre className="p-4 rounded-md bg-muted text-sm overflow-x-auto">
{`<Tablist>
  <TablistItem>
    <a href="/overview">Overview</a>
  </TablistItem>
  <TablistItem>
    <a href="/features" className="active">Features</a>
  </TablistItem>
  <TablistItem>
    <a href="/docs">Documentation</a>
  </TablistItem>
</Tablist>`}
          </pre>
        </div>

        <div>
          <div className="text-sm font-medium text-foreground mb-2">Visual Reference:</div>
          <div className="max-w-md">
            <Tablist bordered>
              <TablistItem>
                <a href="#" onClick={(e) => e.preventDefault()}>Overview</a>
              </TablistItem>
              <TablistItem>
                <a href="#" onClick={(e) => e.preventDefault()} className="active">Features</a>
              </TablistItem>
              <TablistItem>
                <a href="#" onClick={(e) => e.preventDefault()}>Documentation</a>
              </TablistItem>
              <TablistItem>
                <a href="#" onClick={(e) => e.preventDefault()}>API</a>
              </TablistItem>
            </Tablist>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-md bg-muted/30 border border-border">
        <p className="text-xs text-muted-foreground">
          <strong>Note:</strong> The link's clickable area automatically expands to cover the entire tab item. 
          Use this pattern for tab-based navigation. Only use one link per tab item.
        </p>
      </div>
    </div>
  )
};
