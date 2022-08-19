//является ли треугольник прямоугольным (9.1)
export function triangle(a,b,c){
    if((Math.pow(a,2)+Math.pow(b,2))===Math.pow(c,2))return true;
    if((Math.pow(a,2)+Math.pow(c,2))===Math.pow(b,2))return true;
    if((Math.pow(c,2)+Math.pow(b,2))===Math.pow(a,2))return true;
    return false;
}
