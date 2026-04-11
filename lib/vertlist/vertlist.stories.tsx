import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Vertlist } from './Vertlist';
import { VertlistHeader } from './VertlistHeader';
import { VertlistItem } from './VertlistItem';
import { Heading4 } from '../heading/Heading4';

const meta = {
  title: 'CraftedUI/Components/Vertlist',
  component: Vertlist,
} satisfies Meta<typeof Vertlist>;

export default meta;
type Story = StoryObj<typeof Vertlist>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12">
        <div className="flex flex-col space-y-2">
          <Heading4 title="Sizes" />   
          <div className="flex space-x-8 items-center">
            <Vertlist {...args} className="w-sidebar">
                <VertlistHeader>Header</VertlistHeader>
                <VertlistItem><a href="#">Link 1</a></VertlistItem>
                <VertlistItem><a href="#" className="active">Link 2</a></VertlistItem>
                <VertlistItem>Item 3</VertlistItem>
                <VertlistItem><a href="#">Link 4</a></VertlistItem>
            </Vertlist>

            <Vertlist {...args} className="w-sidebar group bg-background">
            <VertlistHeader>Header</VertlistHeader>
                <VertlistItem><a href="#">Link 1</a></VertlistItem>
                <VertlistItem><a href="#" className="active">Link 2</a></VertlistItem>
                <VertlistItem>Item 3</VertlistItem>
                <VertlistItem><a href="#">Link 4</a></VertlistItem>
            </Vertlist>
          </div>       
        </div>

        <div className="flex flex-col space-y-2">
          <Heading4 title="Custom Styling" />   
          <div className="flex space-x-8 items-center">  
          </div>       
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
          VertlistItem and VertlistHeader support stretched links: placing a single <code className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground text-xs">&lt;a&gt;</code> tag 
          as a child makes the entire list item clickable. This is commonly used for sidebar navigation and menus.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <div className="text-sm font-medium text-foreground mb-2">Example Usage:</div>
          <pre className="p-4 rounded-md bg-muted text-sm overflow-x-auto">
{`<Vertlist>
  <VertlistHeader>
    <a href="/overview">Getting Started</a>
  </VertlistHeader>
  <VertlistItem>
    <a href="/installation">Installation</a>
  </VertlistItem>
  <VertlistItem>
    <a href="/usage" className="active">Usage</a>
  </VertlistItem>
  <VertlistItem>
    <a href="/examples">Examples</a>
  </VertlistItem>
</Vertlist>`}
          </pre>
        </div>

        <div>
          <div className="text-sm font-medium text-foreground mb-2">Visual Reference:</div>
          <div className="w-sidebar">
            <Vertlist>
              <VertlistHeader>
                <a href="#" onClick={(e) => e.preventDefault()}>Getting Started</a>
              </VertlistHeader>
              <VertlistItem>
                <a href="#" onClick={(e) => e.preventDefault()}>Installation</a>
              </VertlistItem>
              <VertlistItem>
                <a href="#" onClick={(e) => e.preventDefault()} className="active">Usage</a>
              </VertlistItem>
              <VertlistItem>
                <a href="#" onClick={(e) => e.preventDefault()}>Examples</a>
              </VertlistItem>
            </Vertlist>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-md bg-muted/30 border border-border">
        <p className="text-xs text-muted-foreground">
          <strong>Note:</strong> The link's clickable area automatically expands to cover the entire list item. 
          Use this pattern for sidebar navigation and vertical menus. Only use one link per list item.
        </p>
      </div>
    </div>
  )
};
