import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Field } from './Field';
import { FieldLabel } from './FieldLabel';
import { FieldError } from './FieldError';
import { FieldInset } from './FieldInset';
import { Input } from '../input/input';
import { Card } from '../card/Card';
import { Fieldset } from '../fieldset/Fieldset';
import { IconSearch } from '../icons/IconSearch';

const meta = {
  title: 'CraftedUI/Forms/Field',
  component: Field,
} satisfies Meta<typeof Field>;

export default meta;
type Story = StoryObj<typeof Field>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-lg">
      <Card body>
        <Fieldset title="Add New Beer" subtitle="Enter the beer details below.">
          <Field>
            <FieldLabel>Beer Name</FieldLabel>
            <Input placeholder="Hazy IPA" />
          </Field>

          <Field>
            <FieldLabel>Brewery</FieldLabel>
            <Input placeholder="Hoppy Brewery" />
          </Field>

          <Field>
            <FieldLabel>ABV</FieldLabel>
            <Input type="number" placeholder="6.5" />
            <FieldInset text="%" position="right" />
          </Field>

          <Field>
            <FieldLabel>Price</FieldLabel>
            <Input type="number" placeholder="12.99" />
            <FieldInset text="$" position="left" />
          </Field>
        </Fieldset>
      </Card>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4 max-w-sm">
      <Field {...args}>
        <Input placeholder="Unlabeled field" />
      </Field>

      <Field {...args} label="Brewery">
        <Input placeholder="Enter brewery name" />
      </Field>

      <Field {...args}>
        <FieldLabel>ABV</FieldLabel>
        <Input type="number" />
        <FieldError>ABV must be between 0 and 20</FieldError>
      </Field>
    </div>
  )
};

export const WithInset: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4 max-w-sm">
      <Field {...args}>
        <FieldLabel>Price</FieldLabel>
        <Input type="number" className="!pr-12" />
        <FieldInset text="USD" position="right" />
      </Field>

      <Field {...args} label="Website">
          <Input className="!pl-16" />
          <FieldInset text="https://" position="left" />
      </Field>

      <Field {...args}>
        <FieldLabel>Search Beers</FieldLabel>
        <Input className="!pr-10" placeholder="Search..." />
        <FieldInset position="right">
          <IconSearch className="size-4 text-muted-foreground" />
        </FieldInset>
      </Field>
    </div>
  )
};
