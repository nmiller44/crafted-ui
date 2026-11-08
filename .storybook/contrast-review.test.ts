import assert from "node:assert/strict";
import test from "node:test";
import { contrastRatio, worstContrastResult } from "./contrast-review.ts";

test("black and white have 21:1 contrast in either order", () => {
  assert.equal(contrastRatio([0, 0, 0], [255, 255, 255]), 21);
  assert.equal(contrastRatio([255, 255, 255], [0, 0, 0]), 21);
});

test("identical colors have 1:1 contrast", () => {
  assert.equal(contrastRatio([107, 107, 107], [107, 107, 107]), 1);
});

test("thresholds use the unrounded ratio", () => {
  assert.ok(contrastRatio([119, 119, 119], [255, 255, 255]) < 4.5);
  assert.ok(contrastRatio([118, 118, 118], [255, 255, 255]) >= 4.5);
  assert.ok(contrastRatio([149, 149, 149], [255, 255, 255]) < 3);
  assert.ok(contrastRatio([148, 148, 148], [255, 255, 255]) >= 3);
});

test("invalid channels are rejected, never reported as a pass", () => {
  for (const color of [[0, 0], [0, 0, 0, 0], [-1, 0, 0], [256, 0, 0], [NaN, 0, 0]]) {
    assert.throws(() => contrastRatio(color, [255, 255, 255]), /three RGB channels/);
  }
});

test("a passing title cannot hide failing or incomplete content", () => {
  assert.equal(worstContrastResult({ status: "Fail", ratio: 2 }, { status: "Pass", ratio: 10 }).status, "Fail");
  assert.equal(worstContrastResult({ status: "Pass", ratio: 10 }, { status: "Needs review" }).status, "Needs review");
  assert.equal(worstContrastResult({ status: "Needs review" }, { status: "Fail", ratio: 2 }).status, "Fail");
  assert.equal(worstContrastResult({ status: "Fail", ratio: 3 }, { status: "Fail", ratio: 2 }).ratio, 2);
  assert.equal(worstContrastResult({ status: "Fail", ratio: 2 }, { status: "Fail", ratio: 3 }).ratio, 2);
});
