import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Field, FieldLabel } from '../field';
import { Textarea } from './Textarea';

const meta = {
  title: 'CraftedUI/Forms/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-lg space-y-6">
      <Field>
        <FieldLabel>Brewery Description</FieldLabel>
        <Textarea placeholder="Tell us about your brewery..." rows={4} />
      </Field>
      <Field>
        <FieldLabel>Tasting Notes</FieldLabel>
        <Textarea 
          placeholder="Describe the flavor profile..." 
          rows={6}
          defaultValue="Rich malty sweetness with notes of caramel and toffee. Balanced hop bitterness with floral and citrus undertones. Clean, crisp finish with a lingering pleasant aftertaste."
        />
      </Field>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-sm">
      <Field>
        <FieldLabel>With Label</FieldLabel>
        <Textarea placeholder="Enter your comments..." rows={4} />
      </Field>
      
      <Field>
        <Textarea placeholder="Unlabeled textarea" rows={3} />
      </Field>
      
      <Field>
        <FieldLabel>With Error</FieldLabel>
        <Textarea aria-invalid placeholder="This field has an error" rows={3} />
      </Field>
      
      <Field>
        <FieldLabel>Disabled</FieldLabel>
        <Textarea disabled placeholder="This textarea is disabled" rows={3} />
      </Field>
      
      <Field>
        <FieldLabel>Read Only</FieldLabel>
        <Textarea 
          readOnly 
          rows={3}
          defaultValue="This content cannot be edited but can be selected and copied."
        />
      </Field>
    </div>
  )
};

export const Rows: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-sm">
      <Field>
        <FieldLabel>Small (3 rows)</FieldLabel>
        <Textarea placeholder="Enter text..." rows={3} />
      </Field>
      
      <Field>
        <FieldLabel>Medium (5 rows)</FieldLabel>
        <Textarea placeholder="Enter text..." rows={5} />
      </Field>
      
      <Field>
        <FieldLabel>Large (8 rows)</FieldLabel>
        <Textarea placeholder="Enter text..." rows={8} />
      </Field>
    </div>
  )
};
