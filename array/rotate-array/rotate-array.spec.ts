import { describe, it, expect } from "vitest";
import { rotateThreeReverse, rotateExtraArray, rotateCyclicReplacements } from "./rotate-array";

describe("Rotate array", () => {

    describe("ThreeReverse", () => {
        it("should rotate array correctly", () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            const k = 3;
            rotateThreeReverse(nums, k);
            expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
        });
    })

    describe("ExtraArray", () => {
        it("should rotate array correctly for k = 3", () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            const k = 3;
            rotateExtraArray(nums, k);
            expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
        });

        it("should rotate array correctly for k = 0 (no rotation)", () => {
            const nums = [1, 2, 3, 4, 5];
            const k = 0;
            rotateExtraArray(nums, k);
            expect(nums).toEqual([1, 2, 3, 4, 5]);
        });

        it("should rotate array correctly for k > n", () => {
            const nums = [1, 2, 3, 4, 5];
            const k = 7; // 7 % 5 = 2
            rotateExtraArray(nums, k);
            expect(nums).toEqual([4, 5, 1, 2, 3]);
        });
    });

    describe("CyclicReplacements", () => {
        it("should rotate array correctly for k = 3", () => {
            const nums = [1, 2, 3, 4, 5, 6, 7];
            const k = 3;
            rotateCyclicReplacements(nums, k);
            expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
        });

        it("should rotate array correctly for k = 0 (no rotation)", () => {
            const nums = [1, 2, 3, 4, 5];
            const k = 0;
            rotateCyclicReplacements(nums, k);
            expect(nums).toEqual([1, 2, 3, 4, 5]);
        });

        it("should rotate array correctly for k > n", () => {
            const nums = [1, 2, 3, 4, 5];
            const k = 7; // 7 % 5 = 2
            rotateCyclicReplacements(nums, k);
            expect(nums).toEqual([4, 5, 1, 2, 3]);
        });
    });
});