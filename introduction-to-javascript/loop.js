/* for(var i=0; i<5;i++){
    console.log("Roast Given done");

    if(i<2){
       break; 
    }
} */

/* var result = [55,65,80,95,45,76,89,100,30];
for(vari = 0; i<result.length;i++){
    console.log(result[i]+"Pass");
    if(i<33){
        console.log(result[i]+"Fail");
        break;
    }
} */
// Problem 1

/* var fruits=['Apple','Banana','Orange'];

    var indexofBanana = fruits.indexOf('Banana');
    console.log(indexofBanana);
    fruits[indexofBanana] = "Mango";
    fruits.pop();
    fruits.push("WaterMelon");
    for(var i=0;i<fruits.length;i++){
        console.log(fruits[i]);
    } */



// Problem 2
/* var results  = [85,66,95,56,40,30];
for(var i = 0;i<results.length;i++){
    if(results[i]>=80){
        console.log(results[i]+" is Grade A");
    }
    else if(results[i]>=60){
        console.log(results[i]+" is Garade B");
    }
    else if(results[i]>=50){
        console.log(results[i]+" is Garade C");
    }
    else if(results[i]>=40){
        console.log(results[i]+" is Garade D");
    }
    else if(results[i]<40){
        console.log(results[i]+" is Garade F");
    }

}
*/
//************* */ problem 3*********************
// solution 1
/* 
var num1 = 13;
var num2 = 79;
var num3=45;

if(num1>num2 && num1> num3){
    console.log(num1+" is the largest number");
}
else if(num2>num1 && num2>num3){
    console.log(num2+" is the largest number");
}
else{
    console.log(num3+" is the largest number");
    
} 
*/

//solution 2
var num1 = 13;
var num2 = 79;
var num3=45;

if(num1>num2){
    if(num1>num3){
    console.log(num1+" is the largest number");
    }
    else{
        console.log(num3+"is the largest number");
    }
}
else{
    if(num2>num3){
    console.log(num2+" is the largest number");
    }
    else{
    console.log(num3+" is the largest number");

    }
}

// problem 3.1

var side1=9,side2=8,side3=9;

if(side1==side2||side2==side3||side3 == side1){
    console.log("Give triangle is isosceles");
}
else{
    console.log("Give triangle is not isosceles");

}