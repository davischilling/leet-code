import { describe, it, expect } from "vitest";
import { removeDuplicates } from "./remove-duplicates-from-sorted-array";

describe("Remove Duplicates from Sorted Array", () => {
    const nums: number[] = [1, 1, 2, 2, 3]; // Input array
    const expectedNums: number[] = [1, 2, 3]; // The expected answer with correct length
    it("should modify the array in place to remove duplicates", () => {
        removeDuplicates(nums);
        expect(nums.length).toBe(expectedNums.length);
        expect(nums).toEqual(expectedNums);
    });
});