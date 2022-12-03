function sumOfAnArray(numbers){
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        sum = sum + numbers[i];
    }
    return sum;
}


function getOddNumbersOfArry(numbers){
    const oddNumbers = [];
    for(let i= 0; i<numbers.length;i++){
        const index = i;
        const element = numbers[index];
        if(element%2 != 0){
            console.log(index,element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
} 

const myNumbers = [12,65,45,78,32,45,91];

const oddNumbers = getOddNumbersOfArry(myNumbers);
console.log(oddNumbers);
const oddNumbersSum = sumOfAnArray(oddNumbers);
console.log(oddNumbersSum);
