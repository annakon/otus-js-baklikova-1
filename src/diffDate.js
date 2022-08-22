// количество минут, прошедшее с начала сегодняшнего дня
export function diffDate() {
  const date = new Date(Date.now());
  console.log(date.getHours() * 60 + date.getMinutes());
}
