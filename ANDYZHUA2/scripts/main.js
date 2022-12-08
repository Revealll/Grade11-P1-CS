// constants to make coding the character selection easier
const P_CHARACTER_LIST = document.getElementById('characterList');
const P_PICTURE = document.getElementById('picture');
const P_PICTURE_2 = document.getElementById('picture2');
const H_HEADER = document.getElementById('header');
// constants for the buttons to make coding easier
const B_PREVIOUS = document.getElementById('previous');
const B_NEXT = document.getElementById('next');
const B_SELECT = document.getElementById('select');
// constants to identify which player is who
const P_PLAYER1 = document.getElementById("player1");
const P_PLAYER2 = document.getElementById("player2");
// constants for the textbox to make coding easier
const TYPE = document.getElementById("type");
const LABEL = document.getElementById("label");
// constants for the attack buttons to make coding easier
const NORMAL = document.getElementById("normal");
const SPECIAL = document.getElementById("special");
// constants for the paragraphs for the type racer
const TYPED = document.getElementById("wordTyped")
const LEFT = document.getElementById("wordLeft");
const WORD = document.getElementById("wordShowed");
// constants to identify which character is what
const NUMBER_OF_CHARACTERS = 2;
const CHARACTER_ONE = 0;
const CHARACTER_TWO = 1;
// arrays to store each players info
let names = new Array(NUMBER_OF_CHARACTERS);
let health = new Array(NUMBER_OF_CHARACTERS);
let normal = new Array(NUMBER_OF_CHARACTERS);
let special = new Array(NUMBER_OF_CHARACTERS);
let image = new Array(NUMBER_OF_CHARACTERS);
let paragraphs = new Array(NUMBER_OF_CHARACTERS);
// array for the words
let words = new Array(20);
// this varible will keep track of what character is being shown and what character is picked
let currentIndex = 0;
// this varible allows us to keep track of the computer character
let oppositeIndex;
// this varible will keep track of if the player is using special or normal attack
let attackIndex;    
// this varible is the current word displayed in the array
let currentWord;
// this varible will keep track of if you have clicked an attack button
let selectedValue;
// store the ai normal attack timer so it can be shut off later
let normalTimer;
// store the ai special attack timer so it can be shut off later
let specialTimer;
// store the update timer so it can be shut off later
let updateTimer;
// assign select character information
start();
updateTimer = setInterval(update, 20);
// what happens when the game starts
function start() {
    createCharacter();
    createWords();
    displayCharacter(CHARACTER_ONE);
    showImage();
    
}   
// it checks for input of the textbox when needed
function update() {
    if (selectedValue == 1) {
        typeChecker();
        
    }
}
// checks the input of each letter in the textbox to see if it matches word
function typeChecker() {
    // varibles for the first part of string and last part of string
    let firstLetter = getStringFront(currentWord);
    let backWord = getStringBack(currentWord);
    // varibles for each input in a string to check 
    let letter2 = currentWord.substring(0, 2);
    let letter3 = currentWord.substring(0, 3);
    let letter4 = currentWord.substring(0, 4);
    let letter5 = currentWord.substring(0, 5);
    let letter6 = currentWord.substring(0, 6);
    let letter7 = currentWord.substring(0, 7);
    let letter8 = currentWord.substring(0, 8);
    let letter9 = currentWord.substring(0, 9);
    let letter10 = currentWord.substring(0, 10);        

    let text = TYPE.value;
    // Checks each input to see if it matches the word, puts words needed and correct letters when needed
    if (text == 0) {
        TYPED.innerText = "Correct Letters: "
        LEFT.innerText = "Letters Needed: " + firstLetter + backWord;
    }
    if (firstLetter == text) {
        TYPED.innerText = "Correct Letters: " + firstLetter;
        LEFT.innerText = "Letters Needed: " + backWord;
    }
    // Checks if any letter is wrong for the special attack, stop the attack if any letter is wrong
    else if(text.length == 1 && text.substring(0, 1) != firstLetter && attackIndex == 1) {
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
    if (letter2 == text) {
        TYPED.innerText = "Correct Letters: " + letter2;
        LEFT.innerText = "Letters Needed: " + backWord.slice(1);
    }
    else if (text.substring(0, 1) == firstLetter && text.length == 2 && text.substring(1, 2) != letter2 && attackIndex == 1) {
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
    if (letter3 == text) {
        TYPED.innerText = "Correct Letters: " + letter3;
        LEFT.innerText = "Letters Needed: " + backWord.slice(2);
    }
    else if (text.substring(0, 2) == letter2 && text.length == 3 && text.substring(2, 3) != letter3 && attackIndex == 1) {
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
    if (letter4 == text) {
        TYPED.innerText = "Correct Letters: " + letter4;
        LEFT.innerText = "Letters Needed: " + backWord.slice(3);
    }
    else if (text.substring(0, 3) == letter3 && text.length == 4 && text.substring(3, 4) != letter4 && attackIndex == 1) {
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
    if (letter5 == text) {
        TYPED.innerText = "Correct Letters: " + letter5;
        LEFT.innerText = "Letters Needed: " + backWord.slice(4);
    }
    else if (text.substring(0, 4) == letter4 && text.length == 5 && text.substring(4, 5) != letter4 && attackIndex == 1) {
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
    if (letter6 == text) {
        TYPED.innerText = "Correct Letters: " + letter6;
        LEFT.innerText = "Letters Needed: " + backWord.slice(5);
    }
    else if (text.substring(0, 5) == letter5 && text.length == 6 && text.substring(5, 6) != letter5 && attackIndex == 1) {
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
    if (letter7 == text) {
        TYPED.innerText = "Correct Letters: " + letter7;
        LEFT.innerText = "Letters Needed: " + backWord.slice(6);
    }
    else if (text.substring(0, 6) == letter6 && text.length == 7 && text.substring(6, 7) != letter6 && attackIndex == 1) {
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
    if (letter8 == text) {
        TYPED.innerText = "Correct Letters: " + letter8;
        LEFT.innerText = "Letters Needed: " + backWord.slice(7);
    }
    else if (text.substring(0, 7) == letter6 && text.length == 7 && text.substring(6, 7) != letter7 && attackIndex == 1) {
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
    if (letter9 == text) {
        TYPED.innerText = "Correct Letters: " + letter9;
        LEFT.innerText = "Letters Needed: " + backWord.slice(8);
    }
    else if (text.substring(0, 8) == letter7 && text.length == 8 && text.substring(7, 8) != letter8 && attackIndex == 1) {
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
    if (letter10 == text) {
        TYPED.innerText = "Correct Letters: " + letter10;
        LEFT.innerText = "Letters Needed: " + backWord.slice(9);
    }
    else if (text.substring(0, 9) == letter8 && text.length == 9 && text.substring(8, 9) != letter9 && attackIndex == 1) {
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
    if (text.substring(0, 10) == letter9 && text.length == 10 && text.substring(9, 10) != letter10 && attackIndex == 1) {
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
    // checks if the input matches the current word chosen, does attacks if it is right
    if (text == currentWord) {
        normalAttack(oppositeIndex);
        specialAttack(oppositeIndex);
        // clears everything and disables textbox
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        LEFT.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
}
// creates a word for normal attack
function createWordNormal() {
    // values set to let the webpage know you are attacking and it is a normal attack
    selectedValue = 1;
    attackIndex = 0;
    // makes the word into the current word varible
    currentWord = words[createRandom(0, words.length)];
    WORD.innerText = "Type " + currentWord;
    // enables the textbox
    TYPE.disabled = false;
}
// creates a word for special attack
function createWordSpecial() {
    // values set to let the webpage know you are attacking and it is a special attack
    selectedValue = 1;
    attackIndex = 1;
    // makes the word into the current word varible
    currentWord = words[createRandom(0, words.length)];
    WORD.innerText = "Type: " + currentWord;
    // enables the textbox
    TYPE.disabled = false;
    // disables the special attack button
    SPECIAL.disabled = true;
    // timer to enable the button for 15 seconds after pressed
    setInterval(enableSpecial, 15000);
    
}
// enables the special attack button
function enableSpecial() {
    SPECIAL.disabled = false;
}
// creates a random number and returns it
function createRandom(min, max) {
    randomNumber = Math.floor(Math.random()*max) + min;
    return randomNumber;
}

// gets the first letter of the string
function getStringFront(string) {
    let result = string.substring(0, 1);
    return result; 
}
// gets everything but the first letter of the string
function getStringBack(string) {
    let result2 = string.substring(1, string.length);
    return result2;
}

// normal attack for the user
function normalAttack(input) {
    // checks if it is a normal or special attack
    if (attackIndex == 0) {
        // checks which index is the computers, by using opposite index
        if (currentIndex == 0) {
                oppositeIndex = 1;
            }
            else {
                oppositeIndex = 0;
            } 
            // attack is a random number done between ranges depending on the index of word chosen
            health[input] = health[input] - (Math.floor(Math.random() * (normal[currentIndex] * (randomNumber + 2) / 2)) + normal[currentIndex]);
            showPlayerInfo();
            // checks if hp is 0 for any user
            checkGameOver();
        }
}
// normal attack for the computer
function computerNormal() {
    // checks which index is the computers, by using opposite index
    if (currentIndex == 0) {
        oppositeIndex = 1;
    }
    else {
        oppositeIndex = 0;
    }
    // creates a random number for the attacks
    let randomNum = Math.floor(Math.random() * 20); 
    // attack is a random number done between ranges depending on random number chosen
    health[currentIndex] = health[currentIndex] - (Math.floor(Math.random() * (normal[oppositeIndex] * (randomNum + 2)/2)) + normal[oppositeIndex]); 
    showPlayerInfo();
    // checks if hp is 0 for any user
    checkGameOver();
}
// computer does the normal attack two times
function computerAutoNormal() {
    computerNormal();
    computerNormal();
}
// special attack for the computer
function computerSpecial() {
    // check which index is the computers, by using opposite index
    if (currentIndex == 0) {
        oppositeIndex = 1;
    }
    else {
        oppositeIndex = 0;
    }
    // creates a random number for the attacks
    let randomNum = Math.floor(Math.random() * 20); 
    // attack is a random number done between ranges depending on random number chosen
    health[currentIndex] = health[currentIndex] - (Math.floor(Math.random() * (special[oppositeIndex] * (randomNum + 2)/2)) + special[oppositeIndex]); 
    showPlayerInfo();
    // checks if hp is 0 for any user
    checkGameOver();
}

// special attack for the user
function specialAttack(input) {
    // checks if it is a normal or special attack
    if (attackIndex == 1) {
        // checks which index is the computers, by using opposite index
        if (currentIndex == 0) {
                oppositeIndex = 1;
            }
            else {
                oppositeIndex = 0;  
            } 
            // attack is a random number done between ranges depending on the index of word chosen
            health[input] = health[input] - (Math.floor(Math.random() * (special[currentIndex] * (randomNumber + 2) / 2)) + special[currentIndex]);
            showPlayerInfo();
            // checks if hp is 0 for any user
            checkGameOver();
        }
}
 
// shows gamescreen and info for each player
function selectCharacter() {
    gameScreen();
    showPlayerInfo();
}
// the game screen, after selecting a character
function gameScreen() {
    // hides the selection screen varibles and shows the game screen varibles
    B_PREVIOUS.hidden = true;
    B_NEXT.hidden = true;
    B_SELECT.hidden = true;
    TYPE.hidden = false;
    LABEL.hidden = false;   
    P_PICTURE_2.hidden = false;
    SPECIAL.hidden = false;
    NORMAL.hidden = false;

    H_HEADER.innerText = "Battle To The Death!";
    
    P_CHARACTER_LIST.innerText = "";
    // timers for the computers attack to start after game begins
    normalTimer = setInterval(computerAutoNormal, 5000);
    specialTimer = setInterval(computerSpecial, 15000);
}
// show each players info after game starts
function showPlayerInfo() {
    // checks current index to see which character is the players and which is the computers
    if (currentIndex == 1) {
        P_PLAYER1.innerText = "Player: " + names[currentIndex] + "\n" + "Maximum Health: " + health[currentIndex] + "\n" + "Normal Attack: " + normal[currentIndex] + "\n" + "Special Attack: " + special[currentIndex];
        P_PLAYER2.innerText = "Computer: " + names[CHARACTER_ONE] + "\n" + "Maximum Health: " + health[CHARACTER_ONE] + "\n" + "Normal Attack: " + normal[CHARACTER_ONE] + "\n" + "Special Attack: " + special[CHARACTER_ONE];
        P_PICTURE_2.src = image[CHARACTER_TWO];
        P_PICTURE.src = image[CHARACTER_ONE];
    }
    else {
        P_PLAYER1.innerText = "Player: " + names[currentIndex] + "\n" + "Maximum Health: " + health[currentIndex] + "\n" + "Normal Attack: " + normal[currentIndex] + "\n" + "Special Attack: " + special[currentIndex];
        P_PLAYER2.innerText = "Computer: " + names[CHARACTER_TWO] + "\n" + "Maximum Health: " + health[CHARACTER_TWO] + "\n" + "Normal Attack: " + normal[CHARACTER_TWO] + "\n" + "Special Attack: " + special[CHARACTER_TWO];
        P_PICTURE_2.src = image[CHARACTER_ONE];
        P_PICTURE.src = image[CHARACTER_TWO];
    }
}
// shows the next character in the character selection
function showNextCharacter() {
    // goes to the next character if at the end, it repeats
    if (currentIndex < names.length - 1) {
        currentIndex = currentIndex + 1;
    } 
    else {
        currentIndex = currentIndex -1;
    }
    
    displayCharacter(currentIndex);
    showImage();
}
// shows the previous character in the character selection
function showPreviousCharacter() {
    // goes to the previous character if at the end, it repeats
    if (currentIndex > 0) {
        currentIndex = currentIndex -1;
    }
    else {
        currentIndex = currentIndex +1;
    }

    displayCharacter(currentIndex);
    showImage();
}

// displays the characters in the selection screen given by the currentindex
function displayCharacter(index) {
    H_HEADER.innerText = "Choose your Character!";
    P_CHARACTER_LIST.innerText = "CURRENT CHARACTER: " + names[index] + "\n" + "Maximum Health: " + health[index] + "\n" + "Normal Attack: " + normal[index] + "\n" + "Special Attack: " + special[index];
}
// shows the image given by the currentindex
function showImage() {           
    P_PICTURE.src = image[currentIndex]; 
}
// creates the characters info
function createCharacter() {
    names[CHARACTER_ONE] = "Rosemary Orozco";
    health[CHARACTER_ONE] = 250;
    normal[CHARACTER_ONE] = 8;
    special[CHARACTER_ONE] = 60;
    image[CHARACTER_ONE] = "girl.jpg";
    paragraphs[CHARACTER_ONE] = P_PLAYER1;

    names[CHARACTER_TWO] = "Benjamin Garrett";
    health[CHARACTER_TWO] = 270;
    normal[CHARACTER_TWO] = 6;
    special[CHARACTER_TWO] = 75; 
    image[CHARACTER_TWO] = "boy.jpg";
    paragraphs[CHARACTER_TWO] = P_PLAYER2;     
}
// check if any players health is equal or less than 0, if it is, end the game
function checkGameOver() {
    if (health[CHARACTER_ONE] <= 0) {
        alert("Game Over!");
        H_HEADER.innerText = "Game Over!";
        // disable all the buttons
        NORMAL.disabled = true;
        SPECIAL.disabled = true;
        TYPE.disabled = true;
        // turn off all the timers
        clearInterval(normalTimer);
        clearInterval(specialTimer);
        clearInterval(updateTimer);
    }
    if (health[CHARACTER_TWO] <= 0) {
        alert("Game Over!");
        H_HEADER.innerText = "Game Over!";
        // disable all the buttons
        NORMAL.disabled = true;
        SPECIAL.disabled = true;
        TYPE.disabled = true;
        // turn off all the timers
        clearInterval(normalTimer);
        clearInterval(specialTimer);
        clearInterval(updateTimer);
    }
}
// create the words for the type racer
function createWords() {
    words[0] = "to";
    words[1] = "hi";
    words[2] = "bro";
    words[3] = "the";
    words[4] = "she";
    words[5] = "food";
    words[6] = "army";
    words[7] = "baby";
    words[8] = "paper";
    words[9] = "shelf";
    words[10] = "space";
    words[11] = "iphone";
    words[12] = "action";
    words[13] = "account";
    words[14] = "ability";
    words[15] = "accuracy";
    words[16] = "technique";
    words[17] = "paralyzed";
    words[18] = "appreciate";
    words[19] = "friendship" ;
}
