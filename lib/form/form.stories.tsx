import type { Meta, StoryObj } from '@storybook/react-vite';

import { Form } from './Form';
import { Fieldset } from '../fieldset/Fieldset';
import { FieldsetButtons } from '../fieldset/FieldsetButtons';
import { Field } from '../field/Field';
import { FieldLabel } from '../field/FieldLabel';
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import { Card } from '../card/Card';

const meta = {
  title: 'CraftedUI/Forms/Form',
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

export const Feature: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-2xl">
      <Form
        {...args}
        errors={{
          _form: {
            status: 'warning',
            title: 'No Changes',
            message: 'No brewery details were changed.',
          },
        }}
      >
        <Fieldset title="Brewery Profile" subtitle="Update your public brewery information.">
          <Field>
            <FieldLabel>Brewery Name</FieldLabel>
            <Input defaultValue="Hoppy Trails Brewing" />
          </Field>
          <Field>
            <FieldLabel>Contact Email</FieldLabel>
            <Input type="email" defaultValue="hello@hoppytrails.com" />
          </Field>
          <Field>
            <FieldLabel>City</FieldLabel>
            <Input defaultValue="Portland" />
          </Field>
          <FieldsetButtons>
            <Button outline clr="blank">Cancel</Button>
            <Button clr="primary" type="submit">Save Changes</Button>
          </FieldsetButtons>
        </Fieldset>
      </Form>
    </div>
  ),
};

export const FormError: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-lg">
      <Card body>
        <Form {...args} errors={{ _form: 'Unable to save changes. Please try again.' }}>
          <Fieldset title="Tap List Settings">
            <Field>
              <FieldLabel>Tap List Title</FieldLabel>
              <Input placeholder="Tonight on Tap" />
            </Field>
            <FieldsetButtons>
              <Button clr="primary" type="submit">Save</Button>
            </FieldsetButtons>
          </Fieldset>
        </Form>
      </Card>

      <Card body>
        <Form
          {...args}
          errors={{
            _form: {
              status: 'warning',
              title: 'No Changes',
              message: 'Everything is already up to date.',
            },
          }}
        >
          <Fieldset title="Distribution Contact">
            <Field>
              <FieldLabel>Contact Name</FieldLabel>
              <Input defaultValue="Jordan Brewer" />
            </Field>
            <FieldsetButtons>
              <Button clr="primary" type="submit">Update</Button>
            </FieldsetButtons>
          </Fieldset>
        </Form>
      </Card>
    </div>
  ),
};
