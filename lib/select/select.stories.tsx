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

export const ItemsProp: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-8 max-w-sm">
      {/* CORRECT USAGE */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-foreground">✅ Correct Usage</h3>
        
        <Field>
          <FieldLabel>Items Only (Standard Pattern)</FieldLabel>
          <Select items={beerStyles} defaultValue="ipa" />
        </Field>

        <Field>
          <FieldLabel>Items + Children (Custom Rendering)</FieldLabel>
          <Select 
            items={[
              { value: 'ipa', label: 'IPA Label from Items' },
              { value: 'stout', label: 'Stout Label from Items' },
            ]} 
            defaultValue="ipa"
          >
            <SelectOption value="ipa">🍺 Custom IPA Rendering</SelectOption>
            <SelectOption value="stout">🍺 Custom Stout Rendering</SelectOption>
          </Select>
        </Field>
      </div>

      {/* INCORRECT USAGE */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-destructive">❌ Incorrect Usage (Broken)</h3>
        
        <Field>
          <FieldLabel>No Items Prop (Shows raw values)</FieldLabel>
          <Select defaultValue="stout">
            <SelectOption value="ipa">IPA</SelectOption>
            <SelectOption value="stout">Stout</SelectOption>
            <SelectOption value="porter">Porter</SelectOption>
          </Select>
        </Field>

        <Field>
          <FieldLabel>Mismatched Values (Child not in items)</FieldLabel>
          <Select 
            items={[
              { value: 'items-only', label: 'From Items Array' },
            ]} 
            defaultValue="child-only"
          >
            <SelectOption value="child-only">From Children Only</SelectOption>
          </Select>
        </Field>
      </div>

      {/* DISABLED/EMPTY STATES */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-muted-foreground">⚠️ Disabled/Empty States</h3>
        
        <Field>
          <FieldLabel>Empty Items Array</FieldLabel>
          <Select items={[]} placeholder="No options available" disabled />
        </Field>

        <Field>
          <FieldLabel>No Items, No Children</FieldLabel>
          <Select placeholder="Nothing to select" disabled />
        </Field>
      </div>
    </div>
  )
};
