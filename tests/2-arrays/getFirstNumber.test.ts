import { describe, it, expect } from "vitest";
import { getFirstNumber } from "../../functions/2-arrays";

describe("getFirstNumber", () => {
    it("retourne le premier nombre du tableau", () => {
        expect(getFirstNumber([10, 20, 30])).toBe(10);
        expect(getFirstNumber([99, 1, 2])).toBe(99);
    });

    it("retourne -1 si le tableau est vide", () => {
        expect(getFirstNumber([])).toBe(-1);
    });
});
