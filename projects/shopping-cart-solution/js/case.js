/* 

//plus button
document.getElementById('btn-case-plus').addEventListener('click' , function(){
    const caseNumberField = document.getElementById('case-number-field');
    const prevCaseNumber = parseInt(caseNumberField.value);

    const newCaseNumber = prevCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
});

// minus button

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const caseNumberField = document.getElementById('case-number-field');
    const prevCaseNumber = parseInt(caseNumberField.value);
    
    const newCaseNumber = prevCaseNumber - 1;
    if(newCaseNumber > 0){
        caseNumberField.value = newCaseNumber;

    }
    else{
        caseNumberField.value = prevCaseNumber;
    }
});

*/


/* update case quantity using function */
//case quantity counting
function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const prevCaseNumber = parseInt(caseNumberField.value);

    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = prevCaseNumber + 1;
    }
    else{
        newCaseNumber = prevCaseNumber -1;
    }
    
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
//total case cost counting
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click' , function(){
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);
    textElementById();

    
    

});


document.getElementById('btn-case-minus').addEventListener('click',function(){

    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    textElementById();


});
