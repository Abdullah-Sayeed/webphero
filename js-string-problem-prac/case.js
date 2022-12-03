const userName = "BlackPink";
const userInput = "blackpInK";
console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());

if(userName == userInput){
    console.log('valid User');
}
else if(userName.toLowerCase()==userInput.toLowerCase()){
    console.log("valid User Now");
}
else{
    console.log('inavalid User');
}