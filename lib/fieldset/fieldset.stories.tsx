import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Fieldset } from './Fieldset';
import { FieldsetButtons } from './FieldsetButtons';
import { Card } from '../card/Card';
import { Field } from '../field/Field';
import { FieldLabel } from '../field/FieldLabel';
import { Input } from '../input/Input';
import { Button } from '../button/Button';

const meta = {
  title: 'CraftedUI/Forms/Fieldset',
  component: Fieldset,
} satisfies Meta<typeof Fieldset>;

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-3xl">
      <Card body>
        <Fieldset {...args} title="Tap Room Reservation" subtitle="Book a table at our craft beer tasting room" grid>
          <Field className="col-span-6">
            <FieldLabel>First Name</FieldLabel>
            <Input placeholder="John" required />
          </Field>
          <Field className="col-span-6">
            <FieldLabel>Last Name</FieldLabel>
            <Input placeholder="Brewer" required />
          </Field>
          <Field className="col-span-8">
            <FieldLabel>Email Address</FieldLabel>
            <Input type="email" placeholder="john@example.com" required />
          </Field>
          <Field className="col-span-4">
            <FieldLabel>Phone</FieldLabel>
            <Input type="tel" placeholder="(555) 123-4567" />
          </Field>
          <Field className="col-span-4">
            <FieldLabel>Date</FieldLabel>
            <Input type="date" required />
          </Field>
          <Field className="col-span-4">
            <FieldLabel>Time</FieldLabel>
            <Input type="time" required />
          </Field>
          <Field className="col-span-4">
            <FieldLabel>Party Size</FieldLabel>
            <Input type="number" placeholder="4" min="1" max="12" required />
          </Field>
          <Field className="col-span-full">
            <FieldLabel>Special Requests</FieldLabel>
            <Input placeholder="Beer preferences, dietary restrictions, etc." />
          </Field>
          <FieldsetButtons>
            <Button outline clr="blank" type="button">Cancel</Button>
            <Button type="submit" clr="primary">Reserve Table</Button>
          </FieldsetButtons>
        </Fieldset>
      </Card>
    </div>
  )
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-4 max-w-lg">
      <Fieldset {...args} title="Basic Form" subtitle="A simple form example.">
        <Field>
          <FieldLabel>Name</FieldLabel>
          <Input />
        </Field>
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input type="email" />
        </Field>
      </Fieldset>

      <Fieldset {...args} title="Update Settings">
        <Field>
          <FieldLabel>Notification Email</FieldLabel>
          <Input type="email" />
        </Field>
        <FieldsetButtons>
          <Button outline clr="blank" type="button">Cancel</Button>
          <Button clr="primary" type="submit">Save Changes</Button>
        </FieldsetButtons>
      </Fieldset>
    </div>
  )
};

export const WithGrid: Story = {
  args: {},
  // parameters: {
  //   layout: 'fullscreen', // or 'centered'
  // },
  render: (args) => (
    <div className="space-y-4 max-w-6xl">
      <Fieldset {...args} title="New Brew Details" subtitle="Add a new craft beer to inventory." grid>
        <Field className="col-span-2 md:col-span-4 lg:col-span-8">
          <FieldLabel>Beer Name</FieldLabel>
          <Input placeholder="Hoppy IPA" />
        </Field>
        <Field className="col-span-2 md:col-span-2 lg:col-span-4">
          <FieldLabel>ABV %</FieldLabel>
          <Input placeholder="6.5" />
        </Field>
        <Field className="col-span-1 md:col-span-3 lg:col-span-6">
          <FieldLabel>Style</FieldLabel>
          <Input placeholder="IPA" />
        </Field>
        <Field className="col-span-1 md:col-span-3 lg:col-span-6">
          <FieldLabel>Brewery</FieldLabel>
          <Input placeholder="Local Craft Co." />
        </Field>
        <Field className="col-span-1 md:col-span-2 lg:col-span-3">
          <FieldLabel>IBU</FieldLabel>
          <Input placeholder="65" />
        </Field>
        <Field className="col-span-1 md:col-span-2 lg:col-span-3">
          <FieldLabel>Price</FieldLabel>
          <Input placeholder="$8.99" />
        </Field>
        <Field className="col-span-2 md:col-span-2 lg:col-span-6">
          <FieldLabel>Volume (oz)</FieldLabel>
          <Input placeholder="16" />
        </Field>
        <FieldsetButtons>
          <Button outline clr="blank" type="button">Cancel</Button>
          <Button type="submit" clr="primary">Add Beer</Button>
        </FieldsetButtons>
      </Fieldset>

      <Fieldset {...args} title="Brewery Information" subtitle="Update your brewery profile" grid>
        <Field className="col-span-2 md:col-span-3 lg:col-span-6">
          <FieldLabel>Brewery Name</FieldLabel>
          <Input placeholder="Hoppy Trails Brewing" required />
        </Field>
        <Field className="col-span-2 md:col-span-3 lg:col-span-6">
          <FieldLabel>Location</FieldLabel>
          <Input placeholder="Portland, OR" required />
        </Field>
        <Field className="col-span-2 md:col-span-4 lg:col-span-8">
          <FieldLabel>Email</FieldLabel>
          <Input type="email" placeholder="info@hoppytrails.com" required />
        </Field>
        <Field className="col-span-2 md:col-span-2 lg:col-span-4">
          <FieldLabel>Established</FieldLabel>
          <Input placeholder="2015" />
        </Field>
        <Field className="col-span-2 md:col-span-6 lg:col-span-12">
          <FieldLabel>Specialty</FieldLabel>
          <Input placeholder="West Coast IPAs" />
        </Field>
        <FieldsetButtons>
          <Button outline clr="blank">Cancel</Button>
          <Button clr="primary">Update Profile</Button>
        </FieldsetButtons>
      </Fieldset>
    </div>
  )
};
