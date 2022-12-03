// option 1: directly set on the HTML Elements
//<button onclick="document.body.style.backgroundColor = 'yellow'">make bg yellow</button>
// option 2: add onclick function , first priority

function makeRed() {
    document.body.style.backgroundColor = 'red';
}


//option 3: apply function using id 

const makeBlueButton = document.getElementById('make-blue');
//function call kora jabe na, function call 'nakeBlue()' korle button click korar agei event fire hoye jabe.
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option 4: 
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// option 4.1:
const greenButton = document.getElementById('make-green');
greenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});

// option 4.2: second priority
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor = 'goldenrod';
});