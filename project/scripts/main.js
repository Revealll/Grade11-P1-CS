const P_CHARACTER_LIST = document.getElementById('characterList');
const P_PICTURE = document.getElementById('picture');
const P_PICTURE_2 = document.getElementById('picture2');
const H_HEADER = document.getElementById('header');

const B_PREVIOUS = document.getElementById('previous');
const B_NEXT = document.getElementById('next');
const B_SELECT = document.getElementById('select');

const P_PLAYER1 = document.getElementById("player1");
const P_PLAYER2 = document.getElementById("player2");

const TYPE = document.getElementById("type");
const LABEL = document.getElementById("label");

const NORMAL = document.getElementById("normal");
const SPECIAL = document.getElementById("special");

const TYPED = document.getElementById("wordTyped")
const LEFT = document.getElementById("wordLeft");
const WORD = document.getElementById("wordShowed");
const NUMBER_OF_CHARACTERS = 2;
const CHARACTER_ONE = 0;
const CHARACTER_TWO = 1;

let names = new Array(NUMBER_OF_CHARACTERS);
let health = new Array(NUMBER_OF_CHARACTERS);
let normal = new Array(NUMBER_OF_CHARACTERS);
let special = new Array(NUMBER_OF_CHARACTERS);
let image = new Array(NUMBER_OF_CHARACTERS);
let paragraphs = new Array(NUMBER_OF_CHARACTERS);

let words = new Array(20);

let currentIndex = 0;

let oppositeIndex;

let attackIndex;    

let currentWord;

let selectedValue;

let normalTimer;

let specialTimer;
start();
setInterval(update, 20);

function update() {
    if (selectedValue == 1) {
        typeChecker();
        
    }
}

function start() {
    createCharacter();
    createWords();
    displayCharacter(CHARACTER_ONE);
    showImage();
    
}   

function typeChecker() {

    let firstLetter = getStringFront(currentWord)
    let backWord = getStringBack(currentWord);
    
    let letter2 = currentWord.substring(0, 2)
    let letter3 = currentWord.substring(0, 3)
    let letter4 = currentWord.substring(0, 4)
    let letter5 = currentWord.substring(0, 5)
    let letter6 = currentWord.substring(0, 6)
    let letter7 = currentWord.substring(0, 7)
    let letter8 = currentWord.substring(0, 8)
    let letter9 = currentWord.substring(0, 9)
    let letter10 = currentWord.substring(0, 10)        
    let text = TYPE.value;
    if (text == 0) {
        TYPED.innerText = "Correct Letters: "
        LEFT.innerText = "Letters Needed: " + firstLetter + backWord;
        
    }
    if (firstLetter == text) {
        TYPED.innerText = "Correct Letters: " + firstLetter;
        LEFT.innerText = "Letters Needed: " + backWord;
        
    }
    if (letter2 == text) {
        TYPED.innerText = "Correct Letters: " + letter2;
        LEFT.innerText = "Letters Needed: " + backWord.slice(1);
        
    }
    if (letter3 == text) {
        TYPED.innerText = "Correct Letters: " + letter3;
        LEFT.innerText = "Letters Needed: " + backWord.slice(2);

    }
    if (letter4 == text) {
        TYPED.innerText = "Correct Letters: " + letter4;
        LEFT.innerText = "Letters Needed: " + backWord.slice(3)
    };
    if (letter5 == text) {
        TYPED.innerText = "Correct Letters: " + letter5;
        LEFT.innerText = "Letters Needed: " + backWord.slice(4)
    }
    if (letter6 == text) {
        TYPED.innerText = "Correct Letters: " + letter6;
        LEFT.innerText = "Letters Needed: " + backWord.slice(5)
    }
    if (letter7 == text) {
        TYPED.innerText = "Correct Letters: " + letter7;
        LEFT.innerText = "Letters Needed: " + backWord.slice(6)
    }
    if (letter8 == text) {
        TYPED.innerText = "Correct Letters: " + letter8;
        LEFT.innerText = "Letters Needed: " + backWord.slice(7)
    }
    if (letter9 == text) {
        TYPED.innerText = "Correct Letters: " + letter9;
        LEFT.innerText = "Letters Needed: " + backWord.slice(8)
    }
    if (letter10 == text) {
        TYPED.innerText = "Correct Letters: " + letter10;
        LEFT.innerText = "Letters Needed: " + backWord.slice(9)
    }
    
    if (text == currentWord) {
        normalAttack(oppositeIndex);
        specialAttack(oppositeIndex);
        TYPE.value = "";
        WORD.innerText = "";
        TYPED.innerText = "";
        TYPE.disabled = true;
        selectedValue = 0;
    }
}

