//какая дата позднее
export function compareDate(date1,date2){
    let [day1,month1,year1]=date1.split(".");
    let [day2,month2,year2]=date2.split(".");
    if(year1===year2){
        if(month1===month2){
            return day1>day2?date1:date2;
        }
        else{
            return month1>month2?date1:date2;
        }
    }else{
        return year1>year2?date1:date2;
    }
}
