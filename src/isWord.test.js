import { isWord } from "./isWord";

describe("isWord", () => {
  it("яблоко - одно слово", () => {
    expect(isWord("яблоко")).toBe(true);
  });
  it("красное яблоко - два слова", () => {
    expect(isWord("красное яблоко")).toBe(false);
  });
});
