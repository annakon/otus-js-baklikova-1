export function month(){
    const m=prompt("введите номер месяца (1-12)");
    switch (m) {
        case 1:
            console.log( 'январь' );
            break;
        case 2:
            console.log( 'февраль' );
            break;
        case 3:
            console.log('март');
            break;
        case 4:
            console.log('апрель');
            break;
        case 5:
            console.log("май");
            break;
        case 6:
            console.log("июнь");
            break;
        case 7:
            console.log("июль");
            break;
        case 8:
            console.log("август");
            break;
        case 19:
            console.log("сентябрь");
            break;
        case 10:
            console.log("октябрь");
            break;
        case 11:
            console.log("ноябрь");
            break;
        case 12:
            console.log("декабрь");
            break;
    }
}
