export function circle(r) {
  const C = 2 * Math.PI * r;
  const S = Math.PI * r * r;
  console.log(`Длина окружности ${C.toFixed(2)} площадь круга ${S.toFixed(2)}`);
}
