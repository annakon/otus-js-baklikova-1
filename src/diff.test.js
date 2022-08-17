import {diff} from "./diff";

describe("diff",()=>{
   it("разница между 2 и 3 - 1",()=>{
       expect(diff(2,3)).toBe(1);
   });
    it("разница между 25 и 3 - 22",()=>{
        expect(diff(25,3)).toBe(22);
    });
});
