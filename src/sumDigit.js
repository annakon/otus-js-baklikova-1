export function sumDigit(){
    const num = prompt('Enter the number: ');
    const digit3 = num % 10;
    const digit1 = (num - num % 100)/100;
    const digit2 = (num - digit1 * 100 - digit3)/10;
    console.log(digit1 + digit2 + digit3);
}
