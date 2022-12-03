function setTextElementValueById(elementId,value){
    const elementIdName = document.getElementById(elementId);
    elementIdName.innerText = value;
}

function textElementById(){
    const currentPhoneTotalElement = document.getElementById('phone-total');
    const currentPhoneTotalAmount = parseFloat(currentPhoneTotalElement.innerText);

    const currentCaseTotalElement = document.getElementById('case-total');
    const currentCaseTotalAmount = parseFloat(currentCaseTotalElement.innerText);

    const currentSubtotalAmount = currentPhoneTotalAmount + currentCaseTotalAmount;
    setTextElementValueById('sub-total',currentSubtotalAmount);

    const taxAmount = parseFloat((currentSubtotalAmount * 0.05).toFixed(2));
    setTextElementValueById('tax-total',taxAmount);

    const finalTotalAmount = currentSubtotalAmount + taxAmount;
    setTextElementValueById('final-total',finalTotalAmount);

};
