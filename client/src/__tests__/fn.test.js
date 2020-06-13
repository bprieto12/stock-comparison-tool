import fn from "../fn";

describe("Test Jest fn for TDD", () => {
    test("Test function passes", () => {
        let result = fn();
        expect(result).toBe(true);
    })
})