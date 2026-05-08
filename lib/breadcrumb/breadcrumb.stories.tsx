import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from './Breadcrumb';
import { BreadcrumbList } from './BreadcrumbList';
import { BreadcrumbListItem } from './BreadcrumbListItem';
import { BreadcrumbSeparator } from './BreadcrumbSeparator';
import { Heading1 } from '../heading/Heading1';
import { IconBuilding } from '../icons/IconBuilding';

const meta = {
  title: 'CraftedUI/Layout/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-3xl space-y-4">
      <Breadcrumb {...args}>
        <BreadcrumbList>
          <BreadcrumbListItem><a href="/"><IconBuilding /></a></BreadcrumbListItem>
          <BreadcrumbSeparator />
          <BreadcrumbListItem><a href="/breweries">Breweries</a></BreadcrumbListItem>
          <BreadcrumbSeparator />
          <BreadcrumbListItem><a href="/breweries/craft">Craft Breweries</a></BreadcrumbListItem>
          <BreadcrumbSeparator />
          <BreadcrumbListItem><span className="active" aria-current="page">IPA Specialists</span></BreadcrumbListItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <Heading1 
        title="IPA Specialists" 
        subtitle="Discover breweries that specialize in crafting exceptional India Pale Ales, from classic West Coast IPAs to hazy New England styles." 
      />
    </div>
  )
};

export const SeparatorTypes: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <p className="text-sm text-muted-foreground mb-2">Chevron (default)</p>
        <Breadcrumb {...args}>
          <BreadcrumbList>
            <BreadcrumbListItem><a href="/">Home</a></BreadcrumbListItem>
            <BreadcrumbSeparator />
            <BreadcrumbListItem><a href="/events">Events</a></BreadcrumbListItem>
            <BreadcrumbSeparator />
            <BreadcrumbListItem><span className="active" aria-current="page">Beer Festivals</span></BreadcrumbListItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Slash</p>
        <Breadcrumb {...args} aria-label="Breadcrumb - Slash">
          <BreadcrumbList>
            <BreadcrumbListItem><a href="/">Home</a></BreadcrumbListItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbListItem><a href="/events">Events</a></BreadcrumbListItem>
            <BreadcrumbSeparator type="slash" />
            <BreadcrumbListItem><span className="active" aria-current="page">Beer Festivals</span></BreadcrumbListItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Dot</p>
        <Breadcrumb {...args} aria-label="Breadcrumb - Dot">
          <BreadcrumbList>
            <BreadcrumbListItem><a href="/">Home</a></BreadcrumbListItem>
            <BreadcrumbSeparator type="dot" />
            <BreadcrumbListItem><a href="/events">Events</a></BreadcrumbListItem>
            <BreadcrumbSeparator type="dot" />
            <BreadcrumbListItem><span className="active" aria-current="page">Beer Festivals</span></BreadcrumbListItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-2">Custom separator</p>
        <Breadcrumb {...args} aria-label="Breadcrumb - Custom">
          <BreadcrumbList>
            <BreadcrumbListItem><a href="/">Home</a></BreadcrumbListItem>
            <BreadcrumbSeparator>→</BreadcrumbSeparator>
            <BreadcrumbListItem><a href="/events">Events</a></BreadcrumbListItem>
            <BreadcrumbSeparator>→</BreadcrumbSeparator>
            <BreadcrumbListItem><span className="active" aria-current="page">Beer Festivals</span></BreadcrumbListItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  )
};
