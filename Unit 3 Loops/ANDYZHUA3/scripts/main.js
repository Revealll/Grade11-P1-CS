// constants for the login html, to make coding easier
const L_USERNAME = document.getElementById("username");
const L_PASSWORD = document.getElementById("password");
const I_USERNAME = document.getElementById("user");
const I_PASSWORD = document.getElementById("pass");
const B_LOGIN = document.getElementById("logIn");
const B_LOGOUT = document.getElementById("logOut");
// constants for the written texts to make coding easier
const H_POKEDEX = document.getElementById("pokedex");
const H_WELCOME = document.getElementById('welcome');
const H_SORT = document.getElementById("sort");
const H_HP = document.getElementById("lowHp");
const H_ADD = document.getElementById("addMonster");
const H_TRANS = document.getElementById("transversePoke");
const P_WRONG = document.getElementById("wrong");
// constants for the transverse pokedex
const B_NEXT = document.getElementById("next");
const B_PREVIOUS = document.getElementById("previous");
// constant for the original pokedex button
const B_POKEDEX = document.getElementById("poke");
// constants for the search to make coding easier
const L_SEARCH = document.getElementById("labelSearch");
const I_SEARCH = document.getElementById("search");
const B_SEARCH = document.getElementById("searchButton");
// constants for the partial search to make coding easier
const L_PARTIAL = document.getElementById("labelPartial");
const I_PARTIAL = document.getElementById("partial");
const B_PARTIAL = document.getElementById("partialButton");
// constants for the add monster to make coding easier
const L_ADDN = document.getElementById("labName");
const L_ADDH = document.getElementById("labHealth");
const L_ADDT = document.getElementById("labType");
const L_ADDI = document.getElementById("labIndex");
const I_ADDN = document.getElementById("addName");
const I_ADDH = document.getElementById("addHealth");
const I_ADDT = document.getElementById("addType");
const I_ADDI = document.getElementById("addIndex");
const B_ADD = document.getElementById("addButton");
// constants for the increase and decrease buttons to make coding easier
const B_DECREASE = document.getElementById("decrease");
const B_INCREASE = document.getElementById("increase");
// constants for the search monsterType to make coding easier
const L_TYPE = document.getElementById("labelType");
const I_TYPE = document.getElementById("typeSearch");
const B_TYPE = document.getElementById("typeButton");
// constant for the low hp to make coding easier
const B_LOW = document.getElementById("low");
// constant for the original amount of monsters in the pokedex
const ORIGINAL_MONSTERS = 10;
// arrays to store monster info
let monsterName = ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur', 'Greninja', 'Snorlax', 'Eevee', 'Raikou', 'Shaymin', 'Arcanine'];
let healthPoints = [60, 50, 45, 55, 70, 100, 35, 80, 35, 65]
let monsterType = ['Electric', 'Fire', 'Water', 'Grass', 'Water', 'Normal', 'Normal', 'Electric', 'Grass', 'Fire']
// these varibles keeps track of the guest login
let guestUsername = 'guest';
let guestPassword = 'monster';
// these varibles keeps track of the trainer login
let trainerUsername = "trainer";
let trainerPassword = "pass";
// these varibles keep track of the professor login
let professorUsername = "professor";
let professorPassword = "4321";
// varibles to keep track of which account you are on
let guest = 0;
let trainer = 0;
let professor = 0;
// varible to keep track of the currentIndex for the transverse
let currentIndex = 0;
// checks if you logged in correct and which profile you are
function logIn() {
    // checks if you are the guest
    if (I_USERNAME.value == guestUsername && I_PASSWORD.value == guestPassword) {
        // tracks that you are the guest
        guest++
        // shows the logout button
        B_LOGOUT.hidden = false;
        // shows the transverse pokedex
        B_NEXT.hidden = false;
        B_PREVIOUS.hidden = false;
        // shows a text welcoming the guest
        H_WELCOME.innerText = "WELCOME GUEST";
        // hides the login when you sucessfully log in
        hideLogIn();
        // creates the pokedex
        transversePokedex(monsterName, healthPoints, monsterType, currentIndex);
    // checks if you are the trainer
    } else if (I_USERNAME.value == trainerUsername && I_PASSWORD.value == trainerPassword) {
        // tracks that you are the trainer
        trainer++
        // shows a text welcoming the trainer
        H_WELCOME.innerText = "WELCOME TRAINER";
        hideLogIn();
        pokedex(monsterName, healthPoints, monsterType);
        // shows the trainer profile
        trainerProfile();
    // checks if you are the professor
    } else if (I_USERNAME.value == professorUsername && I_PASSWORD.value == professorPassword) {
        // tracks that you are the professor
        professor++
        // shows a text welcoming the professor
        H_WELCOME.innerText = "WELCOME PROFESSOR";
        hideLogIn();
        pokedex(monsterName, healthPoints, monsterType);
        // shows the professor profile
        professorProfile();
    } else {
        // if login does not match any profile, show error login and remove user input
        I_USERNAME.value = "";
        I_PASSWORD.value = "";
        P_WRONG.innerText = "Wrong Login Try Again";
    }
}



