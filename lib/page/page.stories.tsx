import type { Meta, StoryObj } from '@storybook/react-vite';

import { Page } from './Page';
import { PageHeader } from './PageHeader';
import { Section } from '../section/Section';
import { Button } from '../button/Button';
import { Heading1 } from '../heading/Heading1';
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

const meta = {
  title: 'CraftedUI/Layout/Page',
  component: Page,
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Feature: Story = {
  args: {},
  render: (args) => (
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

        <div className="w-full grow max-w-container mx-auto px-6 lg:px-8 py-6 space-y-8">
          <Breadcrumb>
            <BreadcrumbList className="flex-wrap">
              <BreadcrumbListItem><a href="#">Sales</a></BreadcrumbListItem>
              <BreadcrumbSeparator />
              <BreadcrumbListItem><a href="#">Logistics</a></BreadcrumbListItem>
              <BreadcrumbSeparator />
              <BreadcrumbListItem><span className="active" aria-current="page">Delivery Plan</span></BreadcrumbListItem>
            </BreadcrumbList>
          </Breadcrumb>

          <PageHeader
            title="Delivery Plan"
            subtitle="Manage outbound routes and delivery timing."
          >
            <Button outline>Export</Button>
            <Button clr="primary">Add Stop</Button>
          </PageHeader>

          <Page {...args}>
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
          </Page>
        </div>
    </div>
  )
};

export const TitleProp: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-xl px-6 py-6 lg:px-8 lg:py-8 space-y-8">
      <Page title="Sales Delivery Plan" subtitle="Using the title and subtitle props on Page.">
        <Section title="How This Works">
          <div className="space-y-3 text-sm">
            <p>
              The parent layout provides width, horizontal padding, and vertical spacing.
              Page then renders PageHeader from the title prop and wraps the page content.
            </p>
            <p>
              Use the <strong>title</strong> and <strong>subtitle</strong> props on Page for the standard page heading.
              When either prop is present, Page automatically renders PageHeader above the content.
            </p>
          </div>
        </Section>
      </Page>
    </div>
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

