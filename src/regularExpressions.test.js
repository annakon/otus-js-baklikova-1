import {regularExpressions} from "./regularExpressions"

describe("regularExpressions",()=>{
    beforeEach(() => {
        jest.clearAllMocks();
    });
    [
        { str: "5.09.2022", result: "Дата"},
        { str: "john@mail.ru", result: "Адрес электронной почты"},
        { str: "+7(495)000-00-00", result: "Номер телефона"}
    ].forEach(({ str, result }) =>
        it(`prints ${result} for ${str}`, () => {
            jest.spyOn(console, "log");
            jest.spyOn(window, "prompt").mockImplementation(() => str);
            regularExpressions();
            expect(console.log).toHaveBeenCalledWith(result);
        })
    );
});
