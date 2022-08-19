import {triangle} from "./triangle"

describe("triangle",()=>{
    [
        { a:10, b:24, c: 26, result: true},
        { a:10, b:6, c: 8, result: true},
        { a:5, b:6, c: 7, result: false}
    ].forEach(({ a, b, c, result }) =>
        it(`prints ${result} for ${a}, ${b} and ${c}`, () => {
           expect(triangle(a,b,c)).toBe(result);
        })
    );
});
