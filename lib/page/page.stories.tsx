import type { Meta, StoryObj } from '@storybook/react-vite';

import { Page } from './Page';
import { PageHeader } from './PageHeader';
import { Section } from '../section/Section';
import { Button } from '../button/Button';
import { Heading1 } from '../heading/Heading1';
import { Heading3 } from '../heading/Heading3';
import { Heading4 } from '../heading/Heading4';
import { Heading5 } from '../heading/Heading5';
import { Badge } from '../badge/Badge';
import { Breadcrumb } from '../breadcrumb/Breadcrumb';
import { BreadcrumbList } from '../breadcrumb/BreadcrumbList';
import { BreadcrumbListItem } from '../breadcrumb/BreadcrumbListItem';
import { BreadcrumbSeparator } from '../breadcrumb/BreadcrumbSeparator';
import { Vertlist } from '../vertlist/Vertlist';
import { VertlistItem } from '../vertlist/VertlistItem';
import { Metric } from '../metric/Metric';
import { Card } from '../card/Card';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../table';
import { Form } from '../form/Form';
import { Fieldset } from '../fieldset/Fieldset';
import { FieldsetButtons } from '../fieldset/FieldsetButtons';
import { Field } from '../field/Field';
import { FieldLabel } from '../field/FieldLabel';
import { Input } from '../input/Input';

