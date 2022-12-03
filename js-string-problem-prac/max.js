//part :1 
/* 
const jim = 84;
const dela = 75;
if(jim > dela){
    console.log("Jim Will Get the cake");
}
else{
    console.log("Dela Will get the cake");
} 
*/

//part :2

// logic 1
/* 
const jim = 89;
const dela = 99;
const chinku = 77;
if(jim > dela && jim > chinku){
    console.log("Jim Will Get the cake");
}
else if(dela > jim && dela > chinku){
    console.log("dela Will Get the cake");
}
else{
    console.log("chinku Will Get the cake");

}
 */
//logic 2
/* 
const jim = 69;
const dela = 97;
const chinku = 99;

let largest = Math.max(69,97,99);
console.log(largest);
 */


// largest Number Of an Array

function maxInArray(numbers){
    let largest = numbers[0];
    for(let i = 0;i<=numbers.length;i++){
        
        if(numbers[i]>largest){
            largest = numbers[i];
        }
    }
    return largest;
}


const num = [10,54,23,46,87,97,99,5,405,70];
console.log(maxInArray(num));