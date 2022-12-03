function updatePhoneNumber(isIncrease) {
    const phoneNumberElement = document.getElementById('btn-number-field');
    const prevPhoneNumber = parseInt(phoneNumberElement.value);
    let newPhoneNumber;
    if (isIncrease === true) {
        newPhoneNumber = prevPhoneNumber + 1;
    }
    else {
        newPhoneNumber = prevPhoneNumber - 1;
    }

    phoneNumberElement.value = newPhoneNumber;

    return newPhoneNumber;
}
function newPhoneTotalPrice(newPnNumber) {
    const newTotalPrice = newPnNumber * 1219;
    const totalPriceFiled = document.getElementById('phone-total');
    totalPriceFiled.innerText = newTotalPrice;

}
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPnNumber = updatePhoneNumber(true);
    newPhoneTotalPrice(newPnNumber);
    textElementById();

});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newMinusPNumber = updatePhoneNumber(false);
    newPhoneTotalPrice(newMinusPNumber);
    textElementById();

});