//const fibo = [0, 1, 1, 2,3,5,8,13,21,34,55,89,144];
/* 
    fibo[3] = fibo[2] + fibo[1];
    fibo[4] = fibo[3] + fibo[2];
*/

function fibonacci(fiboValue){
    const fibo = [0,1];
    for(let i = 2;i<=fiboValue;i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}


const fibonacciNum = 15;
console.log(fibonacci(fibonacciNum));
