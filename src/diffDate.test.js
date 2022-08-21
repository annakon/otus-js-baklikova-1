import { diffDate } from './diffDate';

describe('diffDate', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('return minutes', () => {
    jest.spyOn(console, 'log');
    jest.spyOn(Date, 'now').mockImplementation(() => 1660850523095);
    diffDate();
    expect(console.log).toHaveBeenCalledWith(1342);
  });
});
