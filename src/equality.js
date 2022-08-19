//решение квадратного уравнения
export function equality(a,b,c){
    let D=b*b-4*a*c;
    let x1=(-b-Math.sqrt(D))/(2*a);
    let x2=(-b+Math.sqrt(D))/(2*a);
    console.log(`Корни квадратного уравнения ${x1}, ${x2}`)
}
