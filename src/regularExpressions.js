// задание 10, регулярные выражения
export function regularExpressions() {
  const str = prompt(
    "введите дату, адрес электронной почты или номер телефона"
  );
  let reg = /\d{1,2}[./]\d{2}[./]\d{2,4}/;
  if (reg.test(str)) {
    console.log("Дата");
  } else {
    reg = /[\da-z.]+@[\da-z]+\.[a-z]+/;
    if (reg.test(str)) {
      console.log("Адрес электронной почты");
    } else {
      reg =
        /\+\d[\s(-]{0,1}\d{3}[\s)-]{0,1}\d{3}[\s-]{0,1}\d{2}[\s-]{0,1}\d{2}/;
      if (reg.test(str)) {
        console.log("Номер телефона");
      }
    }
  }
}
