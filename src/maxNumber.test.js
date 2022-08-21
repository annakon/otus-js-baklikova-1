import { maxNumber } from './maxNumber';

describe('maxNumber', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  [
    { a: 1, b: 2, result: 2 },
    { a: 2, b: 2, result: 2 },
    { a: 7, b: 5, result: 7 },
  ].forEach(({ a, b, result }) => it(`prints ${result} for ${a} and ${b}`, () => {
    jest.spyOn(console, 'log');
    maxNumber(a, b);
    expect(console.log).toHaveBeenCalledWith(result);
  }));
});
