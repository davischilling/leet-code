import { describe, it, expect } from "vitest";
import { maxProfit } from "./best-time-to-buy";

describe("maxProfit", () => {

    it("should return profit correctly", () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const profit = maxProfit(prices);
        expect(profit).toBe(7);

        const prices2 = [1, 2, 3, 4, 5];
        const profit2 = maxProfit(prices2);
        expect(profit2).toBe(4);

        const prices3 = [7, 6, 4, 3, 1];
        const profit3 = maxProfit(prices3);
        expect(profit3).toBe(0);
    });
});