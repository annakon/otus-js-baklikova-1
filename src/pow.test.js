import {pow} from "./pow";

describe("pow",()=>{
    it("возвращает 8 для 2 и 3",()=>{
        expect(pow(2,3)).toBe(8);
    });
    it("возвращает 125 для 5 и 3",()=>{
        expect(pow(5,3)).toBe(125);
    });
});
