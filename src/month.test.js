import {month} from "./month";

describe("month",()=>{
    beforeEach(() => {
        jest.clearAllMocks();
    });
    [{a:1, result: 'январь'},{a:3, result: 'март'},{a:12, result: 'декабрь'}].forEach(({a,result})=>{
      it(`prints ${result} for ${a}`, () => {
        jest.spyOn(console, "log");
        jest.spyOn(window, "prompt").mockImplementation(() => a);
        month();
        expect(console.log).toHaveBeenCalledWith(result);
      });
    });
});
