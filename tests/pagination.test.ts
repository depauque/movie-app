import { describe, expect, it } from "vitest";
import { getPagesArray } from "../src/utils/pagination";

describe("getPagesArray", () => {
  it("returns [] when totalItems is 0", () => {
    expect(getPagesArray(0, 8)).toEqual([]);
  });

  it("returns [1] when totalItems fits one page", () => {
    expect(getPagesArray(8, 8)).toEqual([1]);
    expect(getPagesArray(1, 8)).toEqual([1]);
  });

  it("returns [1, 2] when totalItems spans two pages", () => {
    expect(getPagesArray(9, 8)).toEqual([1, 2]);
    expect(getPagesArray(16, 8)).toEqual([1, 2]);
  });

  it("throws error when itemsPerPage is not positive", () => {
    expect(() => getPagesArray(10, 0)).toThrowError(/itemsPerPage/i);
  });
});
