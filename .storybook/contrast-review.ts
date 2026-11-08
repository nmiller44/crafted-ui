import axe from "axe-core";

export type ContrastResult = {
  status: "Pass" | "Fail" | "Needs review";
  ratio?: number;
  expected?: string;
  details?: string;
};

export function worstContrastResult(previous: ContrastResult | undefined, result: ContrastResult): ContrastResult {
  const priority = { Pass: 0, "Needs review": 1, Fail: 2 };
  if (!previous || priority[result.status] > priority[previous.status]
    || priority[result.status] === priority[previous.status] && result.ratio !== undefined
      && (previous.ratio === undefined || result.ratio < previous.ratio)) {
    return result;
  }
  return previous;
}

export function updatePlaceholderSamples(matrix: HTMLElement): void {
  const view = matrix.ownerDocument.defaultView;
  if (!view) throw new Error("Cannot read placeholder styles.");
  for (const mirror of matrix.querySelectorAll<HTMLElement>("[data-placeholder-sample]")) {
    const input = mirror.parentElement?.querySelector<HTMLInputElement>("input");
    if (!input) throw new Error("Placeholder sample is missing its input.");
    const placeholder = view.getComputedStyle(input, "::placeholder");
    const control = view.getComputedStyle(input);
    mirror.textContent = input.placeholder;
    mirror.style.color = placeholder.color;
    mirror.style.opacity = String(Number(placeholder.opacity) * Number(control.opacity));
    mirror.style.backgroundColor = control.backgroundColor;
    mirror.style.fontSize = placeholder.fontSize;
    mirror.style.fontWeight = placeholder.fontWeight;
    mirror.style.fontFamily = placeholder.fontFamily;
  }
}

export async function scanTextContrast(matrix: HTMLElement): Promise<Record<string, ContrastResult>> {
  const audit = await axe.run({
    include: Array.from(matrix.querySelectorAll<HTMLElement>("[data-review]")),
  }, {
    runOnly: { type: "rule", values: ["color-contrast"] },
    elementRef: true,
  });
  const results: Record<string, ContrastResult> = {};
  for (const [group, status] of [
    [audit.passes, "Pass"],
    [audit.incomplete, "Needs review"],
    [audit.violations, "Fail"],
  ] as const) {
    for (const rule of group) {
      for (const node of rule.nodes) {
        const id = node.element?.closest("[data-review]")?.getAttribute("data-review");
        if (!id) throw new Error("Cannot associate an axe contrast result with a review sample.");
        const data: unknown = [...node.any, ...node.all, ...node.none]
          .find((check) => check.id === "color-contrast")?.data;
        const result: ContrastResult = {
          status,
          ratio: data && typeof data === "object" && "contrastRatio" in data && typeof data.contrastRatio === "number"
            ? data.contrastRatio : undefined,
          expected: data && typeof data === "object" && "expectedContrastRatio" in data && typeof data.expectedContrastRatio === "string"
            ? data.expectedContrastRatio : undefined,
          details: node.failureSummary,
        };
        results[id] = worstContrastResult(results[id], result);
      }
    }
  }
  return results;
}

export function contrastRatio(first: readonly number[], second: readonly number[]): number {
  function luminance(color: readonly number[]) {
    if (color.length !== 3 || color.some((channel) => !Number.isFinite(channel) || channel < 0 || channel > 255)) {
      throw new Error("Contrast calculation requires three RGB channels between 0 and 255.");
    }
    return color.reduce((sum, channel, index) => {
      const value = channel / 255;
      return sum + (value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4)
        * [0.2126, 0.7152, 0.0722][index];
    }, 0);
  }
  const a = luminance(first);
  const b = luminance(second);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

export function scanNonTextContrast(matrix: HTMLElement): Record<string, ContrastResult> {
  const canvas = matrix.ownerDocument.createElement("canvas");
  canvas.width = canvas.height = 1;
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context) throw new Error("Cannot create the canvas needed to resolve non-text colors.");
  const style = matrix.ownerDocument.defaultView?.getComputedStyle.bind(matrix.ownerDocument.defaultView);
  if (!style) throw new Error("Cannot read rendered colors.");
  const results: Record<string, ContrastResult> = {};
  for (const sample of matrix.querySelectorAll<HTMLElement>("[data-nontext]")) {
    const id = sample.dataset.nontext;
    const foreground = sample.querySelector<HTMLElement>("[data-color-swatch]");
    if (!id || !foreground) throw new Error("Non-text sample is missing its ID or color swatch.");
    const background = style(sample).backgroundColor;
    const fill = style(foreground).backgroundColor;
    context.clearRect(0, 0, 1, 1);
    context.fillStyle = background;
    context.fillRect(0, 0, 1, 1);
    const base = context.getImageData(0, 0, 1, 1).data;
    if (base[3] !== 255) throw new Error("Non-text samples require an opaque adjacent surface.");
    context.fillStyle = fill;
    context.fillRect(0, 0, 1, 1);
    const ink = context.getImageData(0, 0, 1, 1).data;
    const ratio = contrastRatio(Array.from(base).slice(0, 3), Array.from(ink).slice(0, 3));
    results[id] = { status: ratio >= 3 ? "Pass" : "Fail", ratio, expected: "3:1" };
  }
  return results;
}
