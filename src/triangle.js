// является ли треугольник прямоугольным (9.1)
export function triangle(a, b, c) {
  if ((a ** 2 + b ** 2) === c ** 2) return true;
  if ((a ** 2 + c ** 2) === b ** 2) return true;
  if ((c ** 2 + b ** 2) === a ** 2) return true;
  return false;
}
