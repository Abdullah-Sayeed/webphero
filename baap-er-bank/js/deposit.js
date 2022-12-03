// step-1: add Event Listener to the deposit button
document.getElementById('button-deposit').addEventListener('click', function(){
    //step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    // console.log(typeof newDepositAmount);

    //step-3: get the total deposit id
    const depositTotalElement = document.getElementById('deposit-total');
    const previousTotalDeposit = parseFloat(depositTotalElement.innerText);

    //step-4: sum new and previous deposit to get total deposit
    const currentTotalDeposit = previousTotalDeposit + newDepositAmount;
    depositTotalElement.innerText = currentTotalDeposit;

    //step -5: Update balance 
    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceAmount = parseFloat(previousBalanceElement.innerText);
    
    const newBalanceAmount = newDepositAmount + previousBalanceAmount;
    previousBalanceElement.innerText = newBalanceAmount ;

    depositField.value = '';

    
});