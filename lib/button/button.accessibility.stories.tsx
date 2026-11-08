import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import { IconPlus } from "../icons";

const meta = {
  title: "CraftedUI/Components/Button/Accessibility",
  component: Button,
  parameters: {
    a11y: {
      options: {
        runOnly: {
          type: "tag",
          values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"],
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <main className="min-h-screen bg-background p-6 text-foreground">
        <Story />
      </main>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

function KeyboardFixture() {
  const [activations, setActivations] = useState(0);
  const activate = () => setActivations((count) => count + 1);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Button keyboard and screen-reader review</h1>
      <p id="button-review-help">Use Tab and Shift+Tab. Activate enabled actions with Enter and Space. The disabled action must be skipped.</p>
      <div className="flex flex-wrap gap-4">
        <Button onClick={activate} aria-describedby="button-review-help">Reserve tasting</Button>
        <Button disabled onClick={activate}>Unavailable tasting</Button>
        <Button outline onClick={activate}>View tasting details</Button>
        <Button ghost aria-label="Add tasting" onClick={activate}><IconPlus aria-hidden="true" /></Button>
        <Button ghost onClick={activate}>More tasting options</Button>
        <Button rounded onClick={activate}>Confirm tasting</Button>
      </div>
      <p role="status">Actions activated: {activations}</p>
      <Button full onClick={activate}>A long tasting reservation action that should wrap without clipping at narrow widths</Button>
    </div>
  );
}

export const KeyboardAndScreenReader: Story = {
  render: () => <KeyboardFixture />,
  parameters: {
    docs: {
      description: {
        story: [
          "Manual review: Tab/Shift+Tab through enabled actions; disabled action must be skipped.",
          "Enter and Space must increment the counter exactly once per activation.",
          "Confirm visible focus on filled, outline, ghost/icon-only, rounded, and full-width actions.",
          "Click each variant with a pointer: subtle focus/pressed feedback should remain, without a focus ring unless the browser matches focus-visible. Tab to text and icon-only ghost buttons: both must show a ring with an offset.",
          "With a screen reader, confirm button names, disabled state, help description, and counter announcements.",
          "At 200% zoom and a 320 CSS-pixel viewport, confirm text wraps and focus is not clipped.",
          "Repeat in dark theme and with reduced motion. Record screen-reader/browser versions; this story is not evidence of a completed manual review.",
          "Color-token and component color-mapping assessments are managed by CraftedUI / Colors / Accessibility.",
        ].join("\n"),
      },
    },
  },
};

export const Links: Story = {
  render: () => (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Button link composition review</h1>
      <Button><a href="#tasting-details">View tasting details</a></Button>
      <section id="tasting-details" className="space-y-2">
        <h2 className="text-xl font-bold">Tasting details</h2>
        <p>Review the link's role, tab stops, Enter activation, and destination.</p>
      </section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "This fixture reproduces the currently documented link composition; do not suppress nested-interactive findings. Check whether it exposes both a button and a link, whether Tab stops twice, and whether Enter on the outer button navigates.",
      },
    },
  },
};
