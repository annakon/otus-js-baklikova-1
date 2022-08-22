// одно ли слово в строке (6.2)
export function isWord(str) {
  if (str.split(" ").length !== 1) {
    return false;
  }
  return true;
}
