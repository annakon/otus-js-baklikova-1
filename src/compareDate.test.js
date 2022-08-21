import { compareDate } from './compareDate';

describe('compareDate', () => {
  [
    { a: '11.12.2001', b: '10.12.2001', result: '11.12.2001' },
    { a: '11.12.2011', b: '10.12.2001', result: '11.12.2011' },
    { a: '11.04.2001', b: '10.12.2001', result: '10.12.2001' },
  ].forEach(({ a, b, result }) => it(`prints ${result} for ${a} and ${b}`, () => {
    expect(compareDate(a, b)).toBe(result);
  }));
});
