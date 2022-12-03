/* 
    1. add event listener to withdraw Button
    2. get data from withdraw field.
    3. get previous withdraw data 
    4. update balance after withdraw

*/
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField= document.getElementById('withdraw-field');
    const withdrawFieldData = parseFloat(withdrawField.value);
    
    
    const prevWithdrawData = document.getElementById('withdraw-total');
    const prevWithdrawAmount = parseFloat(prevWithdrawData.innerText);
    // console.log(typeof prevWithdrawAmount);
    prevWithdrawData.innerText = withdrawFieldData + prevWithdrawAmount ;
    

    const prevBalance = document.getElementById('balance-total');
    const prevBalanceAmount = parseFloat(prevBalance.innerText);
    // console.log(typeof prevBalanceAmount);
    const newBalance = prevBalanceAmount-withdrawFieldData;
    prevBalance.innerText = newBalance;

    withdrawField.value = '';


});


