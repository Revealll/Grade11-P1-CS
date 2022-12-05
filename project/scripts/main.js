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
const LEFT = document.getElementById("wordsLeft");
const WORD = document.getElementById("wordShowed");
const NUMBER_OF_CHARACTERS = 2;
const CHARACTER_ONE = 0;
const CHARACTER_TWO = 1;

let oppositeIndex;

let names = new Array(NUMBER_OF_CHARACTERS);
let health = new Array(NUMBER_OF_CHARACTERS);
let normal = new Array(NUMBER_OF_CHARACTERS);
let special = new Array(NUMBER_OF_CHARACTERS);
let image = new Array(NUMBER_OF_CHARACTERS);
let paragraphs = new Array(NUMBER_OF_CHARACTERS);

let words = new Array(20);

let currentIndex = 0;

let selectedIndex;

let randomIndex;    

let currentWord;

let letter;

let newWord;
start();
setInterval(update, 20)
  

function update() {
    if (TYPE.value.length > 0) {
        textRacer();
    }
    
}

function start() {
    createCharacter();
    displayCharacter(CHARACTER_ONE);
    showImage();
}   

function textRacer() {

    letter = getStringFront(currentWord)
    let ya = TYPE.value
    if (ya == currentWord) {
        normalAttack(oppositeIndex)
        TYPE.value = ""
        WORD.innerText = ""
        currentWord = null;
        TYPE.disabled = true;
    }
}

function createWord() {
    currentWord = words[createRandom(0, words.length)]
    WORD.innerText = currentWord;
    TYPE.disabled = false;
}

function createRandom(min, max) {
    randomNumber = Math.floor(Math.random()*max) + min;
    return randomNumber;
}


function getStringFront(string) {
    let result = string.substring(0, 1)
    return result 
}


function normalAttack(input) {
    letter = getStringFront(currentWord)
    if (TYPE.value == currentWord) {
        if (currentIndex == 0) {
            oppositeIndex = 1;
        }
        else {
            oppositeIndex = 0;
            
        } 
        health[input] = health[input] - normal[currentIndex] * ((randomNumber + 2)/2);
        showPlayerInfo();
    }
}


function specialAttack(input) {
    createWord();
    if (currentIndex == 0) {
        oppositeIndex = 1;
    }
    else {
        oppositeIndex = 0;
    } 
    health[input] = health[input] - special[currentIndex] * ((randomNumber + 2)/2);
    
    showPlayerInfo();
} 

function selectCharacter() {
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
    showPlayerInfo();
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


function displayCharacter(currentIndex) {
    H_HEADER.innerText = "Choose your Character!";
    P_CHARACTER_LIST.innerText = "CURRENT CHARACTER: " + names[currentIndex] + "\n" + "Maximum Health: " + health[currentIndex] + "\n" + "Normal Attack: " + normal[currentIndex] + "\n" + "Special Attack: " + special[currentIndex];
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
