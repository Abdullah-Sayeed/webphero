// step-1: add Event handler to withdraw Button

document.getElementById('button-withdraw').addEventListener('click', function(){
    // step-2: get the amount from withdraw input field
    const withdrawField = document.getElementById('withdraw-field');

    const newWithdrawAmount = parseFloat(withdrawField.value);
    // console.log(typeof newWithdrawAmount);

    //step-3
    const getPrevWithdrawElement = document.getElementById('withdraw-total');
    const prevWithdrawAmount = parseFloat(getPrevWithdrawElement.innerText);
    //step-4
    const totalWithdrawAmount = newWithdrawAmount+prevWithdrawAmount;
    getPrevWithdrawElement.innerText = totalWithdrawAmount;


    //step-5
    const balanceElement = document.getElementById('balance-total');
    const balanceAmount = parseFloat(balanceElement.innerText);

    //step-6
    if(balanceAmount>newWithdrawAmount){
        const newBalanceTotal =balanceAmount - newWithdrawAmount;

        balanceElement.innerText = newBalanceTotal;
    }
    else{
        alert('insufficiant Balance');
    }

    //step-7
    withdrawField.value = '';

})