import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Field, FieldInset, FieldLabel } from '../field';
import { Input } from './Input';

const meta = {
  title: 'CraftedUI/Forms/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-lg space-y-6">
      <Field>
        <FieldLabel>Beer Name</FieldLabel>
        <Input placeholder="Hazy IPA" />
      </Field>
      <Field>
        <FieldLabel>ABV</FieldLabel>
        <Input type="number" placeholder="6.5" />
        <FieldInset text="%" />
      </Field>
      <Field>
        <FieldLabel>Price</FieldLabel>
        <Input type="number" placeholder="12.99" />
        <FieldInset text="$" position="left" />
      </Field>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-sm">
      <Field>
        <Input placeholder="Unlabeled input" />
      </Field>

      <Field>
        <FieldLabel>With Label</FieldLabel>
        <Input placeholder="Enter beer name..." />
      </Field>
      
      <Field>
        <FieldLabel>With Error</FieldLabel>
        <Input aria-invalid placeholder="This field has an error" />
      </Field>
      
      <Field>
        <FieldLabel>Disabled</FieldLabel>
        <Input disabled placeholder="This input is disabled" />
      </Field>
      
      <Field>
        <FieldLabel>Read Only</FieldLabel>
        <Input 
          readOnly 
          value="This content cannot be edited"
        />
      </Field>
    </div>
  )
};

export const InputTypes: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-sm">
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input type="email" placeholder="you@example.com" />
      </Field>
      
      <Field>
        <FieldLabel>Password</FieldLabel>
        <Input type="password" placeholder="Enter password" />
      </Field>
      
      <Field>
        <FieldLabel>Number</FieldLabel>
        <Input type="number" placeholder="42" />
      </Field>
      
      <Field>
        <FieldLabel>Date</FieldLabel>
        <Input type="date" />
      </Field>
      
      <Field>
        <FieldLabel>Search</FieldLabel>
        <Input type="search" placeholder="Search beers..." />
      </Field>
    </div>
  )
};

export const WithInsets: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-sm">
      <Field>
        <FieldLabel>Price</FieldLabel>
        <Input type="number" placeholder="12.99" />
        <FieldInset text="$" position="left" />
      </Field>
      
      <Field>
        <FieldLabel>Percentage</FieldLabel>
        <Input type="number" placeholder="75" />
        <FieldInset text="%" />
      </Field>
      
      <Field>
        <FieldLabel>Website</FieldLabel>
        <Input placeholder="example.com" />
        <FieldInset text="https://" position="left" />
      </Field>
      
      <Field>
        <FieldLabel>Currency</FieldLabel>
        <Input type="number" placeholder="2500" />
        <FieldInset text="USD" />
      </Field>
    </div>
  )
};