import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

// import { FormToggle } from './toggle';
import { Field, FieldInset, FieldLabel } from '../field';
import { Input } from './input';

const meta = {
  title: 'CraftedUI/Forms/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    value: "Beer"
  },

  render: (args) => (
    <Field>
      <FieldLabel>Labelled Input</FieldLabel>
      <Input />
    </Field>
  )
};

export const InputValues: Story = {
  args: {
    value: "Beer"
  },

  render: (args) => (
    <div className='space-y-8'>
      <Field>
        <FieldLabel>Labelled Input</FieldLabel>
        <Input />
      </Field>
      <Field>
      <FieldLabel>Labelled Input</FieldLabel>
        <Input readOnly />
      </Field>
    </div>
  )
};

export const PercentInset: Story = {
  args: {
    value: "75"
  },

  render: (args) => (
    <div className='space-y-8'>
      <Field>
        <FieldLabel>Labelled Input</FieldLabel>
        <Input />
          <FieldInset text='%' position='right' />
      </Field>
    </div>
  )
};

export const DollarInset: Story = {
  args: {
    value: "2,476,375"
  },

  render: (args) => (
    <Field>
      <Field>
        <FieldLabel>Labelled Input</FieldLabel>
        <Input />
          <FieldInset text='$' position='left' />
      </Field>
    </Field>
  )
};

export const TestingForm: Story = {
  args: {
    value: "2,476,375"
  },

  render: (args) => (
    <div>
    <Input {...args}>
      <FieldLabel id={args.id}>Name</FieldLabel>
    </Input>
    <Input {...args}>
      <FieldLabel id={args.id}>Price</FieldLabel>
      <FieldInset insetPosition="left">$</FieldInset>
    </Input>
    {/* <FormToggle id="bside-modal-active"
                value
                name="Active"
        />   */}
    </div>

  )
};