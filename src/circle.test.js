import { circle } from './circle';

describe('circle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { r: 1, S: 3.14, C: 6.28 },
    { r: 2, S: 12.57, C: 12.57 },
    { r: 5, S: 78.54, C: 31.42 },
  ].forEach(({ r, S, C }) => it(`prints ${S} and ${C} for ${r}`, () => {
    jest.spyOn(console, 'log');
    circle(r);
    expect(console.log).toHaveBeenCalledWith(`Длина окружности ${C} площадь круга ${S}`);
  }));
});
