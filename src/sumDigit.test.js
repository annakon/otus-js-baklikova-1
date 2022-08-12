import {sumDigit} from "./sumDigit";

let originalPrompt;

describe("sumDigit",()=>{
    beforeEach(()=>{
       jest.clearAllMocks();
       originalPrompt=prompt;
    });
    afterEach(()=>{
       prompt=originalPrompt;
    });
    [{a:211, result: 4},{a:803, result: 11},{a:732, result: 12}].forEach(({a,result})=>{
        it("сумма цифр " + a + " равна " + result,
            () => {
                prompt = (x) => {
                   return a;
                }
                jest.spyOn(console, "log");
                sumDigit();
                expect(console.log).toHaveBeenCalledWith(result);
            }) ;
    });
});
