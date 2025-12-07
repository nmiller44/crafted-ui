import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';
import { Radio } from './Radio';
import { Field, FieldLabel } from '../field';
import { Fieldset } from '../fieldset/Fieldset';

const meta = {
  title: 'CraftedUI/Forms/Radio',
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-lg">
      <Fieldset 
        title="Beer Preference" 
        subtitle="Choose your preferred beer type"
      >
        <Field>
          <RadioGroup defaultValue="ale">
            <Radio value="ale">Ale</Radio>
            <Radio value="lager">Lager</Radio>
            <Radio value="na">Non-Alcoholic</Radio>
          </RadioGroup>
        </Field>
      </Fieldset>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-sm">
      <Field>
        <RadioGroup>
          <Radio value="unlabeled">Unlabeled radio group</Radio>
          <Radio value="option2">Option 2</Radio>
        </RadioGroup>
      </Field>

      <Field>
        <FieldLabel>With Label</FieldLabel>
        <RadioGroup>
          <Radio value="ipa">IPA</Radio>
          <Radio value="stout">Stout</Radio>
          <Radio value="pilsner">Pilsner</Radio>
        </RadioGroup>
      </Field>
      
      <Field>
        <FieldLabel>With Error</FieldLabel>
        <RadioGroup aria-invalid={true}>
          <Radio value="option1">This radio group has an error</Radio>
          <Radio value="option2">Option 2</Radio>
        </RadioGroup>
      </Field>
      
      <Field>
        <FieldLabel>Disabled</FieldLabel>
        <RadioGroup disabled defaultValue="disabled2">
          <Radio value="disabled1">This radio is disabled</Radio>
          <Radio value="disabled2">This is disabled and selected</Radio>
        </RadioGroup>
      </Field>
    </div>
  )
};

export const Horizontal: Story = {
  args: {},
  render: (args) => (
    <Fieldset 
      title="Serving Temperature" 
      subtitle="Select your preferred serving temperature"
    >
      <Field>
        <RadioGroup defaultValue="cold" className="flex-row space-x-6 space-y-0">
          <Radio value="cold">Cold</Radio>
          <Radio value="cool">Cool</Radio>
          <Radio value="cellar">Cellar Temp</Radio>
        </RadioGroup>
      </Field>
    </Fieldset>
  )
};
