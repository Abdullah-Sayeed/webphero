// step 1: add click event to submit button
document.getElementById('login-button').addEventListener('click', function () {

    // step 2: get value from input field
    // use .value to get data from input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    console.log(email);
    console.log(password);


    //Danger: don't verify email password in client side. 

    //step 4: verify email and password

    if (email === 'sayeed@gmail.com' && password === 'admin') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Incorrect user Info');
    }

});