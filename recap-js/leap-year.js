// Leap Year 


function isLeapYear(year){
    if(year%4==0 && year%100!=0 || year%400 == 0){
        return true;
    }
    else{
        return false;
    }
}

const year = 1900;
const leapYear = isLeapYear(year);
console.log(year,' is leapyar ',leapYear);

