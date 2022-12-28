// constants for the login html, to make coding easier
const L_USERNAME = document.getElementById("username");
const L_PASSWORD = document.getElementById("password");
const I_USERNAME = document.getElementById("user");
const I_PASSWORD = document.getElementById("pass");
const B_LOGIN = document.getElementById("logIn");
// constants for the written texts to make coding easier
const H_POKEDEX = document.getElementById("pokedex");
const H_WELCOME = document.getElementById('welcome');
const H_SORT = document.getElementById("sort");
const H_HP = document.getElementById("lowHp");
const H_ADD = document.getElementById("addMonster");
const P_WRONG = document.getElementById("wrong");
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
const I_ADDN = document.getElementById("addName");
const I_ADDH = document.getElementById("addHealth");
const I_ADDT = document.getElementById("addType");
const B_ADD = document.getElementById("addButton");
// constants for the increase and decrease buttons to make coding easier
const B_DECREASE = document.getElementById("decrease");
const B_INCREASE = document.getElementById("increase");
// constants for the search type to make coding easier
const L_TYPE = document.getElementById("labelType");
const I_TYPE = document.getElementById("type");
const B_TYPE = document.getElementById("typeButton");
// constant for the low hp to make coding easier
const B_LOW = document.getElementById("low");
// constant for the original amount of monsters in the pokedex
const ORIGINAL_MONSTERS = 10;
// arrays to store monster info
let monsterName = new Array(ORIGINAL_MONSTERS);
let healthPoints = new Array(ORIGINAL_MONSTERS);
let type = new Array(ORIGINAL_MONSTERS);
// these varibles keeps track of the guest login
let guestUsername = 'guest';
let guestPassword = 'monster';
// these varibles keeps track of the trainer login
let trainerUsername = "trainer";
let trainerPassword = "pass";
// these varibles keep track of the professor login
let professorUsername = "professor";
let professorPassword = "4321";

// checks if you logged in correct and which profile you are
function logIn() {
    // checks if you are the guest
    if (I_USERNAME.value == guestUsername && I_PASSWORD.value == guestPassword) {
        // shows a text welcoming the guest
        H_WELCOME.innerText = "WELCOME GUEST";
        // creates the monsters for the pokedex
        createMonsters();
        // hides the login when you sucessfully log in
        hideLogIn();
        // creates the pokedex
        pokedex();
    // checks if you are the trainer
    } else if (I_USERNAME.value == trainerUsername && I_PASSWORD.value == trainerPassword) {
        // shows a text welcoming the trainer
        H_WELCOME.innerText = "WELCOME TRAINER";
        createMonsters();
        hideLogIn();
        pokedex();
        // shows the trainer profile
        trainerProfile();
    // checks if you are the professor
    } else if (I_USERNAME.value == professorUsername && I_PASSWORD.value == professorPassword) {
        // shows a text welcoming the professor
        H_WELCOME.innerText = "WELCOME PROFESSOR";
        createMonsters();
        hideLogIn();
        pokedex();
        // shows the professor profile
        professorProfile();
    } else {
        // if login does not match any profile, show error login and remove user input
        I_USERNAME.value = "";
        I_PASSWORD.value = "";
        P_WRONG.innerText = "Wrong Login Try Again";
    }
}