function lowHpSearch(theArray) {
    // varible to check if there are more than one monster with the lowest hp
    let matchesFound = 0;
    // varible to check for the lowest hp monster
    let smallestHp;
    // removes the pokedex
    H_POKEDEX.innerText = "";
    // removes the error text if there was one
    P_WRONG.innerText = "";
    // array to check for matches
    let match = new Array(theArray.length);
    // assume the first element is the smallest to start
    smallestHp = theArray[0];
    // start from 2nd element because the 1st element is already used
    for (i = 1; i < theArray.length; i++) {
        // if the current array element is smaller than the smallest, then current element becomes the new smallest
        if (smallestHp > theArray[i]) {
            smallestHp = theArray[i];
        }
    }
    // checks if there is more than one element that is the same hp as the smallest 
    for (i = 0; i < theArray.length; i++) {
        // if there is one, adds the information of the currentIndex to the local array
        if (smallestHp == theArray[i]) {
            match[matchesFound] = "Name: " + monsterName[i] + " | " + " Health: " + healthPoints[i] +  " | " + " Type: " + monsterType[i] + "\n" + "\n";
            // increases matchesFound by one if there was a match found
            matchesFound++
        }
    }

    if (matchesFound > 0) {
        // array to relay the information
        let matchingHealth = new Array(matchesFound);
        for (let i = 0; i < matchingHealth.length; i++){
            // inputs the monster information into the new array
            matchingHealth[i] = match[i];
            // adds the information into the pokedex
            H_POKEDEX.innerText += matchingHealth[i];
        }
    }
}


// sorts pokedex from highest to lowest health points
function sortDecrease(theArray, theArray2, theArray3) {
    // copy of the arrays which will be sorted instead of the original
    let copyName = [theArray.length];
    let copyHealth = [theArray2.length];
    let copyType = [theArray3.length];
    // creates local varibles to switch the indexes around to sort
    let temp;
    let temp1;
    let temp2;
    // removes the current pokedex
    H_POKEDEX.innerText = "";
    // clears error message if there was one previously
    P_WRONG.innerText = "";

    // copys the original array into the copy
    for (let i = 0; i < theArray.length; i++) {
        copyName[i] = theArray[i];
        copyHealth[i] = theArray2[i];
        copyType[i] = theArray3[i];
    }
    // get an currentIndex of the array
    for (let i = 0; i < theArray2.length; i++) {
        // loop that checks if the given currentIndex is smaller or bigger than every other currentIndex
        for (let l = 0; l < theArray2.length; l++) {
            // checks if given currentIndex is bigger than the current currentIndex, if so, switch indexes around
            if (copyHealth[i] > copyHealth[l]) {
                // saves the currentIndex to the varible
                temp = copyHealth[i];
                temp1 = copyName[i];
                temp2 = copyType[i];
                // replaces the given currentIndex with the current currentIndex
                copyHealth[i] = copyHealth[l];
                copyName[i] = copyName[l];
                copyType[i] = copyType[l];
                // replaces the current currentIndex with the varible that contains the given currentIndex
                copyHealth[l] = temp;
                copyName[l] = temp1;
                copyType[l] = temp2;
            }
        }
    }
    // shows the copy of the updated pokedex
    for (let i = 0; i < copyName.length; i++) {
        H_POKEDEX.innerText += "Name: " + copyName[i] + " | " + " Health: " + copyHealth[i] +  " | " + " Type: " + copyType[i] + "\n" + "\n";
    }
}