const meta = {
  title: 'CraftedUI/Layout/Page',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

const PageFeature = ({ children, ...args }: React.ComponentProps<typeof Page>) => {
  const header = (
    <PageHeader
      title="Delivery Plan"
      subtitle="Manage outbound routes and delivery timing."
    >
      <Button outline>Export</Button>
      <Button clr="primary">Add Stop</Button>
    </PageHeader>
  );

  return (
    <div className="mx-auto flex min-h-[44rem] w-full max-w-[96rem] items-stretch gap-0">
        <aside className="hidden w-48 shrink-0 self-stretch lg:block">
          <div className="h-full border-r border-border bg-background p-4">
            <div className="mb-4 flex items-center gap-3 px-2 py-1.5">
              <div className="flex size-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">K</div>
              <p className="text-sm font-semibold">Keg Control</p>
            </div>

            <Vertlist>
              <VertlistItem><a href="#">Inventory</a></VertlistItem>
              <VertlistItem><a href="#">Production</a></VertlistItem>
              <VertlistItem><a href="#">Packaging</a></VertlistItem>
              <VertlistItem><a href="#" className="active">Sales</a></VertlistItem>
              <VertlistItem><a href="#">Settings</a></VertlistItem>
            </Vertlist>
          </div>
        </aside>

        <div className="w-full grow max-w-container mx-auto px-6 lg:px-8 py-8 md:py-12 space-y-6 md:space-y-8">
          <Breadcrumb>
            <BreadcrumbList className="flex-wrap">
              <BreadcrumbListItem><a href="#">Sales</a></BreadcrumbListItem>
              <BreadcrumbSeparator />
              <BreadcrumbListItem><a href="#">Logistics</a></BreadcrumbListItem>
              <BreadcrumbSeparator />
              <BreadcrumbListItem><span className="active" aria-current="page">Delivery Plan</span></BreadcrumbListItem>
            </BreadcrumbList>
          </Breadcrumb>

          <Page {...args}>
            {header}
            <Section title="Outbound Summary">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Card slim>
                  <Metric title="Cases Out Today" value="1,248" />
                </Card>
                <Card slim>
                  <Metric title="Active Deliveries" value="32" />
                </Card>
                <Card slim>
                  <Metric title="On-Time Departure" value="96%" />
                </Card>
              </div>
            </Section>

            <Section title="Delivery Schedule">
              <Card>
                <Table>
                  <TableHead>
                    <TableHeadCell>Account</TableHeadCell>
                    <TableHeadCell>Route</TableHeadCell>
                    <TableHeadCell>Product Load</TableHeadCell>
                    <TableHeadCell>Departure</TableHeadCell>
                    <TableHeadCell>ETA</TableHeadCell>
                    <TableHeadCell>Status</TableHeadCell>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Harbor Hall Distributors</TableCell>
                      <TableCell>North Loop A</TableCell>
                      <TableCell>180 IPA / 60 Pilsner</TableCell>
                      <TableCell>08:00 to 08:30</TableCell>
                      <TableCell>10:15</TableCell>
                      <TableCell><Badge clr="success">On Time</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Downtown Tap Partners</TableCell>
                      <TableCell>Central Loop C</TableCell>
                      <TableCell>120 Lager / 40 Stout</TableCell>
                      <TableCell>09:15 to 09:45</TableCell>
                      <TableCell>11:40</TableCell>
                      <TableCell><Badge clr="warning">Delayed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Riverfront Beverage Co.</TableCell>
                      <TableCell>East Loop B</TableCell>
                      <TableCell>140 Hazy IPA / 30 Sour</TableCell>
                      <TableCell>10:30 to 11:00</TableCell>
                      <TableCell>12:20</TableCell>
                      <TableCell><Badge clr="info">Loaded</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </Section>
            {children}
          </Page>
        </div>
    </div>
  );
};

export const Feature: Story = {
  args: {},
  render: (args) => <PageFeature {...args} />,
};

const HeadingSpacing = () => (
        <>
          <Section title="Production" subtitle="Plan the batch and prepare the cellar.">
            <p className="max-w-prose text-sm text-muted-foreground">
              Heading sizes: H1 36px, H2 30px, H3 24px, H4 20px, H5 18px.
              All use bold weight. Content gaps are 48px on mobile and 64px on desktop;
              the gap after PageHeader is reduced to 32px on mobile and 48px on desktop.
              section and nested-group gaps are 32px, with 16px between nested headings and content.
            </p>
            <p className="max-w-prose text-muted-foreground">
              Review the brew schedule before preparing equipment. Each batch moves through
              the same checks, from recipe selection to cellar handoff.
            </p>
            <section className="space-y-8">
              <div className="space-y-4">
                <Heading3 title="Brew Day" subtitle="Prepare the ingredients and equipment." />
                <p className="max-w-prose">
                  Confirm the grain bill and reserve a fermentation vessel before heating the strike water.
                </p>
              </div>
              <section className="space-y-8">
                <div className="space-y-4">
                  <Heading4 title="Equipment Preparation" />
                  <p className="max-w-prose">
                    Inspect the kettle, transfer lines, and heat exchanger. Replace worn seals before starting.
                  </p>
                </div>
                <section className="space-y-4">
                  <Heading5 title="Sanitation Check" subtitle="Complete immediately before transferring wort." />
                  <Card body>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Mix sanitizer at the recommended concentration.</li>
                      <li>Give every contact surface the full required contact time.</li>
                      <li>Record the check in the batch log.</li>
                    </ul>
                  </Card>
                </section>
              </section>
              <section className="space-y-4">
                <Heading4 title="Ingredient Staging" />
                <p className="max-w-prose">
                  Weigh the hop additions separately and label each container with its addition time.
                  Keep the yeast chilled until the wort is ready.
                </p>
              </section>
            </section>
            <section className="space-y-4">
              <Heading3 title="Fermentation" subtitle="Hand off the batch to the cellar team." />
              <p className="max-w-prose">
                Record original gravity, pitching temperature, and the assigned vessel.
                Schedule the first gravity check for the following morning.
              </p>
            </section>
          </Section>
          <Section title="Distribution" subtitle="Return to the next major area of operations.">
            <p className="max-w-prose">
              Once the batch is packaged and released, confirm account allocations and delivery windows.
              This section should read as a fresh chapter, not a continuation of the fermentation notes.
            </p>
            <Card body>
              <p className="text-muted-foreground">
                Harbor Hall Distributors has 180 cases of IPA and 60 cases of Pilsner reserved
                for the North Loop route.
              </p>
            </Card>
          </Section>
        </>
);

export const Basic: Story = {
  args: {
    title: 'Inventory Dashboard',
    subtitle: 'Live taproom and warehouse inventory.',
  },
  render: (args) => (
    <main>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        <Page {...args}>
          <Card>
            <Table>
              <TableHead>
                <TableHeadCell>Beer</TableHeadCell>
                <TableHeadCell>Style</TableHeadCell>
                <TableHeadCell>ABV</TableHeadCell>
                <TableHeadCell>Status</TableHeadCell>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Hoppy Trails IPA</TableCell>
                  <TableCell>West Coast IPA</TableCell>
                  <TableCell>6.8%</TableCell>
                  <TableCell><Badge clr="success">On Tap</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Midnight Oak Stout</TableCell>
                  <TableCell>Imperial Stout</TableCell>
                  <TableCell>10.2%</TableCell>
                  <TableCell><Badge clr="warning">Low Stock</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Golden Hour Pils</TableCell>
                  <TableCell>Pilsner</TableCell>
                  <TableCell>4.9%</TableCell>
                  <TableCell><Badge clr="info">Conditioning</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
          <Section title="Cellar Notes">
            <p>Golden Hour Pils will be ready for the taproom after its final conditioning check.</p>
          </Section>
        </Page>
      </div>
    </main>
  )
};

export const HeaderVariants: Story = {
  args: {},
  render: (args) => (
    <div className="mx-auto max-w-container px-6 py-6 lg:px-8 lg:py-8 space-y-10">
      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Title + Subtitle</p>
        <PageHeader title="Cellar Operations" subtitle="Monitor fermentation, conditioning, and keg readiness." {...args} />
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Action Buttons</p>
        <PageHeader title="Taproom Service" subtitle="Prepare today's pour list and service assignments." {...args}>
          <Button outline>Print Menu</Button>
          <Button>Assign Staff</Button>
          <Button clr="primary">Open Service</Button>
        </PageHeader>
      </div>

      <div className="space-y-3">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Custom</p>
        <PageHeader wrapperClassName="bg-muted/50 p-6 rounded-lg border border-border" {...args}>
          <div className="flex items-start gap-3">
            <Heading1 title="Limited Release Board" subtitle="Barrel-aged drops and small-batch availability." />
            <Badge clr="yellow">Pilot Batch</Badge>
          </div>
          <div className="flex gap-2">
            <Button>Preview Notes</Button>
            <Button clr="primary">Publish Lineup</Button>
          </div>
        </PageHeader>
      </div>
    </div>
  )
};

export const Spacing: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Window padding and the gap after PageHeader are 32px on mobile and 48px from md upward. Content gaps are 48px / 64px, including when Page has no header. Breadcrumb spacing is 24px / 32px. H1–H5 use 36/30/24/20/18px bold type. Sections have 32px internal gaps; nested headings stay 16px from body content.',
      },
    },
  },
  render: (args) => (
    <PageFeature {...args}>
      <HeadingSpacing />
    </PageFeature>
  ),
};

export const FormPage: Story = {
  args: {
    title: 'Brewery Settings',
    subtitle: 'Manage how your brewery appears to customers.',
  },
  render: (args) => (
    <main>
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
        <Page {...args}>
          <Card body className="max-w-2xl">
            <Form onSubmit={(event) => event.preventDefault()}>
              <Fieldset title="Brewery Profile" subtitle="Update your public brewery information.">
                <Field>
                  <FieldLabel>Brewery Name</FieldLabel>
                  <Input defaultValue="Hoppy Trails Brewing" />
                </Field>
                <Field>
                  <FieldLabel>Contact Email</FieldLabel>
                  <Input type="email" defaultValue="hello@hoppytrails.com" />
                </Field>
                <FieldsetButtons>
                  <Button outline>Cancel</Button>
                  <Button type="submit">Save Changes</Button>
                </FieldsetButtons>
              </Fieldset>
            </Form>
          </Card>
        </Page>
      </div>
    </main>
  )
};
