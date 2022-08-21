// выводит день недели, соответствующий введенной дате
export function getDay() {
  const input = prompt('Введите дату в формате ДД.ММ.ГГГГ');
  const [day, month, year] = input.split('.');
  const date = new Date(`${year}-${month}-${day}`);
  const options = { weekday: 'long' };
  console.log(new Intl.DateTimeFormat('ru-RU', options).format(date));
}
