// домашнее задание 5, работа с массивом
const array = [4, 25, 0, 11, 7, 14, 8, 21, 22, 0];

export function sumArray() {
  console.log(array.reduce((memo, x) => memo + x, 0));
}

export function mult2Array() {
  return array.map((x) => x * 2);
}

export function maxminArray() {
  console.log(`max=${Math.max.apply(null, array)} min=${Math.min.apply(null, array)}`);
}
