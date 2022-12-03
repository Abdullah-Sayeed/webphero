function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    
    if(pinString.length === 4){
        return pin;
    }
    else{
        //console.log("Pin is less than 4 , string length is : "+pinString.length + "Digit is : " + pin);
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}
// generatePin();

document.getElementById('generate-pin').addEventListener('click', function(){
    const fetchPin = getPin();
    // console.log(fetchPin);
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = fetchPin;
});

document.getElementById('calculator').addEventListener('click', function(event){

    const number = event.target.innerText;
    // console.log(number);
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;

    if(isNaN(number)){
        if(number ==='C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const newTypedNumber = previousTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
});

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayedCurrentPin = document.getElementById('display-pin');
    const currentPin = displayedCurrentPin.value;

    const typedNumberfField = document.getElementById('typed-numbers');
    const typedNumbers = typedNumberfField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');



    if(currentPin === typedNumbers){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display ='none';

    }
    else{
        pinFailureMessage.style.display ='block';
        pinSuccessMessage.style.display = 'none';

    }
});