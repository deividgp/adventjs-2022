import assert from "node:assert";
import test from "node:test";
import fitsInOneBox from "./fitsInOneBox.js";

test("Test #01", () => {
  assert.equal(
    typeof fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ]),
    "boolean"
  );
});

test("Test #02", () => {
  assert.equal(
    fitsInOneBox([
      { l: 1, w: 1, h: 10 },
      { l: 3, w: 3, h: 12 },
      { l: 2, w: 2, h: 1 },
    ]),
    false
  );
});

test("Test #03", () => {
  assert.equal(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ]),
    true
  );
});

test("Test #04", () => {
  assert.equal(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ]),
    false
  );
});

test("Test #05", () => {
  assert.equal(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 },
    ]),
    false
  );
});

test("Test #06", () => {
  assert.equal(
    fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 },
    ]),
    true
  );
});
