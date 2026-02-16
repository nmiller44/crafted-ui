import type { Meta, StoryObj } from '@storybook/react';

import { DescList } from './DescList';
import { DescListItem } from './DescListItem';
import { Badge } from '~/badge';

const meta = {
  title: 'CraftedUI/Components/DescList',
  component: DescList,
} satisfies Meta<typeof DescList>;

export default meta;
type Story = StoryObj<typeof DescList>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-3xl">
      <DescList title="Brewery Information" subtitle="Details about the craft brewery" {...args}>
        <DescListItem label="Brewery Name" value="Hoppy Hills Brewing Co." />
        <DescListItem label="Location" value="Portland, Oregon" />
        <DescListItem label="Founded" value="2015" />
        <DescListItem label="Style Focus" value="West Coast IPAs" />
        <DescListItem 
          label="About" 
          value="A small batch brewery focused on traditional West Coast style IPAs with bold hop profiles and clean finishes."
        />
      </DescList>
    </div>
  ),
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-8 max-w-3xl">
      <DescList {...args}>
        <DescListItem label="Beer Name" value="Hazy Sunset IPA" />
        <DescListItem label="Style" value="New England IPA" />
        <DescListItem label="ABV" value="7.2%" />
        <DescListItem label="IBU" value="45" />
      </DescList>

      <DescList title="Product Details" subtitle="Specifications and information" {...args}>
        <DescListItem label="Name" value="Hoppy IPA" />
        <DescListItem label="Category" value="India Pale Ale" />
        <DescListItem label="Type" value="Flagship" />
        <DescListItem label="ABV" value="6.5%" />
        <DescListItem label="IBU" value="65" />
      </DescList>
    </div>
  ),
};

export const CustomContent: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-3xl">
      <DescList title="Beer Status" {...args}>
        <DescListItem label="Status">
          <Badge clr="success">Active</Badge>
        </DescListItem>
        <DescListItem label="Availability">
          <Badge clr="primary">Year-Round</Badge>
        </DescListItem>
        <DescListItem label="Distribution">
          <span className="text-sm">Available in: OR, WA, CA</span>
        </DescListItem>
      </DescList>
    </div>
  ),
};

export const GridLayout: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-3xl">
      <DescList title="Brewery Specifications" {...args}>
        <DescListItem label="Name" value="Cascade Brewing" className="md:col-span-6" />
        <DescListItem label="Type" value="Microbrewery" className="md:col-span-6" />
        <DescListItem label="Founded" value="2015" className="md:col-span-4" />
        <DescListItem label="Capacity" value="5000 BBL/year" className="md:col-span-4" />
        <DescListItem label="Taproom" value="Open Daily" className="md:col-span-4" />
        <DescListItem 
          label="Description" 
          value="A family-owned microbrewery specializing in Belgian-inspired ales and experimental hop varieties."
        />
      </DescList>
    </div>
  ),
};
