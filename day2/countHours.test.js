import assert from "node:assert";
import test from "node:test";
import countHours from "./countHours.js";
const year = 2022;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD

test("Test #01", () => {
  assert.equal(typeof countHours(year, holidays), "number");
});

test("Test #02", () => {
  assert.equal(countHours(2023, ["01/06", "04/01", "12/25"]), 4);
});

test("Test #03", () => {
  assert.equal(countHours(year, holidays), 4);
});

test("Test #04", () => {
  assert.equal(
    countHours(1985, [
      "01/01",
      "01/06",
      "02/02",
      "02/17",
      "02/28",
      "06/03",
      "12/06",
      "12/25",
    ]),
    10
  );
});

test("Test #05", () => {
  assert.equal(countHours(2000, ["01/01"]), 0);
});
