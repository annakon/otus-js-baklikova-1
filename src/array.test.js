import {mult2Array, sumArray} from "./array";

describe("sumArray",()=>{
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("сумма 112",()=>{
        jest.spyOn(console, "log");
        sumArray();
        expect(console.log).toHaveBeenCalledWith(112);
    });
});

describe("mult2Array",()=>{
    it("каждый элемент массива умножен на 2",()=>{
      expect(mult2Array()).toStrictEqual([8,50,0,22,14,28,16,42,44,0]);
    });
});
