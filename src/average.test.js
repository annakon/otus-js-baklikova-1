import { average } from "./average";

describe("average", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: 5, result: 3 },
    { a: 7, result: 4 },
    { a: 16, result: 8 },
  ].forEach(({ a, result }) => {
    it(`среднеарифметическое нечетных чисел с 1 до ${a} равно ${result}`, () => {
      jest.spyOn(console, "log");
      jest.spyOn(window, "prompt").mockImplementation(() => a);
      average();
      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
