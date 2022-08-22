import { maxminArray, mult2Array, sumArray } from "./array";

describe("sumArray", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("сумма 112", () => {
    jest.spyOn(console, "log");
    sumArray();
    expect(console.log).toHaveBeenCalledWith(112);
  });
});

describe("mult2Array", () => {
  it("каждый элемент массива умножен на 2", () => {
    expect(mult2Array()).toStrictEqual([8, 50, 0, 22, 14, 28, 16, 42, 44, 0]);
  });
});

describe("maxminArray", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("максимум 25, минимум 0", () => {
    jest.spyOn(console, "log");
    maxminArray();
    expect(console.log).toHaveBeenCalledWith("max=25 min=0");
  });
});
