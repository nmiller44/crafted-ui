import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Field } from './Field';
import { FieldLabel } from './FieldLabel';
import { FieldError } from './FieldError';
import { FieldInset } from './FieldInset';
import { Input } from '../input/Input';
import { Textarea } from '../textarea/Textarea';
import { Select } from '../select/Select';
import { Combobox } from '../combobox/Combobox';
import { Checkbox } from '../checkbox/Checkbox';
import { Radio } from '../radio/Radio';
import { RadioGroup } from '../radio/RadioGroup';
import { Card } from '../card/Card';
import { Fieldset } from '../fieldset/Fieldset';
import { FieldsetButtons } from '../fieldset/FieldsetButtons';
import { Button } from '../button/Button';
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

export const ErrorHandling: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-2xl">
      <Card body>
        <Fieldset title="Error Validation Demo" subtitle="All form components with error states">
          <Field data-invalid data-touched>
            <FieldLabel>Input with Error</FieldLabel>
            <Input data-invalid placeholder="Enter brewery name" />
            <FieldError>Brewery name is required</FieldError>
          </Field>

          <Field data-invalid data-touched>
            <FieldLabel>Textarea with Error</FieldLabel>
            <Textarea data-invalid placeholder="Enter description" rows={3} />
            <FieldError>Description must be at least 10 characters</FieldError>
          </Field>

          <Field data-invalid data-touched>
            <FieldLabel>Select with Error</FieldLabel>
            <Select 
              placeholder="Select style..."
              items={[
                { value: 'ipa', label: 'IPA' },
                { value: 'stout', label: 'Stout' },
                { value: 'lager', label: 'Lager' },
              ]}
            />
            <FieldError>Please select a beer style</FieldError>
          </Field>

          <Field data-invalid data-touched>
            <FieldLabel>Combobox with Error</FieldLabel>
            <Combobox 
              placeholder="Search breweries..."
              items={[
                { value: 'hoppy', label: 'Hoppy Brewery' },
                { value: 'malty', label: 'Malty Brewery' },
                { value: 'crisp', label: 'Crisp Brewing Co' },
              ]}
            />
            <FieldError>Please select a brewery</FieldError>
          </Field>

          <Field data-invalid data-touched>
            <FieldLabel>Checkbox with Error</FieldLabel>
            <Checkbox>I agree to the terms and conditions</Checkbox>
            <FieldError>You must accept the terms</FieldError>
          </Field>

          <Field data-invalid data-touched>
            <FieldLabel>Radio Group with Error</FieldLabel>
            <RadioGroup>
              <Radio value="yes">Yes, it's craft beer</Radio>
              <Radio value="no">No, it's not</Radio>
            </RadioGroup>
            <FieldError>Please select an option</FieldError>
          </Field>

          <FieldsetButtons>
            <Button outline clr="blank">Cancel</Button>
            <Button clr="primary">Submit</Button>
          </FieldsetButtons>
        </Fieldset>
      </Card>
    </div>
  )
};

export const AllComponents: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-3xl">
      <Card body>
        <Fieldset title="All Form Components" subtitle="Every input type in normal state">
          <Field>
            <FieldLabel>Input</FieldLabel>
            <Input placeholder="Enter brewery name..." />
          </Field>

          <Field>
            <FieldLabel>Textarea</FieldLabel>
            <Textarea placeholder="Enter description..." rows={3} />
          </Field>

          <Field>
            <FieldLabel>Select</FieldLabel>
            <Select 
              placeholder="Select style..."
              items={[
                { value: 'ipa', label: 'IPA' },
                { value: 'stout', label: 'Stout' },
                { value: 'lager', label: 'Lager' },
              ]}
            />
          </Field>

          <Field>
            <FieldLabel>Combobox</FieldLabel>
            <Combobox 
              placeholder="Search breweries..."
              items={[
                { value: 'hoppy', label: 'Hoppy Brewery' },
                { value: 'malty', label: 'Malty Brewery' },
                { value: 'crisp', label: 'Crisp Brewing Co' },
              ]}
            />
          </Field>

          <Field>
            <FieldLabel>Checkbox</FieldLabel>
            <Checkbox>I agree to the terms and conditions</Checkbox>
          </Field>

          <Field>
            <FieldLabel>Radio Group</FieldLabel>
            <RadioGroup>
              <Radio value="yes">Yes, it's craft beer</Radio>
              <Radio value="no">No, it's not craft beer</Radio>
              <Radio value="maybe">Not sure</Radio>
            </RadioGroup>
          </Field>
        </Fieldset>
      </Card>
    </div>
  )
};

