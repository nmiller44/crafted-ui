import { useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";
import { Badge, type BadgeProps } from "../badge/Badge";
import { Alert } from "../alert/Alert";
import { Input } from "../input/Input";
import { Heading3 } from "../heading/Heading3";
import type { Clr } from "../types/colors";
import { scanTextContrast, scanNonTextContrast, updatePlaceholderSamples, type ContrastResult } from "../../.storybook/contrast-review";

const meta = {
  title: "CraftedUI/Colors/Accessibility",
  parameters: {
    a11y: { options: { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"] } } },
  },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;
type Mode = "tokens" | "components" | "nontext";
type Sample = { id: string; title: string; sources: string; kind: string; content: ReactNode; guidance: string };

const surfaces = ["background", "card", "popover", "muted", "input"] as const;
const semantic = ["primary", "muted", "secondary", "accent", "destructive"] as const;
const statuses = ["danger", "warning", "success", "info"] as const;
const buttonColors = [
  "blank", "dark", ...semantic, ...statuses, "slate", "gray", "zinc", "neutral", "stone",
  "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky",
  "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose",
] satisfies Clr[];
const badgeColors = [
  "blank", "default", ...semantic, ...statuses, "green", "red", "yellow", "blue", "indigo", "purple", "pink",
] satisfies NonNullable<BadgeProps["clr"]>[];
const pairingGuidance = "Declared pair failure: review the shared foreground/background values and all consumers. A small foreground adjustment may suffice. Approval is required before changing tokens.";
const mappingGuidance = "Mapping failure: compare the declared pair story first. A surface token used as text, fixed white text, shade selection, or opacity blend may need a mapping/state fix rather than a global token change.";

function tokenSamples(): Sample[] {
  const declared = [
    ["background", "foreground"], ["card", "card-foreground"], ["popover", "popover-foreground"],
    ...semantic.map((name) => [name, `${name}-foreground`]),
  ];
  const samples = declared.map(([background, foreground]) => ({
    id: `pair-${background}`, title: `${foreground} on ${background}`, kind: "Declared token pair",
    sources: `--${foreground} / --${background}`, guidance: pairingGuidance,
    content: <p data-review={`pair-${background}`} style={{ color: `var(--${foreground})`, backgroundColor: `var(--${background})`, padding: 16, fontSize: 14 }}>Crafted color contrast</p>,
  }));
  for (const surface of surfaces) {
    for (const foreground of ["foreground", "muted-foreground"]) {
      const id = `surface-${surface}-${foreground}`;
      samples.push({
        id, title: `${foreground} on ${surface}`, kind: "Surface usage pairing",
        sources: `--${foreground} / --${surface}`, guidance: mappingGuidance,
        content: <p data-review={id} style={{ color: `var(--${foreground})`, backgroundColor: `var(--${surface})`, padding: 16, fontSize: 14 }}>Crafted surface text</p>,
      });
    }
  }
  for (const status of statuses) {
    for (const text of ["white", "black"]) {
      const id = `status-${status}-${text}`;
      samples.push({
        id, title: `${text} on ${status}`, kind: "Status foreground candidate (not a declared pair)",
        sources: `--color-${text} / --${status}`, guidance: "Status tokens have no declared foreground partners. Compare black and white candidates; a failure here does not alone justify changing the status background.",
        content: <p data-review={id} style={{ color: `var(--color-${text})`, backgroundColor: `var(--${status})`, padding: 16, fontSize: 14 }}>Crafted status text</p>,
      });
    }
  }
  return samples;
}

function buttonSources(clr: Clr, variant: string) {
  const named = !["blank", "dark", ...semantic, ...statuses].includes(clr);
  const ink = clr === "blank" || clr === "dark" ? "--foreground" : named ? `--color-${clr}-600` : `--${clr}`;
  if (variant === "ghost") return `default --muted-foreground; hover/focus ${ink}; focus --muted/30; adjacent selected surface`;
  if (variant === "outline") return `${ink} text/border; hover ${named ? `--color-${clr}-50` : `${ink}/${clr === "muted" ? "80" : "10"}`} over selected surface`;
  if (clr === "blank") return "--foreground / transparent; hover --foreground/10 over selected surface";
  if (clr === "dark") return "--background / --foreground; hover --foreground/80 over selected surface";
  if (semantic.some((value) => value === clr)) return `--${clr}-foreground / --${clr}; hover /80 (muted /10) over selected surface`;
  if (statuses.some((value) => value === clr)) return `--color-white / --${clr}; hover /80 over selected surface`;
  return `--color-white / --color-${clr}-600; hover --color-${clr}-500`;
}

function componentSamples(): Sample[] {
  const samples: Sample[] = buttonColors.flatMap((clr) => ["filled", "outline", "ghost"].map((variant) => {
    const id = `button-${clr}-${variant}`;
    return {
      id, title: `Button ${clr} ${variant}`, kind: "Component mapping",
      sources: buttonSources(clr, variant), guidance: mappingGuidance,
      content: <Button clr={clr} outline={variant === "outline" || undefined} ghost={variant === "ghost" || undefined} data-review={id}>Reserve tasting</Button>,
    };
  }));
  for (const clr of badgeColors) {
    for (const outline of [false, true]) {
      const id = `badge-${clr}-${outline ? "outline" : "filled"}`;
      const named = ["green", "red", "yellow", "blue", "indigo", "purple", "pink"].includes(clr);
      const text = clr === "blank" || clr === "default" ? "foreground" : clr === "muted" ? "muted-foreground" : clr;
      samples.push({
        id, title: `Badge ${clr} ${outline ? "outline" : "filled"}`, kind: "Component mapping",
        sources: named ? `--color-${clr}-800 text / ${outline ? "transparent" : `--color-${clr}-100`}`
          : `--${text} text / ${outline || clr === "blank" ? "transparent" : `--${text}/10`} over selected surface`,
        guidance: mappingGuidance,
        content: <Badge clr={clr} outline={outline || undefined} data-review={id}>Tasting label</Badge>,
      });
    }
  }
  for (const status of statuses) {
    const id = `alert-${status}`;
    samples.push({
      id, title: `Alert ${status}`, kind: "Component mapping", sources: `--${status} text / --${status}/10 over selected surface; border --${status}/50; title --foreground`,
      guidance: mappingGuidance,
      content: <Alert status={status} title="Tasting update" data-review={id}>Your reservation has changed.</Alert>,
    });
  }
  samples.push({
    id: "input-placeholder", title: "Input placeholder", kind: "Component mapping",
    sources: "--muted-foreground placeholder / transparent over selected surface", guidance: mappingGuidance,
    content: <div data-review="input-placeholder">
      <Input aria-label="Tasting name" placeholder="Enter a tasting name" />
      <span data-placeholder-sample className="block text-sm">Scan resolves the actual placeholder color here.</span>
    </div>,
  }, {
    id: "heading-subtitle", title: "Heading subtitle", kind: "Component mapping",
    sources: "--muted-foreground subtitle / transparent over selected surface; title --foreground", guidance: mappingGuidance,
    content: <Heading3 title="Upcoming tastings" subtitle="Choose your next tasting" data-review="heading-subtitle" />,
  });
  return samples;
}

function nonTextSamples(surface: string): Sample[] {
  return ["ring", "border", "input", ...statuses].map((token) => {
    const id = `nontext-${token}`;
    return {
      id, title: `${token} against ${surface}`, kind: token === "ring" ? "Focus indicator color candidate" : "Non-text candidate (context required)",
      sources: `--${token} / --${surface}`,
      guidance: "3:1 applies when this color is necessary to identify a control, state, or meaningful graphic. Decorative separators are not automatically violations. These are token swatches, not certification of actual borders, rings, icons, or focus geometry.",
      content: <div data-nontext={id} style={{ backgroundColor: `var(--${surface})`, padding: 16 }}>
        <div data-color-swatch style={{ backgroundColor: `var(--${token})`, height: 24, width: 64 }} />
      </div>,
    };
  });
}

function Matrix({ mode, surface, dark }: { mode: Mode; surface: string; dark: boolean }) {
  const matrix = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const [results, setResults] = useState<Record<string, ContrastResult>>({});
  const [running, setRunning] = useState(false);
  const [error, setError] = useState("");
  const [findingsOnly, setFindingsOnly] = useState(true);
  const samples = mode === "tokens" ? tokenSamples() : mode === "components" ? componentSamples() : nonTextSamples(surface);

  async function scan() {
    if (busy.current) return;
    busy.current = true;
    // axe must inspect rendered samples, including those hidden by the findings filter.
    flushSync(() => {
      setRunning(true);
      setResults({});
      setError("");
    });
    try {
      if (!matrix.current) throw new Error("Color review matrix is not available.");
      if (matrix.current.ownerDocument.documentElement.classList.contains("dark") !== dark) {
        throw new Error("Theme styles are still updating. Wait and scan again.");
      }
      updatePlaceholderSamples(matrix.current);
      setResults(mode === "nontext" ? scanNonTextContrast(matrix.current) : await scanTextContrast(matrix.current));
    } catch (cause) {
      console.error("Color accessibility scan failed", cause);
      setError(cause instanceof Error ? cause.message : String(cause));
    } finally {
      busy.current = false;
      setRunning(false);
    }
  }

  const failures = samples.filter((sample) => results[sample.id]?.status === "Fail");
  const pass = Object.values(results).filter((result) => result.status === "Pass").length;
  const incomplete = Object.values(results).filter((result) => result.status === "Needs review").length;
  return <div className="space-y-6" onKeyDown={(event) => {
    if (event.altKey && event.key.toLowerCase() === "c") {
      event.preventDefault();
      void scan();
    }
  }}>
    <div className="flex flex-wrap items-center gap-4">
      <Button clr="dark" disabled={running} onClick={() => void scan()}>Scan colors</Button>
      <Checkbox checked={findingsOnly} disabled={running} onCheckedChange={setFindingsOnly}>Findings only</Checkbox>
    </div>
    <p role="status">{running ? "Scanning colors..." : `${pass} passed, ${failures.length} failed, ${incomplete} need review, ${samples.length - Object.keys(results).length} not checked. Theme: ${dark ? "dark" : "light"}; surface: ${surface}. Snapshot only.`}</p>
    {error && <p role="alert">Color scan failed: {error}</p>}
    <section aria-label="Color findings" className="space-y-3">
      <h2 className="text-xl font-bold">Pairs needing review</h2>
      {!running && !failures.length && <p>{Object.keys(results).length ? "No measured failures. Check incomplete/unreported samples and manual requirements before drawing conclusions." : "Not assessed. Run a scan, or turn off Findings only to browse samples."}</p>}
    </section>
    <div ref={matrix} className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {samples.map((sample) => {
        const result = results[sample.id];
        const hidden = findingsOnly && !running && (Object.keys(results).length === 0 || result?.status === "Pass");
        return <section key={sample.id} hidden={hidden} className="space-y-2" data-color-result={result?.status ?? "Not checked"} data-sample={sample.id}>
          <h2 className="font-semibold">{sample.title}</h2>
          <p className="text-sm">{sample.kind}: {sample.sources}</p>
          <div style={{ border: `2px solid ${result?.status === "Fail" ? "#dc2626" : "transparent"}`, padding: 4 }}>{sample.content}</div>
          <p className="text-sm" title={result?.details}>{result?.status ?? "Not checked"}{result?.ratio !== undefined && `: ${result.ratio.toFixed(2)}:1`}{result?.expected && ` (required ${result.expected})`}</p>
          {result && result.status !== "Pass" && <p className="text-sm">{sample.guidance}</p>}
        </section>;
      })}
    </div>
  </div>;
}

function ColorReview({ mode, dark }: { mode: Mode; dark: boolean }) {
  const [surface, setSurface] = useState<typeof surfaces[number]>("background");
  return <main className="min-h-screen space-y-6 p-6" style={{ backgroundColor: `var(--${surface})`, color: "var(--foreground)" }}>
    <h1 className="text-2xl font-bold">Color accessibility: {mode === "tokens" ? "token pairs" : mode === "components" ? "component mappings" : "non-text pairs"}</h1>
    <p>Review shared colors before changing individual components. Token pairs use real CSS variables; component mappings render the actual Button, Badge, Alert, Input, and Heading3 implementations. No tokens are changed by this story.</p>
    <p>Text uses axe's color-contrast rule (normal text requires 4.5:1). Non-text swatches use a separate 3:1 calculation with contextual applicability. Scan each theme and relevant surface separately; changing theme/surface clears results. Results are not a WCAG conformance score.</p>
    <details>
      <summary>Review instructions and limitations</summary>
      <p>Findings only is enabled by default. After scanning, it shows failures, incomplete results, and unreported samples, not passing samples. Turn it off to browse all samples. Every scan checks the full matrix, temporarily revealing all samples while running.</p>
      <p>For interaction checks, turn off Findings only before hovering or keyboard-focusing a component, then press Alt+C inside the matrix to re-scan without moving pointer/focus. Keeping the full layout visible prevents filtering from moving samples under the pointer. This does not automatically explore interaction states. Disabled controls, custom themes, imagery, gradients, other components, forced colors, focus geometry, and color-only meaning require separate reviews.</p>
    </details>
    {mode === "components" && <p>The Input sample mirrors its actual computed placeholder styles into visible text during scanning, because axe may otherwise assess the input's value color instead of its placeholder. Multi-text samples report the worst result, never let a passing title hide failing content.</p>}
    <nav aria-label="Review surface" className="flex flex-wrap gap-2">
      {surfaces.map((value) => <Button key={value} clr="dark" outline={surface !== value || undefined} aria-pressed={surface === value} onClick={() => setSurface(value)}>{value}</Button>)}
    </nav>
    <Matrix key={`${dark}-${surface}`} mode={mode} surface={surface} dark={dark} />
  </main>;
}

const manual = "Repeat scans in light/dark and relevant surfaces. Inspect failing declared pairs before component mappings; do not change tokens automatically. Check hover/focus with Alt+C. Manually assess non-text applicability, actual indicator contrast/geometry, forced colors, and information not conveyed by color alone. Record findings and obtain approval for token changes.";

export const TokenPairs: Story = {
  render: (_args, context) => <ColorReview mode="tokens" dark={context.globals.theme === "dark"} key={String(context.globals.theme)} />,
  parameters: { docs: { description: { story: manual } } },
};
export const ComponentMappings: Story = {
  render: (_args, context) => <ColorReview mode="components" dark={context.globals.theme === "dark"} key={String(context.globals.theme)} />,
  parameters: { docs: { description: { story: manual } } },
};
export const NonTextPairs: Story = {
  render: (_args, context) => <ColorReview mode="nontext" dark={context.globals.theme === "dark"} key={String(context.globals.theme)} />,
  parameters: { docs: { description: { story: manual } } },
};
