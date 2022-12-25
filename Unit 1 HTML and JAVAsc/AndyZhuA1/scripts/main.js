//track number of money earned
let moneyEarned = 0;
// track counts of each upgrade
let muscularFingers = 0;
let attractiveAssistant = 0;
let ambidextrous = 0;
let initialPublicOffering = 0;
let franchiseCount = 0;
let security = 0;
// original rob ammount
let robPercent = 2;
let relocateCount = 0;
// original crime chance
let crimeChance = 25;
// makes game not frozen at start
let gameFrozen = false;
// tracks profit from all franchises
let franchiseProfit = franchiseCount * 200*(1-Math.pow(0.95,franchiseCount))/(1-0.95);
// track cost of each upgrade
let muscularFingersCost = 100;
let attractiveAssistantCost = 400;
let ambidextrousCost = 10000;
let franchiseCost = 5000;
let relocateCost = 10000;
//this timer is used for the games auto update function
let updateGame = setInterval(update, 20)
//this timer picks a part to massage every 10 seconds
let choosePart = setInterval(pickPart, 10000)
//this timer allows a chance for a crime to happen every 5 minutes
let robbery = setInterval(crime, 300000)
//autoclicker for attractive assistant, franchise, and security
let autoMoney = setInterval(autoClicker, 1000)
//this timer enables the offering button after 10 minutes
let offering = setInterval(enableOffering, 600000)

setInterval(franchiseeRevolt, 300000)
// this picks the part for the first 10 seconds of the game
pickPart();


function autoClicker() {
    // add work done by assistants
    moneyEarned = moneyEarned + attractiveAssistant;
    // add work done by franchises
    moneyEarned = moneyEarned + 200*(1-Math.pow(0.95,franchiseCount))/(1-0.95);
    // subtract the money done by security
    moneyEarned = moneyEarned - (5*security);
}

// it updates the button, (disables or enables), depending on the circumstances
function update() {
    if (moneyEarned >= muscularFingersCost) {
        document.getElementById('muscularFingers').disabled = false;
    }
    else {
        document.getElementById('muscularFingers').disabled = true;
    }
    
    if (muscularFingers == 10){
        document.getElementById('muscularFingers').disabled = true;
       }
    
    if (moneyEarned >= attractiveAssistantCost) {
        document.getElementById('attractiveAssistant').disabled = false;
    }
    else {
        document.getElementById('attractiveAssistant').disabled = true;
    }
    
    if (moneyEarned >= ambidextrousCost) {
        document.getElementById("ambidextrous").disabled = false;
    }
    else {
        document.getElementById("ambidextrous").disabled = true;
    }
    
    if (ambidextrous == 1) {
        document.getElementById("ambidextrous").disabled = true;
    }
    
    if (initialPublicOffering == 1) {
        document.getElementById('publicOffering').disabled = true;
    }
    
    if (moneyEarned >= franchiseCost) {
        document.getElementById('franchise').disabled = false;
    }
    else {
        document.getElementById('franchise').disabled = true;
    }

    if (moneyEarned >= relocateCost) {
        document.getElementById('relocate').disabled = false;
    }
    else {
        document.getElementById('relocate').disabled = true;
    }
    
        
    // shows the money count with 2 decimals rounded
    document.getElementById('moneyCount').innerText = "$" + moneyEarned.toFixed(2);
}

// generates a random number for the pickpart function
function randomNumberGenerator() {
    randomNumber = Math.floor(Math.random()*3) + 1;
}



function pickPart() {
    randomNumberGenerator();
    // picks upperback if random number is 1
    if (randomNumber == 1) {
        document.getElementById('showBack').innerText = "My upperback is sore from carrying my team is video games, please massage it for me";
    }
    // picks middleback if random number is 2
    else if (randomNumber == 2) {
        document.getElementById('showBack').innerText = "My middleback is sore from falling, please massage it for me";
    }
    // picks lowerback if random number is 3
    else {
        document.getElementById('showBack').innerText = "My lowerback is sore from squats, please massage it for me";
    }
}

// the back functions will call the click functions if the right number is picked and calls a text when it is clicked 
// but the number is wrong
function upperBack() {
    if (randomNumber == 1){
        backsMassaged();
        breakFinger();
        ambidextrousClick();
        document.getElementById('wrongText').innerText = "";
    }
    else {
        document.getElementById('wrongText').innerText = "Where did you learn to massage backs...";
    }
}

function middleBack() {
    if (randomNumber == 2){
        backsMassaged();
        breakFinger();
        ambidextrousClick();
        document.getElementById('wrongText').innerText = "";
    }
    else {
        document.getElementById('wrongText').innerText = "Where did you learn to massage backs...";
    }
}

function lowerBack() {
    if (randomNumber == 3){
        backsMassaged();
        breakFinger();
        ambidextrousClick();
        document.getElementById('wrongText').innerText = "";
    }
    else {
        document.getElementById('wrongText').innerText = "Where did you learn to massage backs...";
    }
}

// gives you one dollar when clicked
function backsMassaged() {
    moneyEarned = moneyEarned + 1; 
    // calculates the muscular finger clicks
    moneyEarned = moneyEarned + (5 * muscularFingers);
    }
