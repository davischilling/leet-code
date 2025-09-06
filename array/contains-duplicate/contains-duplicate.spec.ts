import { describe, it, expect } from "vitest";
import { containsDuplicate } from "./contains-duplicate";

describe("containsDuplicate", () => {
    it("returns true for array with duplicates", () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
        expect(containsDuplicate([2, 2, 2, 2])).toBe(true);
        expect(containsDuplicate([1, 2, 3, 4, 5, 5])).toBe(true);
    });

    it("returns false for array with all unique elements", () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
        expect(containsDuplicate([5, 6, 7, 8, 9])).toBe(false);
    });

    it("returns false for empty array", () => {
        expect(containsDuplicate([])).toBe(false);
    });

    it("returns false for single element array", () => {
        expect(containsDuplicate([42])).toBe(false);
    });
});
