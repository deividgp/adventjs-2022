import assert from "node:assert";
import test from "node:test";
import distributeGifts from "./distributeGifts.js";
const gifts = ["book", "game", "socks"];
const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

test("Test #01", () => {
  assert.equal(typeof distributeGifts(packOfGifts, reindeers), "number");
});

test("Test #02", () => {
  assert.equal(distributeGifts(packOfGifts, reindeers), 2);
});

test("Test #03", () => {
  assert.equal(distributeGifts(["a", "b", "c"], ["d", "e"]), 1);
});

test("Test #04", () => {
  assert.equal(distributeGifts(["videogames", "console"], ["midu"]), 0);
});

test("Test #05", () => {
  assert.equal(
    distributeGifts(
      ["game", "videoconsole", "computer"],
      [
        "midudev",
        "pheralb",
        "codingwithdani",
        "carlosble",
        "blasco",
        "facundocapua",
        "madeval",
        "memxd",
      ]
    ),
    5
  );
});

test("Test #06", () => {
  assert.equal(
    distributeGifts(
      ["music"],
      [
        "midudev",
        "pheralb",
        "codingwithdani",
        "carlosble",
        "blasco",
        "facundocapua",
        "madeval",
        "memxd",
      ]
    ),
    26
  );
});
