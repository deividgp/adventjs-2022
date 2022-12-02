import assert from "node:assert";
import test from "node:test";
import wrapping from "./wrapping.js";
const gifts = ["book", "game", "socks"];

test("Test #01", () => {
  assert.equal(Array.isArray(wrapping(gifts)), true);
});

test("Test #02", () => {
  const wrappedGifts = [
    "******\n*book*\n******",
    "******\n*game*\n******",
    "*******\n*socks*\n*******",
  ];
  assert.deepEqual(wrapping(gifts), wrappedGifts);
});

test("Test #03", () => {
  assert.deepEqual(wrapping(["midu"]), ["******\n*midu*\n******"]);
});

test("Test #04", () => {
  assert.deepEqual(wrapping(["a"]), ["***\n*a*\n***"]);
});

test("Test #05", () => {
  assert.deepEqual(wrapping([]), []);
});
