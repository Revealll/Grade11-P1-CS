// JavaScript source code
// identify the tweet's creator
let firstName = "Joel";
let verificationStatus = true; // boolean values don't use quotes
let lastName = "Osteen";
let username = "JoelOsteen";



// store the individual tweet information
let message;
let retweetCount;
let favouritedCount;
let date;
let time;
loadTweet();
showTweet();
function loadTweet() {
    message = "A true friend walks in when everybody walks out. A true friend doesn't rub it in when you make a mistake, they rub it out. "


    retweetCount = 2238;
    favouritedCount = 1227;

    date = "31 Oct 13";
    time = "4:25pm";
}

function showTweet() {
    let paragraph = document.getElementById('name');
    paragraph.innerText = firstName + " " + lastName + " Verified: " + verificationStatus;

    // add code to show the data
    let paragraph2 = document.getElementById('username');
    paragraph2.innerText = "@" + username;  

    paragraph = document.getElementById('message');
    paragraph.innerText = message;

    document.getElementById('counts').innerText = "Retweets: " + retweetCount + "\nFavourites: " + favouritedCount;

    document.getElementById('datetime').innerText = time + " - " + date;
}

function updateTweet() {
    firstName = "Spencer"
    lastName = "Boldman"
    userName = "SpencerBoldman"

    message = '"Success is not built on success.  It\'s built on failure. It\'s built on frustration. Sometimes it\'s built on catastrophe."';
    favouritedCount = 188;
    retweetCount = 77;
    time = "4:38 PM";
    date = "23 May 2015";

    showTweet();
}