import assert from "node:assert";
import test from "node:test";
import getMaxGifts from "./getMaxGifts.js";
const giftsCities = [12, 3, 11, 5, 7];
const maxGifts = 20;
const maxCities = 3;

test("Test #01", () => {
  assert.equal(typeof getMaxGifts(giftsCities, maxGifts, maxCities), "number");
});

test("Test #02", () => {
  assert.equal(getMaxGifts(giftsCities, maxGifts, maxCities), 20);
});

test("Test #03", () => {
  assert.equal(getMaxGifts([50], 15, 1), 0);
});

test("Test #04", () => {
  assert.equal(getMaxGifts([50], 100, 1), 50);
});

test("Test #05", () => {
  assert.equal(getMaxGifts([50, 70], 100, 1), 70);
});

test("Test #06", () => {
  assert.equal(getMaxGifts([50, 70, 30], 100, 2), 100);
});

test("Test #07", () => {
  assert.equal(getMaxGifts([50, 70, 30], 100, 3), 100);
});

test("Test #08", () => {
  assert.equal(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4), 100);
});

test("Test #09", () => {
  assert.equal(
    getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000),
    115
  );
});
