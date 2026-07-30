import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../button";
import { Page } from "../page";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "../table";
import { Loader } from "./Loader";

const meta = {
  title: "CraftedUI/Components/Loader",
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

export const Feature: Story = {
  args: {},
  render: (args) => (

      <Page title="Inventory Dashboard" subtitle="Live taproom and warehouse inventory">
        <Table>
          <TableHead>
            <TableHeadCell>Beer</TableHeadCell>
            <TableHeadCell>Style</TableHeadCell>
            <TableHeadCell>ABV</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell colspan={4}>
                <div className="flex items-center justify-center gap-3 py-12 text-sm text-muted-foreground">
                  <Loader {...args} label="Loading inventory rows" />
                  <span>Loading inventory rows...</span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Page>
  ),
};

export const EmbeddedUsage: Story = {
  args: {},
  render: (args) => (
    <div className="max-w-lg space-y-6">
      <div className="space-y-3">
        <div className="text-sm text-muted-foreground">Primary action loading state</div>
        <Button clr="primary" disabled>
          <Loader {...args} size="sm" label="Saving brew recipe" />
          <span>Saving Recipe</span>
        </Button>
      </div>

      <div className="space-y-3">
        <div className="text-sm text-muted-foreground">Inline loading indicator in content flow</div>
        <p className="text-sm text-foreground flex items-center gap-2">
          <Loader {...args} size="xs" />
          <span>Syncing keg inventory with taproom dashboard</span>
        </p>
      </div>
    </div>
  ),
};

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="space-y-6 max-w-lg">
      <div className="flex items-center gap-4">
        <Loader {...args} size="xs" />
        <Loader {...args} size="sm" />
        <Loader {...args} />
        <Loader {...args} size="lg" />
      </div>

      <div className="flex items-center gap-4">
        <Loader {...args} clr="foreground" />
        <Loader {...args} clr="primary" />
        <Loader {...args} clr="muted" />
        <Loader {...args} clr="accent" />
        <Loader {...args} clr="destructive" />
        <Loader {...args} clr="success" />
      </div>
    </div>
  ),
};
