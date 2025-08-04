import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("Sum 1 dan 2 = 3", () => {
  assert.strictEqual(sum(1, 2), 3);
});

test("Sum 1.5 dan 2.5 = 4", () => {
  assert.strictEqual(sum(1.5, 2.5), 4);
});

test("Sum -1 dan -1 = 0 (Karena akan return 0 untuk angka negatif)", () => {
  assert.strictEqual(sum(-1, -1), 0);
});

test('Sum 1 dan "a" = 0 (Karena input tidak valid)', () => {
  assert.strictEqual(sum(1, "a"), 0);
});
