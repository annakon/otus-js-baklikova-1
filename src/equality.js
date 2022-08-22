// решение квадратного уравнения
export function equality(a, b, c) {
  const D = b * b - 4 * a * c;
  const x1 = (-b - Math.sqrt(D)) / (2 * a);
  const x2 = (-b + Math.sqrt(D)) / (2 * a);
  console.log(`Корни квадратного уравнения ${x1}, ${x2}`);
}
