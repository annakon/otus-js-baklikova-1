import {sumDigit} from "./sumDigit";

describe("sumDigit",()=>{
    beforeEach(()=>{
       jest.clearAllMocks();
    });
    [{a:211, result: 4},{a:803, result: 11},{a:732, result: 12}].forEach(({a,result})=>{
        it("сумма цифр " + a + " равна " + result,
            () => {
                jest.spyOn(console, "log");
                jest.spyOn(window, "prompt").mockImplementation(() => a);
                sumDigit();
                expect(console.log).toHaveBeenCalledWith(result);
            }) ;
    });
});
