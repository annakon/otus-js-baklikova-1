//поместится ли круг в квадрате (2.3)
export function circleSquare(circle,square ){
    const diagCircle=2*Math.sqrt(circle/Math.PI);
    const diagSquare=Math.sqrt(square);
    return diagSquare > diagCircle ? true : false;
}
