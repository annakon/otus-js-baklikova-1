// домашнее задание 4, работа с объектом user
const user = {
  name: 'John',
};

export function changeAge() {
  user.age = prompt('введите возраст');
  return user.age;
}

export function admin() {
  const ret = { ...user };
  ret.role = 'admin';
  return ret;
}

export function destructuringAssignment() {
  const adm = admin();
  const { name, age = 0, role = '' } = adm;
  console.log(`name=${name} age=${age} role=${role}`);
}
