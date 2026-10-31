import type { Meta, StoryObj } from '@storybook/react-vite';

import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { Button } from '../button/Button';
import { Page } from '../page/Page';

const meta = {
  title: 'CraftedUI/Layout/Section',
  component: Section,
  decorators: [
    (Story) => (
      <main>
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
          <Story />
        </div>
      </main>
    ),
  ],
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof Section>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <Page title="Taproom Operations" subtitle="Prepare the team for tonight's service.">
      <Section {...args} title="Service Overview" subtitle="Review the tap list and team assignments.">
        <p>Confirm the evening lineup before opening the doors.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-muted rounded-md">
            <p>Hoppy Trails IPA and Golden Hour Pils are ready to pour.</p>
          </div>
          <div className="p-4 bg-muted rounded-md">
            <p>The bar team is assigned to service, with a cellar lead available for keg changes.</p>
          </div>
        </div>
      </Section>

      <Section title="Tonight's Highlights" subtitle="Help guests discover the current lineup.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-accent/10 rounded-md text-center">Fresh West Coast IPA</div>
          <div className="p-4 bg-accent/10 rounded-md text-center">Seasonal Pilsner</div>
          <div className="p-4 bg-accent/10 rounded-md text-center">Barrel-Aged Stout</div>
        </div>
        <div className="flex gap-4">
          <Button outline>Preview Menu</Button>
          <Button>Publish Tap List</Button>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Cellar Handoff" subtitle="Review the final checks with the service team." lined />
        <div className="p-4 bg-muted rounded-md">
          <p>Confirm keg availability and record any low-stock beers before service.</p>
        </div>
      </Section>

      <Section title="Opening Checklist">
        <p>Check glassware, test the taps, and brief the team before opening.</p>
        <Button>Start Service</Button>
      </Section>
    </Page>
  ),
};

export const Basic: Story = {
  args: {
    title: 'Taproom Checklist',
    subtitle: 'Prepare the bar for service.',
  },
  render: (args) => (
    <Page>
      <Section {...args}>
        <div className="p-4 bg-muted rounded-md">
          <p>Check glassware and confirm the current tap list.</p>
        </div>
      </Section>
    </Page>
  ),
};

export const HeaderVariants: Story = {
  args: {},
  render: (args) => (
    <Page title="Section Headers" subtitle="Standard, lined, and action-oriented headers.">
      <Section {...args} title="Tap List" subtitle="A standard header with additional context.">
        <div className="p-4 bg-muted rounded-md">
          <p>Review the beers currently available in the taproom.</p>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Cellar Notes" subtitle="A lined header separates the heading from its content." lined />
        <div className="p-4 bg-muted rounded-md">
          <p>Golden Hour Pils is ready for its final conditioning check.</p>
        </div>
      </Section>

      <Section>
        <SectionHeader title="Service Assignments" subtitle="Page-level rhythm also separates sections with header actions.">
          <div className="flex gap-2">
            <Button outline>Edit</Button>
            <Button>Save</Button>
          </div>
        </SectionHeader>
        <div className="p-4 bg-muted rounded-md">
          <p>Assign the bar team and the cellar lead for tonight's service.</p>
        </div>
      </Section>
    </Page>
  ),
};

export const Spacing: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Page provides 48px between content children on mobile and 64px from md upward, with a reduced 32px / 48px gap after PageHeader. Without a header, all content gaps are uniform. Section provides 32px between its direct children; className can override that internal spacing. Section does not add external margins.',
      },
    },
  },
  render: (args) => (
    <Page title="Section Spacing" subtitle="Compare page rhythm, internal spacing, and local overrides.">
      <Section {...args} title="Default Internal Spacing">
        <div className="p-4 bg-primary/10 rounded-md">
          <p>Section leaves 32px between its header and this content block.</p>
        </div>
        <div className="p-4 bg-secondary/10 rounded-md">
          <p>The next direct content block also has a 32px gap above it.</p>
        </div>
        <div className="p-4 bg-accent/10 rounded-md">
          <p>Page separates this whole section from the next: 48px on mobile, 64px on desktop.</p>
        </div>
      </Section>

      <Section className="space-y-6" title="Tighter Internal Spacing">
        <div className="p-4 bg-muted rounded-md">
          <p>The space-y-6 override reduces this section's internal gaps to 24px.</p>
        </div>
        <div className="p-4 bg-muted rounded-md">
          <p>The surrounding Page spacing remains unchanged.</p>
        </div>
      </Section>

      <Section className="bg-muted/50 p-8 rounded-lg border border-border" title="Styled Section">
        <div className="p-4 bg-background rounded-md">
          <p>This section adds 32px of padding, while keeping the default 32px internal gaps.</p>
        </div>
        <div className="p-4 bg-background rounded-md">
          <p>Backgrounds and padding can change without taking over Page's external spacing.</p>
        </div>
      </Section>
    </Page>
  ),
};
