//Examples: 4! = 4 × 3 × 2 × 1


function factorialsMultiplication(numbers){
    let result = 1;
    for(let i = 1;i<=numbers;i++){
        result = result*i;

    }
    return result;
}
const factorials = factorialsMultiplication(7);
console.log(factorials);



// factorial reverse

function factorial(numbers){
    let result = 1;
    for(let i = numbers; i>=1;i--){
        result = result*i;
    }
    return result;
}
const factorialReverse = factorial(9);
console.log(factorialReverse);