import assert from "node:assert";
import test from "node:test";
import getGiftsToRefill from "./getGiftsToRefill.js";
const a1 = ["bike", "car", "bike", "bike"];
const a2 = ["car", "bike", "doll", "car"];
const a3 = ["bike", "pc", "pc"];

test("Test #01", () => {
  assert.equal(Array.isArray(getGiftsToRefill(a1, a2, a3)), true);
});

test("Test #02", () => {
  assert.deepEqual(getGiftsToRefill(a1, a2, a3), ["doll", "pc"]);
});

test("Test #03", () => {
  assert.deepEqual(getGiftsToRefill([], [], []), []);
});

test("Test #04", () => {
  assert.deepEqual(getGiftsToRefill(["a", "a"], ["a", "a"], ["a", "a"]), []);
});

test("Test #05", () => {
  assert.deepEqual(getGiftsToRefill(["a", "b"], ["c", "d"], ["e", "f"]), [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ]);
});

test("Test #06", () => {
  assert.deepEqual(getGiftsToRefill(["a", "b"], ["c", "d"], ["e", "f"]), [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ]);
});
