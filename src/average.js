/* Запросить у пользователя ввод числа N. Вывести в
консоль среднее арифметическое всех нечётных
чисел от 1 до N. */
export function average() {
  const N = prompt("введите N");
  let num = 0;
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 1) {
      sum += i;
      num++;
    }
  }
  console.log(sum / num);
}