// allows you to buy muscular fingers
function buyMuscularFingers() {
   if (moneyEarned >= muscularFingersCost) {
        muscularFingers = muscularFingers + 1;
        moneyEarned = moneyEarned - muscularFingersCost;
    // increase the cost of the muscular fingers by 10 percent
    muscularFingersCost = muscularFingersCost + 0.10 * muscularFingersCost;
   }
}
// allows you to buy attractive assistant
function buyAttractiveAssistant() {
    if (moneyEarned >= attractiveAssistantCost) {
        attractiveAssistant = attractiveAssistant + 1;

        moneyEarned = moneyEarned - attractiveAssistantCost;
        // increase the cost of attractive assistant by 15 percent
        attractiveAssistantCost = attractiveAssistantCost + 0.15 * attractiveAssistantCost;
    }
}
// this function makes it so that theres a chance you can break the customers back with each click after 10 muscular fingers
function breakFinger(){
    if (muscularFingers > 5) {
        // picks a random number
        random = Math.floor(Math.random()*10) + 1;
    
        if (random == 1){
            // you lose 100 dollars when you break their back
            moneyEarned = moneyEarned - 100 - (5*muscularFingers) - 1;
            document.getElementById('fingerText').innerText = "Ouch my back is broken, I demand 100 dollars!";
        }
        else {
            document.getElementById('fingerText').innerText = "";
        }
    } 
}

function buyAmbidextrous() {
    // this buys the ambidextrous upgrade
    if (moneyEarned >= ambidextrousCost) {
        ambidextrous = ambidextrous + 1;
        moneyEarned = moneyEarned - ambidextrousCost;
    }
}

function ambidextrousClick() {
    // doubles the amount of money per click
    if (ambidextrous == 1) {
        moneyEarned = moneyEarned + 1 + (5*muscularFingers);
    }
    else {
        null;
    }
}

function buyPublicOffering() {
        // this buys the public offering upgrade
        initialPublicOffering = initialPublicOffering + 1;
        moneyEarned = moneyEarned + 50000;
    }


function enableOffering() {
    // enables the public offering button
    document.getElementById('publicOffering').disabled = false;
    if (initialPublicOffering == 1) {
        document.getElementById('publicOffering').disabled = true;
    }
}

function buyFranchise() {
    // buys a franchise upgrade
    if (moneyEarned >= franchiseCost) {
        franchiseCount = franchiseCount + 1;
        moneyEarned = moneyEarned - franchiseCost;
        // increases franchise cost by 10 percent after purchasing
        franchiseCost = franchiseCost + 0.10 * franchiseCost;
    }
}

function buySecurity() {
    // increases security by one
    security = security + 1;
    // doubles rob percent
    robPercent = robPercent + robPercent;
}


function relocation() {
        moneyEarned = moneyEarned - relocateCost;
        // reduces crime chance by 20 percent
        crimeChance = crimeChance * 0.8;
}

function crime() {
    if (moneyEarned >= 0) {
        // picks a random number out of 100
    let robChance = (Math.random()*100) + 1;
    // robs you if the random number is lower than the crime chance
    if (robChance <= crimeChance){
         moneyEarned -= moneyEarned/robPercent;
        document.getElementById('crimeText').innerText = "You got robbed, you lost money";

    }
    else {
        document.getElementById('crimeText').innerText = "";
    }
    }
}

function helpPage() {
    location.href = "help.html";
}

function franchiseeRevolt() {
    if (franchiseCount > 8) {
        // picks a random number
        let revoltChance = Math.floor(Math.random() * 100) + 1;
        if (revoltChance <= 15) {
            document.getElementById('revoltText').innerText = "There is a franchise revolt! You have to chose an option or else!";
            // freezes the timers
            freezeGame();
            // shows the two options
            document.getElementById('royalties').hidden = false;
            document.getElementById('halfFranchises').hidden = false;
            // hides all the other buttons
            document.getElementById('muscularFingers').hidden = true;
            document.getElementById('attractiveAssistant').hidden = true;
            document.getElementById('ambidextrous').hidden = true;
            document.getElementById('franchise').hidden = true;
            document.getElementById('relocate').hidden = true;
            document.getElementById('security').hidden = true;
            document.getElementById('publicOffering').hidden = true;
        }
    }
}

function reduceRoyalties() {
    // makes the profit decrease by 10 percent
    franchiseProfit = franchiseProfit * 0.9;
    // hides the two options
    document.getElementById('royalties').hidden = true;
    document.getElementById('halfFranchises').hidden = true;
    // shows the rest of the buttons again
    document.getElementById('muscularFingers').hidden = false;
    document.getElementById('attractiveAssistant').hidden = false;
    document.getElementById('ambidextrous').hidden = false;
    document.getElementById('franchise').hidden = false;
    document.getElementById('relocate').hidden = false;
    document.getElementById('security').hidden = false;
    document.getElementById('publicOffering').hidden = false;
    // adds the timers again
    unfreezeGame();
    document.getElementById('revoltText').innerText = null;
}

function halfFranchise() {
    // cuts the franchises in half
    franchiseCount = Math.floor(franchiseCount/2);
    // hides the two options
    document.getElementById('royalties').hidden = true;
    document.getElementById('halfFranchises').hidden = true;
    // shows the rest of the buttons again
    document.getElementById('muscularFingers').hidden = false;
    document.getElementById('attractiveAssistant').hidden = false;
    document.getElementById('ambidextrous').hidden = false;
    document.getElementById('franchise').hidden = false;
    document.getElementById('relocate').hidden = false;
    document.getElementById('security').hidden = false;
    document.getElementById('publicOffering').hidden = false;
    // adds the timers again
    unfreezeGame();
    document.getElementById('revoltText').innerText = null;
}

function freezeGame() {
    gameFrozen = true;
    // clears intervals so nothing works 
    clearInterval(choosePart);
    clearInterval(updateGame);
    clearInterval(robbery);
    clearInterval(autoMoney);
    clearInterval(offering);
}

function unfreezeGame() {
    gameFrozen = false;
    pickPart();
    // adds back the interval so the game works again
    choosePart = setInterval(pickPart, 10000);
    updateGame = setInterval(update, 20);
    robbery = setInterval(crime, 300000);
    autoMoney = setInterval(autoClicker, 1000);
    offering = setInterval(enableOffering, 600000);
}