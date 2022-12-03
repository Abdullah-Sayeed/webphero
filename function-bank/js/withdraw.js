document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputValue('withdraw-field');

    const prevWithdrawAmount = getElementValue('withdraw-total');

    const presentWithdawTotal = newWithdrawAmount + prevWithdrawAmount;

    setElementValue('withdraw-total', presentWithdawTotal);


    // update Balance

    const prevBalanceAmount = getElementValue('balance-total');
    const newBalanceAmount = prevBalanceAmount-newWithdrawAmount;

    setElementValue('balance-total',newBalanceAmount);
});