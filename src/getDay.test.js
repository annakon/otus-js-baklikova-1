import {getDay} from "./getDay";


describe("getDay",()=>{
    beforeEach(()=>{
        jest.clearAllMocks();
    });
    it("return понедельник",()=>{
        jest.spyOn(console, "log");
        jest.spyOn(window, "prompt").mockImplementation(() => "15.08.2022");
        getDay();
        expect(console.log).toHaveBeenCalledWith("понедельник");
    });
    it("return понедельник",()=>{
        jest.spyOn(console, "log");
        jest.spyOn(window, "prompt").mockImplementation(() => "31.12.2021");
        getDay();
        expect(console.log).toHaveBeenCalledWith("пятница");
    });
});
