import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { SelectOption } from './SelectOption';
import { Field, FieldLabel } from '../field';

const meta = {
  title: 'CraftedUI/Forms/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

const beerStyles = [
  { value: 'ipa', label: 'IPA' },
  { value: 'stout', label: 'Stout' },
  { value: 'porter', label: 'Porter' },
  { value: 'lager', label: 'Lager' },
  { value: 'pilsner', label: 'Pilsner' },
  { value: 'wheat', label: 'Wheat Beer' },
  { value: 'saison', label: 'Saison' },
];

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-lg space-y-6">
      <Field>
        <FieldLabel>Beer Style</FieldLabel>
        <Select items={beerStyles} defaultValue="ipa" />
      </Field>
      <Field>
        <FieldLabel>Brewery Location</FieldLabel>
        <Select items={[
          { value: 'portland', label: 'Portland, OR' },
          { value: 'denver', label: 'Denver, CO' },
          { value: 'asheville', label: 'Asheville, NC' },
          { value: 'san-diego', label: 'San Diego, CA' },
        ]} />
      </Field>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-sm">
      <Field>
        <Select items={beerStyles} placeholder="Unlabeled select" />
      </Field>

      <Field>
        <FieldLabel>With Label</FieldLabel>
        <Select items={beerStyles} placeholder="Choose a beer style..." />
      </Field>
      
      <Field>
        <FieldLabel>With Error</FieldLabel>
        <Select items={beerStyles} aria-invalid={true} placeholder="This field has an error" />
      </Field>
      
      <Field>
        <FieldLabel>Disabled</FieldLabel>
        <Select items={beerStyles} disabled defaultValue="stout" />
      </Field>
      
      <Field>
        <FieldLabel>With Default Value</FieldLabel>
        <Select items={beerStyles} defaultValue="pilsner" />
      </Field>
    </div>
  )
};

export const WithManyOptions: Story = {
  args: {},
  render: (args) => {
    const manyBeerStyles = [
      { value: 'ipa', label: 'India Pale Ale (IPA)' },
      { value: 'stout', label: 'Stout' },
      { value: 'porter', label: 'Porter' },
      { value: 'lager', label: 'Lager' },
      { value: 'pilsner', label: 'Pilsner' },
      { value: 'wheat', label: 'Wheat Beer' },
      { value: 'saison', label: 'Saison' },
      { value: 'sour', label: 'Sour Ale' },
      { value: 'belgian', label: 'Belgian Ale' },
      { value: 'barleywine', label: 'Barleywine' },
      { value: 'amber', label: 'Amber Ale' },
      { value: 'brown', label: 'Brown Ale' },
    ];

    return (
      <div className="max-w-sm">
        <Field>
          <FieldLabel>Beer Style</FieldLabel>
          <Select items={manyBeerStyles} />
        </Field>
      </div>
    );
  }
};
