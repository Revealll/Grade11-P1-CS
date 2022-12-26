const L_USERNAME = document.getElementById("username");
const L_PASSWORD = document.getElementById("password");
const I_USERNAME = document.getElementById("user");
const I_PASSWORD = document.getElementById("pass");
const B_LOGIN = document.getElementById("logIn");

const H_POKEDEX = document.getElementById("pokedex");
const H_WELCOME = document.getElementById('welcome');
const H_SORT = document.getElementById("sort");
const H_HP = document.getElementById("lowHp");

const L_SEARCH = document.getElementById("labelSearch");
const I_SEARCH = document.getElementById("search");
const B_SEARCH = document.getElementById("searchButton");

const L_PARTIAL = document.getElementById("labelPartial");
const I_PARTIAL = document.getElementById("partial");
const B_PARTIAL = document.getElementById("partialButton");

const L_ADD = document.getElementById("labelAdd");
const I_ADD = document.getElementById("add");
const B_ADD = document.getElementById("addButton");

const B_DECREASE = document.getElementById("decrease");
const B_INCREASE = document.getElementById("increase");

const L_TYPE = document.getElementById("labelType");
const I_TYPE = document.getElementById("type");
const B_TYPE = document.getElementById("typeButton");

const B_LOW = document.getElementById("low");

const ORIGINAL_MONSTERS = 10;
let monsterName = new Array(ORIGINAL_MONSTERS);
let healthPoints = new Array(ORIGINAL_MONSTERS);
let type = new Array(ORIGINAL_MONSTERS);

let guestUsername = 'guest';
let guestPassword = 'monster';

let trainerUsername = "trainer";
let trainerPassword = "pass";

let professorUsername = "professor";
let professorPassword = "4321";

function logIn() {
    if (I_USERNAME.value == guestUsername && I_PASSWORD.value == guestPassword){
        H_WELCOME.innerText = "WELCOME GUEST"
        createMonsters();
        hideLogIn();
        pokedex();
    } else if (I_USERNAME.value == trainerUsername && I_PASSWORD.value == trainerPassword){
        H_WELCOME.innerText = "WELCOME TRAINER"
        createMonsters();
        hideLogIn();
        pokedex();
        trainerProfile();
    } else if (I_USERNAME.value == professorUsername && I_PASSWORD.value == professorPassword){
        H_WELCOME.innerText = "WELCOME PROFESSOR"
        createMonsters();
        hideLogIn();
        pokedex();
        professorProfile();
    } else {
        document.getElementById("text").innerText = "Wrong Login"
    }
}
function trainerProfile() {
    L_ADD.hidden = false;
    I_ADD.hidden = false;
    B_ADD.hidden = false;
    L_SEARCH.hidden = false;
    I_SEARCH.hidden = false;
    B_SEARCH.hidden = false;
    B_DECREASE.hidden = false;
    B_INCREASE.hidden = false;
    H_SORT.innerText = "Sort By HP: "
}

function professorProfile() {
    trainerProfile();
    L_PARTIAL.hidden = false;
    I_PARTIAL.hidden = false;
    B_PARTIAL.hidden = false;
    L_TYPE.hidden = false;
    I_TYPE.hidden = false;
    B_TYPE.hidden = false;
    B_LOW.hidden = false;
    H_HP.innerText = "Search For Lowest Hp Monsters: "
}
function pokedex() {
    for (let i = 0; i < monsterName.length; i++) {
        H_POKEDEX.innerText += "Name: " + monsterName[i] + " | " + " Health: " + healthPoints[i] +  " | " + " Type: " + type[i] + "\n" + "\n";
    }
}
function hideLogIn() {
    L_USERNAME.hidden = true;
    L_PASSWORD.hidden = true;
    I_USERNAME.hidden = true;
    I_PASSWORD.hidden = true;
    B_LOGIN.hidden = true;
}
function createMonsters() {
    monsterName[0] = "Pikachu";
    healthPoints[0] = "60";
    type[0] = "Electric";
    monsterName[1] = "Charmander";
    healthPoints[1] = "50";
    type[1] = "fire";
    monsterName[2] = "Squirtle";
    healthPoints[2] = "45";
    type[2] = "Water";
    monsterName[3] = "Bulbasaur";
    healthPoints[3] = "55";
    type[3] = "Grass";
    monsterName[4] = "Greninja";
    healthPoints[4] = "70";
    type[4] = "Water";
    monsterName[5] = "Snorlax";
    healthPoints[5] = "100";
    type[5] = "Normal";
    monsterName[6] = "Eevee";
    healthPoints[6] = "40";
    type[6] = "Normal";
    monsterName[7] = "Raikou";
    healthPoints[7] = "80";
    type[7] = "Electric";
    monsterName[8] = "Shaymin";
    healthPoints[8] = "35";
    type[8] = "Grass";
    monsterName[9] = "Arcanine";
    healthPoints[9] = "65";
    type[9] = "Fire";
}