// sorts pokedex from lowest to highest health points
function sortIncrease(theArray, theArray2, theArray3) {
    // copy of the arrays which will be sorted instead of the original
    let copyName = [theArray.length];
    let copyHealth = [theArray2.length];
    let copyType = [theArray3.length];
    // creates local varibles to switch the indexes around to sort
    let temp;
    let temp1;
    let temp2;
    // removes the current pokedex
    H_POKEDEX.innerText = "";
    // clears error message if there was one previously
    P_WRONG.innerText = "";
    // copys the original array into the copy
    for (let i = 0; i < theArray.length; i++) {
        copyName[i] = theArray[i];
        copyHealth[i] = theArray2[i];
        copyType[i] = theArray3[i];
    }
    
    // get an currentIndex of the array
    for (let i = 0; i < theArray2.length; i++) {
        // loop that checks if the given currentIndex is smaller or bigger than every other currentIndex
        for (let l = 0; l < theArray2.length; l++) {
            // checks if given currentIndex is smaller than the current currentIndex, if so, switch indexes around
            if (copyHealth[i] < copyHealth[l]) {
                // saves the currentIndex to the varible
                temp = copyHealth[i];
                temp1 = copyName[i];
                temp2 = copyType[i];
                // replaces the given currentIndex with the current currentIndex
                copyHealth[i] = copyHealth[l]
                copyName[i] = copyName[l];
                copyType[i] = copyType[l];
                // replaces the current currentIndex with the varible that contains the given currentIndex
                copyHealth[l] = temp;
                copyName[l] = temp1;
                copyType[l] = temp2;
            }
        }
    }
    // shows the copy of the updated pokedex
    for (let i = 0; i < copyName.length; i++) {
        H_POKEDEX.innerText += "Name: " + copyName[i] + " | " + " Health: " + copyHealth[i] +  " | " + " Type: " + copyType[i] + "\n" + "\n";
    }
}

// allows user to add a monster to the pokedex
function addMonster(newData1, newData2, newData3, currentIndex) {
    // local arrays which have an extra space for the new monster information
    let newName = [monsterName.length + 1];
    let newHealth = [healthPoints.length + 1];
    let newType = [monsterType.length + 1];
    // clears error message if there was one previously
    P_WRONG.innerText = "";
    // checks if the user inputted in the textboxes and if the format is correct
    if (I_ADDH.value.length > 0 && I_ADDN.value.length > 0 && I_ADDT.value.length > 0 && I_ADDI.value <= monsterName.length && (isNaN(I_ADDI.value) == false && (isNaN(I_ADDH.value) == false))) {
        // removes the current pokedex
        H_POKEDEX.innerText = " ";
        // copys the original array into the local array
        for (let i = 0; i < monsterName.length; i++) {
            newName[i] = monsterName[i];
        }
        // shifts everything to the right to make the first array empty
        for (let i = newName.length + 1; i >= currentIndex + 1; i--) {
            newName[i - 1] = monsterName[i - 2];
        }
        // input what the user typed into the first array
        newName[currentIndex] = newData1;
        // makes the orignal array have the new array information
        monsterName = newName;
        
        for (let i = 0; i < healthPoints.length; i++) {
            newHealth[i] = healthPoints[i];
        }
        for (let i = newHealth.length + 1; i >= currentIndex + 1; i--) {
            newHealth[i - 1] = healthPoints[i - 2];
        }
        newHealth[currentIndex] = newData2;
        healthPoints = newHealth;
        
        for (let i = 0; i < monsterType.length; i++) {
            newType[i] = monsterType[i];
        }
        for (let i = newType.length + 1; i >= currentIndex + 1; i--) {
            newType[i - 1] = monsterType[i - 2];
        }
        newType[currentIndex] = newData3;
        monsterType = newType;
        // adds the updated pokedex
        pokedex(monsterName, healthPoints, monsterType);
    } else {
        // if user did not input in all the textboxes or the format is wrong, show an error message
        P_WRONG.innerText = "Please insert proper formatting.";
    }
    // clears the textboxes
    I_ADDH.value = "";
    I_ADDN.value = "";
    I_ADDT.value = "";
    I_ADDI.value = "";
}

// allows the user to partially search for a monster name
function partialSearch(theArray, valueToFind) {
    // varible to check for the matches found 
    let matchesFound = 0;
    
    // clears error message if there was one previously
    P_WRONG.innerText = "";
    // checks if each currentIndex contains the user input
    for ( let i = 0; i < theArray.length; i++) {
        // checks if the given currentIndex of the loop contains the user input
        if (theArray[i].indexOf(valueToFind) != -1 ){
            matchesFound++;
            // removes the pokedex only once if there is a match so you can add to pokedex
            if (matchesFound == 1) {
                H_POKEDEX.innerText = "";
            }     
            // the pokedex will display the currentIndex and will add on if more matches are found
            H_POKEDEX.innerText += "Name: " + monsterName[i] + " | " + " Health: " + healthPoints[i] +  " | " + " Type: " + monsterType[i] + "\n" + "\n";
            // increase matchesFound by one if a match was found
            matchesFound++;     
        }
    }
    // checks if matches found was 0
    if (matchesFound == 0) {
        // shows an error text that the input could not be matched with any currentIndex
        P_WRONG.innerText = "Matches not found, check spelling or errors.";
    }
    // clears the textbox after 
    I_PARTIAL.value = "";
}

