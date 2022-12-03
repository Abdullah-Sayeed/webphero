/* 
    1. add event handler to the deposit button.
    2. get input data from deposit field.
    3. convert data type string to float using parseFloat.
    4. clear the deposit input field
    5. get the previous deposit total
    6. update deposit information
    7. update balance information
*/

document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    // console.log(newDepositAmount);

    depositField.value = '';


    const depositTotalElement = document.getElementById('deposit-total');
    const prevDepositAmount = parseFloat(depositTotalElement.innerText);
    // console.log(prevDepositAmount);

    
    const newTotalDepsoitAmount = prevDepositAmount + newDepositAmount;

    depositTotalElement.innerText = newTotalDepsoitAmount;

    //step 7: 


    const balanceTotalElement = document.getElementById('balance-total');
    const prevBalanceElement = parseFloat(balanceTotalElement.innerText);
    // console.log(typeof prevBalanceElement);
    const newTotalBalance = prevBalanceElement + newDepositAmount;
    balanceTotalElement.innerText = newTotalBalance;
});