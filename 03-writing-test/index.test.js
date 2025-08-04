import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("Sum 1 dan 2 = 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});

test("Sum -1 dan -1 = -2", () => {
  assert.strictEqual(sum(-1, -1), -2);
});

test("Sum 1.5 dan 2.5 = 4", () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
});
