import { multiply7 } from "./multiply7";

describe("multiply7", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: 1, result: 7 },
    { a: 2, result: 14 },
    { a: 3, result: 21 },
    { a: 4, result: 28 },
    { a: 5, result: 35 },
    { a: 6, result: 42 },
    { a: 7, result: 49 },
    { a: 8, result: 56 },
    { a: 9, result: 63 },
  ].forEach(({ a, result }) =>
    it(`prints ${result} for ${a}`, () => {
      jest.spyOn(console, "log");
      multiply7();
      expect(console.log).toHaveBeenCalledWith(`7*${a} = ${result}`);
    })
  );
});
