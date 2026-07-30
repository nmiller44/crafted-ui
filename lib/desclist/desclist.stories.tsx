import type { Meta, StoryObj } from '@storybook/react-vite';

import { DescList } from './DescList';
import { DescListItem } from './DescListItem';
import { DescListLabel } from './DescListLabel';
import { Badge } from '../badge';
import { Button } from '../button';
import { Card } from '../card';
import { Section, SectionHeader } from '../section';

const meta = {
  title: 'CraftedUI/Components/DescList',
  component: DescList,
} satisfies Meta<typeof DescList>;

export default meta;
type Story = StoryObj<typeof DescList>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-4xl">
      <Section>
        <SectionHeader title="Brewery Information" subtitle="Details about the craft brewery" lined>
          <Button clr="primary">Edit Profile</Button>
        </SectionHeader>

        <DescList {...args} title={undefined} subtitle={undefined}>
          <DescListItem label="Brewery Name" value="Hoppy Hills Brewing Co." className="md:col-span-6" />
          <DescListItem label="Location" value="Portland, Oregon" className="md:col-span-6" />
          <DescListItem label="Founded" value="2015" className="md:col-span-6" />
          <DescListItem label="Style Focus" value="West Coast IPAs" className="md:col-span-6" />
          <DescListItem label="Production" value="4,800 BBL/year" className="md:col-span-6" />
        </DescList>

        <DescList {...args} title="Brewery Notes" subtitle={undefined}>
          <DescListItem label="Flagship" value="Summit IPA" className="md:col-span-6" />
          <DescListItem label="Seasonal" value="Harvest Pale Ale" className="md:col-span-6" />
          <DescListItem
            label="Description"
            value="Hoppy Hills is a family-run brewery focused on expressive hop character, crisp fermentation, and balanced bitterness, producing approachable year-round IPAs alongside seasonal small-batch releases inspired by Pacific Northwest ingredients."
            className="md:col-span-12"
          />
        </DescList>
      </Section>
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

export const ValueFallbackEdgeCases: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-3xl">
      <p className="text-sm text-muted-foreground">
        Shows built-in defaults for numeric, empty, and missing values, with per-item overrides.
      </p>
      <DescList title="Value Fallback Cases" {...args}>
        <DescListItem label="Zero Value" value={0} />
        <DescListItem label="Empty String" value="" />
        <DescListItem label="Null Value" value={null} />
        <DescListItem label="Override N/A" value={undefined} emptyValue="N/A" />
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

export const Inline: Story = {
  args: {
    inline: true,
  },
  render: (args) => (
    <div className="max-w-3xl">
      <DescList title="Taproom Snapshot" {...args}>
        <DescListItem label="Current Tap" value="Pine Trail Pale Ale" />
        <DescListItem label="ABV" value="5.4%" />
        <DescListItem label="Pour Size" value="16 oz" />
        <DescListItem label="Availability" value="Limited" />
      </DescList>
    </div>
  ),
};

export const InlineOverridesAndNoColon: Story = {
  args: {
    inline: true,
  },
  render: (args) => (
    <div className="max-w-3xl">
      <DescList title="Service Details" {...args}>
        <DescListItem label="Open" value="11:00 AM" />
        <DescListItem label="Close" value="10:00 PM" />
        <DescListItem label="Kitchen" value="Yes" nocolon />
        <DescListItem label="Long Notes" value="This row uses block layout despite list-level inline." inline={false} />
      </DescList>
    </div>
  ),
};

export const EmptyValueFallbacks: Story = {
  args: {
    emptyValue: "Not provided",
  },
  render: (args) => (
    <div className="space-y-6 max-w-3xl">
      <p className="text-sm text-muted-foreground">
        Demonstrates list-level fallback, row-level override, and valid zero values.
      </p>
      <DescList title="Brew Log Metadata" {...args}>
        <DescListItem label="Batch ID" value="B-427" />
        <DescListItem label="Fermentation Days" value={0} />
        <DescListItem label="Dry Hop" value={undefined} />
        <DescListItem label="Cellar Notes" value="" />
        <DescListItem label="Override" value={null} emptyValue="N/A" />
      </DescList>
    </div>
  ),
};

export const CustomStyles: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-md">
      <Card title="Status Card" subtitle="API Health Status" body>
        <div className="rounded-md p-4 bg-success/10">
          <DescList inline wrapperClassName="space-y-8" className="gap-y-2 leading-6" {...args}>
            <DescListItem
              label="Status"
              value="ok"
              className="font-bold text-success [&>dt]:text-success"
            />
            <DescListItem label="API" value="ok" />
            <DescListItem label="Database" value="ok" />
            <DescListItem label="Latency" value="19 ms" />
            <DescListItem label="Last checked" value="16:48:26" className="text-xs text-muted-foreground" />
          </DescList>
        </div>
      </Card>
    </div>
  ),
};
