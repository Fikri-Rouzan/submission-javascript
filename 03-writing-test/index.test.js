import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("sum 1 dan 2 adalah 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});

test("sum -1 dan -1 adalah -2", () => {
  assert.strictEqual(sum(-1, -1), -2);
});

test("sum 1.5 dan 2.5 adalah 4", () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
});
