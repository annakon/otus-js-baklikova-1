import { sum50100 } from './sum50100';

describe('sum50100', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('return 3825', () => {
    jest.spyOn(console, 'log');
    sum50100();
    expect(console.log).toHaveBeenCalledWith(3825);
  });
});
