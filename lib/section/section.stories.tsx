import type { Meta, StoryObj } from '@storybook/react';

import { Section } from './Section';
import { SectionHeader } from './SectionHeader';
import { Button } from '../button/Button';

const meta = {
  title: 'CraftedUI/Components/Section',
  component: Section,
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof Section>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="flex flex-col space-y-12 grow">
      <Section title="Section Title" subtitle="Section Subtitle" />
        <Section {...args}>
          <SectionHeader title="Section Title" subtitle="Section Subtitle" />
        </Section>
        <Section {...args}>
          <SectionHeader lined title="Section Title" subtitle="Section Subtitle" />
        </Section>
    </div>
  )
};

export const Buttons: Story = {
    args: {},
    render: (args) => (
      <div className="flex flex-col space-y-12 grow">
          <SectionHeader title="Section Title" subtitle="Section Subtitle">
            <Button>New</Button>
          </SectionHeader>
          <Section {...args}>
          </Section>
      </div>
    )
  };
