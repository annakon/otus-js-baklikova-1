import { stringLength } from "./stringLength";

describe("stringLength", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("prints 9", () => {
    jest.spyOn(console, "log");
    stringLength();
    expect(console.log).toHaveBeenCalledWith(9);
  });
});
