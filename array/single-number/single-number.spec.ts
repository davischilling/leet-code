import { describe, it, expect } from "vitest";
import { singleNumber } from "./single-number";

describe("singleNumber", () => {
    it("returns the single number when all others appear twice", () => {
        expect(singleNumber([2, 2, 1])).toBe(1);
        expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
        expect(singleNumber([7, 3, 5, 3, 7])).toBe(5);
    });

    it("returns the number itself for single-element array", () => {
        expect(singleNumber([99])).toBe(99);
    });

    it("returns 0 for empty array (edge case)", () => {
        expect(singleNumber([])).toBe(0);
    });
});