function createWordNormal() {
    selectedValue = 1;
    attackIndex = 0;
    currentWord = words[createRandom(0, words.length)];
    WORD.innerText = "Type " + currentWord;
    TYPE.disabled = false;
}


function createWordSpecial() {
    selectedValue = 1;
    attackIndex = 1;
    currentWord = words[createRandom(0, words.length)];
    WORD.innerText = "Type: " + currentWord;
    TYPE.disabled = false;
    SPECIAL.disabled = true;
    setInterval(enableSpecial, 15000);
    
}

function enableSpecial() {
    SPECIAL.disabled = false;
}
function createRandom(min, max) {
    randomNumber = Math.floor(Math.random()*max) + min;
    return randomNumber;
}


function getStringFront(string) {
    let result = string.substring(0, 1)
    return result; 
}

function getStringBack(string) {
    let result2 = string.substring(1, string.length);
    return result2;
}


function normalAttack(input) {
    if (attackIndex == 0) {
        if (currentIndex == 0) {
                oppositeIndex = 1;
            }
            else {
                oppositeIndex = 0;
            } 
            health[input] = health[input] - (Math.floor(Math.random() * (normal[currentIndex] * (randomNumber + 2) / 2)) + normal[currentIndex]);
            showPlayerInfo();
        }
}

function computerNormal() {
    if (currentIndex == 0) {
        oppositeIndex = 1;
    }
    else {
        oppositeIndex = 0;
    }
    let randomNum = Math.floor(Math.random() * 20) 
    health[currentIndex] = health[currentIndex] - (Math.floor(Math.random() * (normal[oppositeIndex] * (randomNum + 2)/2)) + normal[oppositeIndex]); 
    showPlayerInfo();
}

function computerAutoNormal() {
    computerNormal();
    computerNormal();
}

function computerSpecial() {
    if (currentIndex == 0) {
        oppositeIndex = 1;
    }
    else {
        oppositeIndex = 0;
    }
    let randomNum = Math.floor(Math.random() * 20) 
    health[currentIndex] = health[currentIndex] - (Math.floor(Math.random() * (special[oppositeIndex] * (randomNum + 2)/2)) + special[oppositeIndex]); 
    showPlayerInfo();
}


function specialAttack(input) {
    if (attackIndex == 1) {
        if (currentIndex == 0) {
                oppositeIndex = 1;
            }
            else {
                oppositeIndex = 0;  
            } 
            health[input] = health[input] - (Math.floor(Math.random() * (special[currentIndex] * (randomNumber + 2) / 2)) + special[currentIndex]);
            showPlayerInfo();
        }
}
 

function selectCharacter() {
    gameScreen();
    showPlayerInfo();
}

function gameScreen() {
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

    normalTimer = setInterval(computerAutoNormal, 5000);
    specialTimer = setInterval(computerSpecial, 15000);
}

function showPlayerInfo() {
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

function showNextCharacter() {
    // only go to the next character if not at the end
    if (currentIndex < names.length - 1) {
        currentIndex = currentIndex + 1;
    } 
    else {
        currentIndex = currentIndex -1;
    }
    
    displayCharacter(currentIndex);
    showImage();
}

function showPreviousCharacter() {
    // only go to the next character if not at the end
    if (currentIndex > 0) {
        currentIndex = currentIndex -1;
    }
    else {
        currentIndex = currentIndex +1;
    }

    displayCharacter(currentIndex);
    showImage();
}


function displayCharacter(index) {
    H_HEADER.innerText = "Choose your Character!";
    P_CHARACTER_LIST.innerText = "CURRENT CHARACTER: " + names[index] + "\n" + "Maximum Health: " + health[index] + "\n" + "Normal Attack: " + normal[index] + "\n" + "Special Attack: " + special[index];
}

function showImage() {           
    P_PICTURE.src = image[currentIndex];
    P_PICTURE.width = 225;
    P_PICTURE.height = 150;
    
}

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

function checkGameOver() {
    if (health[CHARACTER_ONE] <= 0) {
        alert("Game Over!");
        NORMAL.disabled = true;
        SPECIAL.disabled = true;
        TYPE.disabled = true;
        clearInterval(normalTimer);
        clearInterval(specialTimer);
    }
}
function createWords() {
    words[0] = "to"
    words[1] = "hi"
    words[2] = "bro"
    words[3] = "the"
    words[4] = "she"
    words[5] = "food"
    words[6] = "army"
    words[7] = "baby"
    words[8] = "paper"
    words[9] = "shelf"
    words[10] = "space"
    words[11] = "iphone"
    words[12] = "action"
    words[13] = "account"
    words[14] = "ability"
    words[15] = "accuracy"
    words[16] = "technique"
    words[17] = "paralyzed"
    words[18] = "appreciate"
    words[19] = "friendship" 
}