// allows the user to fully search for a monsters name
function nameSearch(theArray, valueToFind) {
    // varible to check for the matches found
    let matchesFound = 0;
    // clears the error message if there was one previously
    P_WRONG.innerText = "";
    // array to check for matches
    let match = new Array(theArray.length);
    // checks if each name matches the user input
    for ( let i = 0; i < theArray.length; i++){
        if (theArray[i] == valueToFind){
            // adds the information to the local array with the currentIndex being the amount of matches found
            match[matchesFound] = "Name: " + monsterName[i] + " | " + " Health: " + healthPoints[i] +  " | " + " Type: " + monsterType[i] + "\n" + "\n";
            matchesFound++;
        }
    }
    // if there is a match found, show it in the pokedex
    if (matchesFound > 0) {
        // removes the pokedex
        H_POKEDEX.innerText = "";
        // new array which is the length of the matches found
        let matchingName = new Array(matchesFound);
        for (let i = 0; i < matchingName.length; i++){
            // inputs the monster information into the new array
            matchingName[i] = match[i];
            // adds the information into the pokedex
            H_POKEDEX.innerText += matchingName[i];
        }
    } else {
        // if there is no match, sends an error message
        P_WRONG.innerText = "Matches not found, check spelling or errors.";
    }
    // clears the search textbox
    I_SEARCH.value = "";
}

function searchType(theArray, valueToFind) {
    // varible to check for the matches found
    let matchesFound = 0;
    // clears the error message if there was one previously
    P_WRONG.innerText = "";
    // array to check for matches
    let match = new Array(theArray.length);
    // checks if each monsterType matches the user input
    for ( let i = 0; i < theArray.length; i++) {
        if (theArray[i] == valueToFind) {
            // adds the information of the currentIndex to the local array
            
            match[matchesFound] = "Name: " + monsterName[i] + " | " + " Health: " + healthPoints[i] +  " | " + " Type: " + monsterType[i] + "\n" + "\n";
            // increase matchesFound by one if a match was found
            matchesFound++;
        }
    }
    // if there is a match found, add it to the pokedex
    if (matchesFound > 0) {
        // removes the pokedex
        H_POKEDEX.innerText = "";
        // array to relay the information
        let matchingType = new Array(matchesFound);
        for (let i = 0; i < matchingType.length; i++){
            // inputs the monster information into the new array
            matchingType[i] = match[i];
            // adds the information into the pokedex
            H_POKEDEX.innerText += matchingType[i];
        }
    } else {
        // if there is no match, sends an error message
        P_WRONG.innerText = "Matches not found, check spelling or errors.";
    }
    // clears the search textbox
    I_TYPE.value = "";
}

function trainerProfile() {
    // shows all the features the trainer can use
    B_LOGOUT.hidden = false;
    B_POKEDEX.hidden = false;
    L_ADDN.hidden = false;
    L_ADDH.hidden = false;
    L_ADDT.hidden = false;
    L_ADDI.hidden = false;
    I_ADDI.hidden = false;
    I_ADDN.hidden = false;
    I_ADDH.hidden = false;
    I_ADDT.hidden = false;
    B_ADD.hidden = false;
    L_SEARCH.hidden = false;
    I_SEARCH.hidden = false;
    B_SEARCH.hidden = false;
    B_DECREASE.hidden = false;
    B_INCREASE.hidden = false;
    H_ADD.innerText = "Add Monster: ";
    H_SORT.innerText = "Sort By HP: ";
}

