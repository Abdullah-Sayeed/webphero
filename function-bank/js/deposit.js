

document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('Deposit Button clicked');
    /* pass depsoit input field data to the getinputValue() function */
    const newDepositAmount = getInputValue('deposit-field');

    /* Pass previous deposit data to the function*/

    const prevDepositAmount = getElementValue('deposit-total');

    /* calculate new deposit total */
    const newDepositTotal = newDepositAmount + prevDepositAmount;
    
    /* set deposit total value */

    setElementValue('deposit-total', newDepositTotal);
    
    /* Upadate balance  */
    const prevBalanceAmount = getElementValue('balance-total');
    
    const newBalanceAmount = prevBalanceAmount + newDepositAmount;

    setElementValue('balance-total', newBalanceAmount);

});