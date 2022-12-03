/* 
    1// return keyword diye amara function theke j kuno value or variable function caller er kache return korte pari. 

*/
/* 

function addition(num1,num2){
    var sum = num1+num2;
    return sum;
}

var total = addition(20,30);
console.log("total= ",total);


 */

/* function giveSomeSingara(money){
    var singaraPrice = 10;
     var quantity = money/singaraPrice;
     return quantity;
}

var singara = giveSomeSingara(200);

console.log("I have bought ",singara," Singaras"); */


function add(num1,num2){
    var sum = num1 + num2;
    return sum;
}

const result1 = add(5,10);
const result2 = add(3,6);
const finalResult= add(result1,result2);
console.log("Result 1=",result1);
console.log("Result 2=",result2);
console.log("final Result=",finalResult);