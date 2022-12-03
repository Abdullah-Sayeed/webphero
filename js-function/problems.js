
//১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
/* 
function namta(){
    for(var i=1;i<=10;i++){
        let num = 13 * i;
        console.log(13," * ",i," = ",num);
    }
}

namta();
 */

//২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।

/* 
function lowarcaseConvertion(word){
    let wordLowCase = word.toLowerCase();
    return wordLowCase;
}

let word = "AbDuLLAh SayEeD";
console.log(lowarcaseConvertion(word));

 */

//৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 

/* 
function fullName(firstName,lastName){
    let fullName = firstName +" "+ lastName;
    return fullName;
}

var fName = "Abdullah";
var lName = "Sayeed";
console.log(fullName(fName,lName));

 */

//৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে। 
/* 
function numSquare(digit){
    // let square = digit*digit;
    let square = Math.pow(digit,2);
    return square;
}
var numb = numSquare(3);
console.log(numb);
 */


//৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা : এবং pepperoni প্রিন্ট করবা।


/* const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],
    crust: 'deep dish',
    serves: 2
}

var pepp = pizza.toppings[2];
console.log(pepp);

 */

//Practice Problems

//1) Write a function called foo() which prints “foo” and a function called bar() which print “bar”. Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.
/* 
function foo(){
    console.log("foo");
    bar();
}

function bar(){
    console.log('bar');
}

foo(); */

//Write a function called make_avg() which will take an three integers and return the average of those values.

/* 
function avarage(num1,num2,num3){
    
    let total = num1+num2+num3;
    let avg = parseInt(total/3);
    return avg;
}
var n1 = 10;
var n2 = 4;
var n3 = 5;
console.log(avarage(n1,n2,n3));

 */


//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

/* 
function make_avg(numbers) {
    var sum = 0;
    var arrLength = numbers.length;
    for (var i = 0; i < arrLength; i++) {
        sum = sum + (numbers[i]);
        // var avarage = sum / arrLength;
        var avarage = parseInt(sum / arrLength);

    }
    return avarage;

}

var num = [20, 10, 5, 7, 40];
console.log(make_avg(num));

 */
//4) Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
                        // Has return + Has parameter
                        //No return + Has parameter
/* 

function odd_even(digit){
    if(digit%2==0){
        return "Even Number";
        
    }
    else{
        console.log("Odd Number");
    }

}

var digit = 21;
console.log(odd_even(digit));

 */

//5) You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up.

function zebra_crossing(color){
    switch(color){
        case 'red':
            console.log("don't pass road it dangerous ");
            break;
        case 'yellow':
            console.log("Stop pleas");
            break;
        case 'green':
            console.log('you can pass the road');
            break;
        default:
            console.log('Traffic light broken');
    }

}
let color = "green";
zebra_crossing(color);
