import {equality} from "./equality"

describe("equality",()=>{
    beforeEach(() => {
        jest.clearAllMocks();
    });
    [
        { a:1, b:2, c:-3, x1: -3, x2: 1},
        { a:1, b:15, c:56, x1: -8, x2: -7},
        { a:1, b:0, c:-25, x1: -5, x2: 5}
    ].forEach(({ a, b, c,x1, x2 }) =>
        it(`prints ${x1}, ${x2} for ${a}, ${b}, ${c}`, () => {
            jest.spyOn(console, "log");
            equality(a,b,c);
            expect(console.log).toHaveBeenCalledWith(`Корни квадратного уравнения ${x1}, ${x2}`);
        })
    );
});
