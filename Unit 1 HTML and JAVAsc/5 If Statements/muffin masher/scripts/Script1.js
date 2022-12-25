//track number of muffins mashed
let muffinsMashed = 0;

// track number of auto-clickers user has
let siblings = 0;
let bakers = 0;
// track how much the next sibling will cost
let siblingCost = 10;
let bakerCost = 100;
//this timer is used for the games auto update functions
setInterval(update, 20)

//auto clicker for siblings
setInterval(autoClicker, 1000)

function autoClicker() {
    // add the work done by the siblings
    muffinsMashed = muffinsMashed + siblings;

    muffinsMashed = muffinsMashed + 20 * bakers;
}

function update() {
    // enable the buy sibling button if user has enough muffins
    if (muffinsMashed >= siblingCost) {
        //get the button to enable it
        document.getElementById('sibling').disabled = false;
    }
    // disable the buy sibling button if user doesn't have enough 
  else {
    document.getElementById('sibling').disabled = true;
    }

 if (muffinsMashed >= 100)
        //enable the baker button
        document.getElementById('baker').disabled = false;
    document.getElementById('muffinCount').innerText = muffinsMashed;
}

//ADVANCED way of enabling and disabling a button
//document.getElementById('sibling').disabled = muffinsMashed < siblingCost;

function buySibling() {

    if (muffinsMashed >= siblingCost) {
        siblings = siblings + 1;
        muffinsMashed = muffinsMashed - siblingCost;

        // increase the cost of the next sibling by 20
        siblingCost = siblingCost + 20;
    }
}

function buyBaker() {

    if (muffinsMashed >= bakerCost) {
        bakers = bakers + 1;
        muffinsMashed = muffinsMashed - bakerCost;

        bakerCost = bakerCost + 200;
    }
}


function muffinClicked() {
    //increase muffin count by one
    muffinsMashed = muffinsMashed + 1;
}