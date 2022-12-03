
/* ***************************** Problem 1 :  *************************************/


function radianToDegree(radianValue) {
    const pi = 3.141592;
    // checking data types
    if (isNaN(radianValue) == true) {
        return "Given '" + radianValue + "' Is Not a Numeric Value";
    }
    else {

        let degree = radianValue * (180 / pi);
        return degree;
    }

}


/* let equation = radianToDegree(2);
   console.log(equation); */





/* ***************************** Problem 2:  *************************************/


function isJavaScriptFile(filename) {

    // checking data types

    if (typeof (filename) != 'string') {
        return "Given '" + filename + "' Is Not a String Value";
    }
    else {
        let lastTwoChar = filename.slice(-3);
        if (lastTwoChar == ".js") {
            return true;
        }
        else {
            return false;
        }
    }

}


/* let fileName = isJavaScriptFile('index.js');
console.log(fileName); */





/* ***************************** Problem 3:  *************************************/


function oilPrice(diesel, petrol, octane) {
    // checking data types

    if (isNaN(diesel) == true || isNaN(petrol) == true || isNaN(octane) == true) {
        return "All Vaule should be Numeric";
    }
    else {
        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;

        let totalDieselPrice = dieselPrice * diesel;
        let totalPetrolPrice = petrolPrice * petrol;
        let totalOctanePrice = octanePrice * octane;

        let totalFuelCost = totalDieselPrice + totalPetrolPrice + totalOctanePrice;
        return totalFuelCost;
    }

}


    /* let requiredFuel = oilPrice(1, 2, 3);
    console.log(requiredFuel); */





/* ***************************** Problem 4:  *************************************/


function publicBusFare(totalPeople) {
    const busCapacity = 50;
    const microbusCapacity = 11;
    const perpersonLocalRent = 250;

    // checking data types
    if (isNaN(totalPeople) == true) {
        return "Given '" + totalPeople + "' Is Not a Numeric Value";
    }

    else {
        //if totalPeople is equal or larger than busCapacity. 

        if (totalPeople >= busCapacity) {
            let busNeed = parseInt(totalPeople / busCapacity);

            let restOFThePeople = totalPeople % busCapacity;

            // if there are no passenger left 
            if(restOFThePeople==0){
                return {busNeed};
            }

            //if there are passenger left
            else{

                //if there are more passenger than microBus Capacity
                if (restOFThePeople >= microbusCapacity) {
                    let microbusNeed = parseInt(restOFThePeople / microbusCapacity);
                    let peopleInPublic = restOFThePeople % microbusCapacity;

                    //if there are passenger left and does not follow the citeria of microbus capacity
                    if (peopleInPublic > 0) {
                        let giveLocalRent = peopleInPublic * perpersonLocalRent;
                        return {busNeed , microbusNeed , giveLocalRent};
    
                    }

                    // if there are no passenger left after fulfill the microbus capacity
                    else {
                        return {busNeed , microbusNeed};
                    }
                }

                // after fulfill the bus capacity citeria, if there are passenger less than microbus capacity 
                else{
                    let giveLocalRent = restOFThePeople * perpersonLocalRent;
                    return {busNeed , giveLocalRent};
                }
            }
        }

        //OtherWise totalPeople is equal or larger than microbusCapacity.
        else if (totalPeople >= microbusCapacity) {
            let microbusNeed = parseInt(totalPeople / microbusCapacity);
            let peopleInPublic = totalPeople % microbusCapacity;

            //if there are passenger left and does not follow the citeria of microbus capacity
            if (peopleInPublic > 0) {
                let giveLocalRent = peopleInPublic * perpersonLocalRent;
                return {microbusNeed , giveLocalRent};

            }

            // if there are no passenger left after fulfill the microbus capacity
            else {
                return microbusNeed;
            }
        }

        // if less than microbus Capacity
        else {
            let giveLocalRent = totalPeople * perpersonLocalRent;
            return {giveLocalRent};
        }
    }

}


/* console.log(publicBusFare(51)); */




/* ***************************** Problem 5:  *************************************/

function isBestFriend(name1, fname1, name2, fname2) {
    // checking data types
    if (typeof (name1) != 'string' || typeof (fname1) != 'string' || typeof (name2) != 'string' || typeof (fname2) != 'string') {
        return "All input value should be String";
    }
    else {
        let person1 = {
            name: name1,
            friend: fname1
        }
        let person2 = {
            name: name2,
            friend: fname2
        }

        if (person1.name == person2.friend && person1.friend == person2.name) {
            return true;
        }
        else {
            return false;
        }
    }

}


/* let n1 = "john", f1 = "jonny", n2 = "jonny", f2 = "john";
console.log(isBestFriend(n1, f1, n2, f2)); */
