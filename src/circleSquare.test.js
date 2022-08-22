import { circleSquare } from "./circleSquare";

describe("circleSquare", () => {
  it("return true for 16,26", () => {
    expect(circleSquare(16, 26)).toBe(true);
  });
  it("return false for 26,16", () => {
    expect(circleSquare(26, 16)).toBe(false);
  });
});