function searchType(valueToFind) {
    // varible to check for the matches found
    let matchesFound = 0;
    // clears the error message if there was one previously
    P_WRONG.innerText = "";
    // array to check for matches
    let match = new Array(type.length);
    // checks if each type matches the user input
    for ( let i = 0; i < type.length; i++) {
        if (type[i] == valueToFind) {
            // adds the information of the index to the local array
            match[matchesFound] = "Name: " + monsterName[i] + " | " + " Health: " + healthPoints[i] +  " | " + " Type: " + type[i] + "\n" + "\n";
            // increase matchesFound by one if a match was found
            matchesFound++;
        }
    }
    // checks if there is a match found
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

function lowHpSearch() {
    // varible to check if there are more than one monster with the lowest hp
    let matchesFound = 0;
    // varible to check for the lowest hp monster
    let smallestHp;
    // removes the pokedex
    H_POKEDEX.innerText = "";
    // array to check for matches
    let match = new Array(healthPoints.length);
    // assume the first element is the smallest to start
    smallestHp = healthPoints[0];
    // start from 2nd element because the 1st element is already used
    for (i = 1; i < healthPoints.length; i++) {
        // if the current array element is smaller than the smallest, then current element becomes the new smallest
        if (smallestHp > healthPoints[i]) {
            smallestHp = healthPoints[i];
        }
    }
    // checks if there is more than one element that is the same hp as the smallest 
    for (i = 0; i < healthPoints.length; i++) {
        // if there is one, adds the information of the index to the local array
        if (smallestHp == healthPoints[i]) {
            match[matchesFound] = "Name: " + monsterName[i] + " | " + " Health: " + healthPoints[i] +  " | " + " Type: " + type[i] + "\n" + "\n";
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
function sortDecrease() {
    // creates local varibles to switch the indexes around to sort
    let temp;
    let temp1;
    let temp2;
    // removes the current pokedex
    H_POKEDEX.innerText = "";
    // clears error message if there was one previously
    P_WRONG.innerText = "";
    // get an index of the array
    for (let i = 0; i < healthPoints.length; i++) {
        // loop that checks if the given index is smaller or bigger than every other index
        for (let l = 0; l < healthPoints.length; l++) {
            // checks if given index is bigger than the current index, if so, switch indexes around
            if (healthPoints[i] > healthPoints[l]) {
                // saves the index to the varible
                temp = healthPoints[i];
                temp1 = type[i];
                temp2 = monsterName[i];
                // replaces the given index with the current index
                healthPoints[i] = healthPoints[l];
                monsterName[i] = monsterName[l];
                type[i] = type[l];
                // replaces the current index with the varible that contains the given index
                healthPoints[l] = temp;
                type[l] = temp1;
                monsterName[l] = temp2;
            }
        }
    }
    // shows the new pokedex
    pokedex();
}

// sorts pokedex from lowest to highest health points
function sortIncrease() {
    // creates local varibles to switch the indexes around to sort
    let temp;
    let temp1;
    let temp2;
    // removes the current pokedex
    H_POKEDEX.innerText = "";
    // clears error message if there was one previously
    P_WRONG.innerText = "";
    // get an index of the array
    for (let i = 0; i < healthPoints.length; i++) {
        // loop that checks if the given index is smaller or bigger than every other index
        for (let l = 0; l < healthPoints.length; l++) {
            // checks if given index is smaller than the current index, if so, switch indexes around
            if (healthPoints[i] < healthPoints[l]) {
                // saves the index to the varible
                temp = healthPoints[i];
                temp1 = monsterName[i];
                temp2 = type[i];
                // replaces the given index with the current index
                healthPoints[i] = healthPoints[l]
                monsterName[i] = monsterName[l];
                type[i] = type[l];
                // replaces the current index with the varible that contains the given index
                healthPoints[l] = temp;
                monsterName[l] = temp1;
                type[l] = temp2;
            }
        }
    }
    // shows the new pokedex
    pokedex();
}

// allows user to add a monster to the pokedex
function addMonster(newData1, newData2, newData3) {
    // local arrays which have an extra space for the new monster information
    let newName = [monsterName.length + 1];
    let newHealth = [healthPoints.length + 1];
    let newType = [type.length + 1];
    // removes the current pokedex
    H_POKEDEX.innerText = "";
    // clears error message if there was one previously
    P_WRONG.innerText = "";
    // checks if the user inputted in the textboxes and if the format is correct
    if (I_ADDH.value.length > 0 && I_ADDN.value.length > 0 && I_ADDT.value.length > 0 && (isNaN(I_ADDH.value) == false)) {
        // copys the original array into the local array
        for (let i = 0; i < monsterName.length; i++) {
            newName[i] = monsterName[i];
        }
        // shifts everything to the right to make the first array empty
        for (let i = newName.length + 1; i >= 1; i--) {
            newName[i - 1] = monsterName[i - 2];
        }
        // input what the user typed into the first array
        newName[0] = newData1;
        // makes the orignal array have the new array information
        monsterName = newName;
        
        for (let i = 0; i < healthPoints.length; i++) {
            newHealth[i] = healthPoints[i];
        }
        for (let i = newHealth.length + 1; i >= 1; i--) {
            newHealth[i - 1] = healthPoints[i - 2];
        }
        newHealth[0] = newData2;
        healthPoints = newHealth;
        
        for (let i = 0; i < type.length; i++) {
            newType[i] = type[i];
        }
        for (let i = newType.length + 1; i >= 1; i--) {
            newType[i - 1] = type[i - 2];
        }
        newType[0] = newData3;
        type = newType;
    } else {
        // if user did not input in all the textboxes or the format is wrong, show an error message
        P_WRONG.innerText = "Please insert proper formatting.";
    }
    // adds the updated pokedex
    pokedex(); 
    // clears the textboxes
    I_ADDH.value = "";
    I_ADDN.value = "";
    I_ADDT.value = "";
}

// allows the user to partially search for a monster name
function partialSearch(valueToFind) {
    // varible to check for the matches found 
    let matchesFound = 0;
    // removes the pokedex
    H_POKEDEX.innerText = "";
    // clears error message if there was one previously
    P_WRONG.innerText = "";
    // checks if each index contains the user input
    for ( let i = 0; i < monsterName.length; i++) {
        // checks if the given index of the loop contains the user input
        if (monsterName[i].indexOf(valueToFind) != -1 ){
            // the pokedex will display the index and will add on if more matches are found
            H_POKEDEX.innerText += "Name: " + monsterName[i] + " | " + " Health: " + healthPoints[i] +  " | " + " Type: " + type[i] + "\n" + "\n";
            // increase matchesFound by one if a match was found
            matchesFound++;     
        }
    }
    // checks if matches found was 0
    if (matchesFound == 0) {
        // shows the original pokedex
        pokedex();
        // shows an error text that the input could not be matched with any index
        P_WRONG.innerText = "Matches not found, check spelling or errors.";
    }
    // clears the textbox after 
    I_PARTIAL.value = "";
}

// allows the user to fully search for a monsters name
function nameSearch(valueToFind) {
    // varible to check for the matches found
    let matchesFound = 0;
    // clears the error message if there was one previously
    P_WRONG.innerText = "";
    // array to check for matches
    let match = new Array(monsterName.length);
    // checks if each name matches the user input
    for ( let i = 0; i < monsterName.length; i++){
        if (monsterName[i] == valueToFind){
            // adds the information to the local array with the index being the amount of matches found
            match[matchesFound] = "Name: " + monsterName[i] + " | " + " Health: " + healthPoints[i] +  " | " + " Type: " + type[i] + "\n" + "\n";
            // increase matchesFound by one if a match was found
            matchesFound++;
        }
    }
    // checks if there is a match found
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

function trainerProfile() {
    // shows all the features the trainer can use
    L_ADDN.hidden = false;
    L_ADDH.hidden = false;
    L_ADDT.hidden = false;
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
    H_HP.innerText = "Search For Lowest Hp Monsters:";
}

// creates the pokedex
function pokedex() {
    // creates the information of each monster into the pokedex
    for (let i = 0; i < monsterName.length; i++) {
        H_POKEDEX.innerText += "Name: " + monsterName[i] + " | " + " Health: " + healthPoints[i] +  " | " + " Type: " + type[i] + "\n" + "\n";
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

// creates the original pokedex monster info
function createMonsters() {
    monsterName[0] = "Pikachu";
    healthPoints[0] = 60;
    type[0] = "Electric";

    monsterName[1] = "Charmander";
    healthPoints[1] = 50;
    type[1] = "Fire";

    monsterName[2] = "Squirtle";
    healthPoints[2] = 45;
    type[2] = "Water";

    monsterName[3] = "Bulbasaur";
    healthPoints[3] = 55;
    type[3] = "Grass";

    monsterName[4] = "Greninja";
    healthPoints[4] = 70;
    type[4] = "Water";

    monsterName[5] = "Snorlax";
    healthPoints[5] = 100;
    type[5] = "Normal";

    monsterName[6] = "Eevee";
    healthPoints[6] = 35;
    type[6] = "Normal";
    
    monsterName[7] = "Raikou";
    healthPoints[7] = 80;
    type[7] = "Electric";

    monsterName[8] = "Shaymin";
    healthPoints[8] = 35;
    type[8] = "Grass";

    monsterName[9] = "Arcanine";
    healthPoints[9] = 65;
    type[9] = "Fire";
}