function professorProfile() {
    // shows all the features the trainer can use
    trainerProfile();
    // show the additional features the professor can use
    L_PARTIAL.hidden = false;
    I_PARTIAL.hidden = false;
    B_PARTIAL.hidden = false;
    L_TYPE.hidden = false;
    I_TYPE.hidden = false;
    B_TYPE.hidden = false;
    B_LOW.hidden = false;
    B_NEXT.hidden = false;
    B_PREVIOUS.hidden = false;
    H_HP.innerText = "Search For Lowest Hp Monsters:";
    transversePokedex(monsterName, healthPoints, monsterType, currentIndex);
}
// shows the pokedex that you can transverse through
function transversePokedex(theArray, theArray2, theArray3, index) {
    H_TRANS.innerText = "Name: " + theArray[index] + " | " + " Health: " + theArray2[index] +  " | " + " Type: " + theArray3[index] + "\n" + "\n";
}
// goes to the next pokemon
function nextPokemon(theArray) {
    // goes to the next pokemon, if at the end of the array, starts at the beginning again
    if (currentIndex < theArray.length - 1) {
        currentIndex++;
    } 
    else {
        currentIndex = 0;
    }
    // reshow the pokedex
    transversePokedex(monsterName, healthPoints, monsterType, currentIndex);
}
// goes to the previous pokemon
function previousPokemon(theArray) {
    // goes to the previous pokemon if at the beinning, it starts at the end again
    if (currentIndex > 0) {
        currentIndex--;
    }
    else {
        currentIndex = theArray.length - 1;
    }
    transversePokedex(monsterName, healthPoints, monsterType, currentIndex);
}
// creates the pokedex
function pokedex(theArray, theArray2, theArray3) {
    // clears the pokedex
    H_POKEDEX.innerText = "";
    // clears error message if there is one
    P_WRONG.innerText = "";
    // creates the information of each monster into the pokedex
    for (let i = 0; i < theArray.length; i++) {
        H_POKEDEX.innerText += "Name: " + theArray[i] + " | " + " Health: " + theArray2[i] +  " | " + " Type: " + theArray3[i] + "\n" + "\n";
    }
}

// hides the log in features
function hideLogIn() {
    L_USERNAME.hidden = true;
    L_PASSWORD.hidden = true;
    I_USERNAME.hidden = true;
    I_PASSWORD.hidden = true;
    B_LOGIN.hidden = true;
    P_WRONG.innerText = "";
}
// shows the log in features
function showLogIn() {
    // shows the log in and clears all the text 
    I_USERNAME.value = "";
    I_PASSWORD.value = "";
    L_USERNAME.hidden = false;
    L_PASSWORD.hidden = false;
    I_USERNAME.hidden = false;
    I_PASSWORD.hidden = false;
    B_LOGIN.hidden = false;
    B_LOGOUT.hidden = true;
    P_WRONG.innerText = "";
    H_WELCOME.innerText = "";
    H_POKEDEX.innerText = "";
}
// hides all of the trainer features 
function trainerLogOut() {
    B_LOGOUT.hidden = true;
    B_POKEDEX.hidden = true;
    L_ADDN.hidden = true;
    L_ADDH.hidden = true;
    L_ADDT.hidden = true;
    L_ADDI.hidden = true;
    I_ADDI.hidden = true;
    I_ADDN.hidden = true;
    I_ADDH.hidden = true;
    I_ADDT.hidden = true;
    B_ADD.hidden = true;
    L_SEARCH.hidden = true;
    I_SEARCH.hidden = true;
    B_SEARCH.hidden = true;
    B_DECREASE.hidden = true;
    B_INCREASE.hidden = true;
    H_ADD.innerText = "";
    H_SORT.innerText = "";
}
// hides all the professor features
function professorLogOut() {
    trainerLogOut();
    L_PARTIAL.hidden = true;
    I_PARTIAL.hidden = true;
    B_PARTIAL.hidden = true;
    L_TYPE.hidden = true;
    I_TYPE.hidden = true;
    B_TYPE.hidden = true;
    B_LOW.hidden = true;
    B_NEXT.hidden = true;
    B_PREVIOUS.hidden = true;
    H_HP.innerText = "";
    H_TRANS.innerText = "";
    // makes the index back to 0 to show the first pokemon again when you log back in
    currentIndex = 0;
}
// hides all the guest features
function guestLogOut() {
    B_NEXT.hidden = true;
    B_PREVIOUS.hidden = true;
    H_TRANS.innerText = "";
    currentIndex = 0;
}

function logOut() {
    // show the login again
    showLogIn();
    // checks if you are the guest, trainer, or professor, and then hides the features
    if (guest == 1) {
        guestLogOut();
        // makes you not a guest anymore
        guest--
    } else if (trainer == 1) {
        trainerLogOut();
        // makes you not a trainer anymore
        trainer--
    }
    else {
        professorLogOut();
        // makes you not a professor anymore
        professor--
    }
}