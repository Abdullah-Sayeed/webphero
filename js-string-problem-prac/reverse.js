// string reverse Program.
/* 
function reverseString(text){
    let reverseText = '';
    for(let i=text.length-1;i>=0;i--){
        let character = text[i];
         reverseText = reverseText + character;
        console.log(character,reverseText);
    }
    return reverseText;
}


let sentence = "I am Programmer. I can develop your web application";

let reverseSentence = reverseString(sentence);
console.log(reverseSentence);

 */

//word reverse program

function reverseWord(text) {
    let words = text.split(" ");
    let reversed = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const elements = words[i];
        reversed.push(elements);
    }
    // return reversed;
    const results = reversed.join(' ');
    return results;
}


let sentence = "I am Programmer. I can develop your web application";

let reversed = reverseWord(sentence);
console.log(reversed);