function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return inputFieldValue;

}
/* Element text value and converting string to float */

function getElementValue(elementId){
    const elementIdName = document.getElementById(elementId);
    const elementValue = parseFloat(elementIdName.innerText);
    return elementValue;
}

function setElementValue(elementId,newValue){
    const textElementId = document.getElementById(elementId);
    textElementId.innerText = newValue;
}