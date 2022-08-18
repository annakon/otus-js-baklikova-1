//количество минут, прошедшее с начала сегодняшнего дня
export function diffDate(){
    let date=new Date(Date.now());
    console.log(date.getHours()*60+date.getMinutes());
}
