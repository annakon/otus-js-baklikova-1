import { diffDate } from "./diffDate";

describe("diffDate", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("return minutes", () => {
    jest.spyOn(console, "log");
    jest
      .spyOn(Date, "now")
      .mockImplementation(() =>
        Date(
          "Mon Aug 22 2022 15:43:10 GMT+0300 (Москва, стандартное время)"
        ).valueOf()
      );
    diffDate();
    expect(console.log).toHaveBeenCalledWith(944);
  });
});
