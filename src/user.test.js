import { admin, changeAge, destructuringAssignment } from './user';

describe('changeAge', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('возраст 25', () => {
    jest.spyOn(window, 'prompt').mockImplementation(() => 25);
    expect(changeAge()).toBe(25);
  });
});

describe('admin', () => {
  it('объект admin', () => {
    const adm = admin();
    expect(adm.role).toBe('admin');
  });
});

describe('destructuringAssignment', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('возвращает name, role', () => {
    jest.spyOn(console, 'log');
    destructuringAssignment('name=John age=0 role=admin');
  });
  it('возвращает name, age, role', () => {
    jest.spyOn(console, 'log');
    jest.spyOn(window, 'prompt').mockImplementation(() => 25);
    changeAge();
    destructuringAssignment();
    expect(console.log).toHaveBeenCalledWith('name=John age=25 role=admin');
  });
});
