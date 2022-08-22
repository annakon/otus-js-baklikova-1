import { sum } from "./sum";

describe("sum", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    {
      a: 1,
      b: 2,
      result: 3,
      resultMult: 2,
    },
    {
      a: 2,
      b: 2,
      result: 4,
      resultMult: 4,
    },
    {
      a: 5,
      b: 5,
      result: 10,
      resultMult: 25,
    },
  ].forEach(({ a, b, result, resultMult }) =>
    it(`prints ${result},${resultMult} for ${a} and ${b}`, () => {
      jest.spyOn(console, "log");
      sum(a, b);
      expect(console.log).toHaveBeenCalledWith(
        `Сумма ${result} Произведение ${resultMult}`
      );
    })
  );
});
