import type { Meta, StoryObj } from '@storybook/react';

import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { Button } from '../button/Button';

const meta = {
  title: 'CraftedUI/Layout/Section',
  component: Section,
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof Section>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <Section title="Basic Section" subtitle="Simple section with title and subtitle" {...args}>
      <div className="p-4 bg-muted rounded-md">
        <p>This is a basic section with content.</p>
      </div>
    </Section>
  )
};

export const SamplePage: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-0">
      <Section title="First Section" subtitle="This is the first section with a subtitle">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-muted rounded-md">
            <p>This is content in the first section. Notice how sections automatically handle spacing between each other.</p>
          </div>
          <div className="p-4 bg-muted rounded-md">
            <p>Multiple content blocks within a section are spaced using the internal space-y-12 utility.</p>
          </div>
        </div>
      </Section>
      
      <Section title="Second Section">
        <div className="p-4 bg-accent/10 rounded-md">
          <p>This second section demonstrates automatic margin spacing. The first section above has no top margin, but this section has mt-12 applied automatically.</p>
        </div>
        <div className="flex gap-4">
          <Button>Action 1</Button>
          <Button clr="primary">Action 2</Button>
        </div>
      </Section>
      
      <Section>
        <SectionHeader title="Custom Header" subtitle="Using SectionHeader component directly" lined />
        <div className="p-4 bg-muted rounded-md">
          <p>This section shows using SectionHeader independently with the lined prop for a bottom border.</p>
        </div>
      </Section>
    </div>
  )
};

export const SpacingBehavior: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-0">
      <Section title="First Section">
        <div className="p-4 bg-primary/10 rounded-md">
          <p className="text-sm">First section - no top margin</p>
        </div>
      </Section>
      <Section title="Second Section">
        <div className="p-4 bg-secondary/10 rounded-md">
          <p className="text-sm">Second section - has mt-12 applied</p>
        </div>
      </Section>
      <Section title="Third Section">
        <div className="p-4 bg-accent/10 rounded-md">
          <p className="text-sm">Third section - also has mt-12 applied</p>
        </div>
      </Section>
    </div>
  )
};

export const InternalSpacing: Story = {
  args: {},
  render: (args) => (
    <Section title="Internal Spacing Demo">
      <div className="p-4 bg-muted rounded-md">
        <p>First content block</p>
      </div>
      <div className="p-4 bg-muted rounded-md">
        <p>Second content block - 48px spacing above</p>
      </div>
      <div className="p-4 bg-muted rounded-md">
        <p>Third content block - 48px spacing above</p>
      </div>
    </Section>
  )
};

export const HeaderVariants: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-0">
      <Section title="Basic Header" subtitle="This is a subtitle that provides additional context">
        <div className="p-4 bg-muted rounded-md">
          <p>Section content goes here</p>
        </div>
      </Section>
      
      <Section>
        <SectionHeader title="Lined Header" subtitle="With bottom border" lined />
        <div className="p-4 bg-muted rounded-md">
          <p>Content with a lined section header</p>
        </div>
      </Section>
      
      <Section>
        <SectionHeader title="Header with Actions" subtitle="Includes action buttons">
          <div className="flex gap-2">
            <Button>Edit</Button>
            <Button clr="primary">Save</Button>
          </div>
        </SectionHeader>
        <div className="p-4 bg-muted rounded-md">
          <p>Section content with header actions</p>
        </div>
      </Section>
    </div>
  )
};

export const PageStructure: Story = {
  args: {},
  render: (args) => (
    <main>
      <Section title="Introduction" subtitle="Welcome to our platform">
        <p>Opening content and overview</p>
      </Section>
      
      <Section title="Features" subtitle="What we offer">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-muted rounded-md text-center">Feature 1</div>
          <div className="p-4 bg-muted rounded-md text-center">Feature 2</div>
          <div className="p-4 bg-muted rounded-md text-center">Feature 3</div>
        </div>
      </Section>
      
      <Section title="Getting Started">
        <p>Step-by-step instructions</p>
        <Button clr="primary">Start Now</Button>
      </Section>
    </main>
  )
};

export const CustomStyling: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-0">
      <Section className="space-y-6" title="Tighter Spacing">
        <div className="p-4 bg-muted rounded-md">
          <p>Content with reduced internal spacing (space-y-6)</p>
        </div>
        <div className="p-4 bg-muted rounded-md">
          <p>Second content block with tighter spacing</p>
        </div>
      </Section>
      
      <Section 
        className="bg-muted/50 p-8 rounded-lg border border-border" 
        title="Styled Section"
      >
        <div className="p-4 bg-background rounded-md">
          <p>Section with custom background and padding</p>
        </div>
      </Section>
    </div>
  )
};
