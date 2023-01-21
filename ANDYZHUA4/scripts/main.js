const I_ADDS = document.getElementById("addSong");
const I_ADDA = document.getElementById("addArtist");
const I_ADDLE = document.getElementById("addLength");
const I_ADDL = document.getElementById("addLink");
const I_ADDI = document.getElementById("addIndex");
const C_FAV = document.getElementById("favourite");
const P_WRONG = document.getElementById("wrong");
const H_PLAY = document.getElementById("playList");
const I_PARTIAL = document.getElementById("partial");
const I_REMOVE = document.getElementById("remove");
let songName = ['Baby', 'Shape of You'];
let songArtist = ['Justin Bieber', 'Ed Sherran'];
let songLength = [219, 264];
let songLink = ['https://www.youtube.com/watch?v=kffacxfA7G4', 'https://www.youtube.com/watch?v=JGwWNGJdvx8'];   
let favourite = [true, false];

showPlayList();
function showPlayList() {
    H_PLAY.innerText = "";
    for (let i = 0; i < songName.length; i++) { 
        H_PLAY.innerHTML += "Song Name: " + songName[i] + " | " + " Song Artist: " + songArtist[i] +  " | " + " Length In Secs: " + songLength[i] + " | " + " Favourite: " + favourite[i] + " | " + "<a href=" + songLink[i] + "</a>" + "Song Link " + "<br>" + "<br>";
    } 
}

function deleteSong(index) {
    let newName = [songName.length - 1];
    let newArtist = [songArtist.length - 1];
    let newLength = [songLength.length - 1];
    let newLink = [songLink.length - 1];
    let newFavourite = [favourite.length - 1];
    H_PLAY.innerText = "";
    if (I_REMOVE.value.length <= songName.length) {
        for (i = 0; i < songName.length; i++) {
            newName[i] = songName[i];
            newArtist[i] = songArtist[i];
            newLength[i] = songLength[i];
            newLink[i] = songLink[i];
            newFavourite[i] = favourite[i];
        }
        console.log(newName)
        for (let i = index; i < newName.length; i++){
            newName[i] = songName[i + 1]
            newArtist[i] = songArtist[i + 1];
            newLength[i] = songLength[i + 1];
            newLink[i] = songLink[i + 1];
            newFavourite[i] = favourite[i + 1]; 
        }
        
        songName = newName;
        songArtist = newArtist;
        songLength = newLength;
        songLink = newLink;
        favourite = newFavourite;

        songName.length = songName.length - 1;
        songArtist.length = songArtist.length - 1;
        songLength.length = songLength.length - 1;
        songLink.length = songLink.length - 1;
        favourite.length = favourite.length - 1;
        
    } else {
        P_WRONG.innerText = "Please Insert Proper Formatting";
    }
    showPlayList();
}

function sortIncrease(theArray, theArray2, theArray3, theArray4, theArray5) {
    let copyName = [theArray.length];
    let copyArtist = [theArray2.length];
    let copyLength = [theArray3.length];
    let copyLink = [theArray4.length];
    let copyFavourite = [theArray5.length]; 

    let temp;
    let temp2;
    let temp3;
    let temp4;
    let temp5;

    H_PLAY.innerText = "";

    for (let i = 0; i < theArray.length; i++) {
        copyName[i] = theArray[i];
        copyArtist[i] = theArray2[i];
        copyLength[i] = theArray3[i];
        copyLink[i] = theArray4[i];
        copyFavourite[i] = theArray5[i];
    }
    for (let i = 0; i < theArray3.length; i++) {
        // loop that checks if the given currentIndex is smaller or bigger than every other currentIndex
        for (let l = 0; l < theArray3.length; l++) {
            // checks if given currentIndex is bigger than the current currentIndex, if so, switch indexes around
            if (copyLength[i] < copyLength[l]) {
                // saves the currentIndex to the varible
                temp = copyName[i];
                temp2 = copyArtist[i];
                temp3 = copyLength[i];
                temp4 = copyLink[i];
                temp5 = copyFavourite[i];
                // replaces the given currentIndex with the current currentIndex
                copyName[i] = copyName[l];
                copyArtist[i] = copyArtist[l];
                copyLength[i] = copyLength[l];
                copyLink[i] = copyLink[l];
                copyFavourite[i] = copyFavourite[l];
                // replaces the current currentIndex with the varible that contains the given currentIndex
                copyName[l] = temp;
                copyArtist[l] = temp2;
                copyLength[l] = temp3;
                copyLink[l] = temp4;
                copyFavourite[l] = temp5;
            }
        }
    }
    for (let i = 0; i < theArray.length; i++) {
        H_PLAY.innerHTML += "Song Name: " + copyName[i] + " | " + " Song Artist: " + copyArtist[i] +  " | " + " Length In Secs: " + copyLength[i] + " | " + " Favourite: " + copyFavourite[i] + " | " + "<a href=" + copyLink[i] + "</a>" + "Song Link " + "<br>" + "<br>";
    }
}

function sortDecrease(theArray, theArray2, theArray3, theArray4, theArray5) {
    let copyName = [theArray.length];
    let copyArtist = [theArray2.length];
    let copyLength = [theArray3.length];
    let copyLink = [theArray4.length];
    let copyFavourite = [theArray5.length]; 

    let temp;
    let temp2;
    let temp3;
    let temp4;
    let temp5;

    H_PLAY.innerText = "";

    for (let i = 0; i < theArray.length; i++) {
        copyName[i] = theArray[i];
        copyArtist[i] = theArray2[i];
        copyLength[i] = theArray3[i];
        copyLink[i] = theArray4[i];
        copyFavourite[i] = theArray5[i];
    }
    for (let i = 0; i < theArray3.length; i++) {
        // loop that checks if the given currentIndex is smaller or bigger than every other currentIndex
        for (let l = 0; l < theArray3.length; l++) {
            // checks if given currentIndex is bigger than the current currentIndex, if so, switch indexes around
            if (copyLength[i] > copyLength[l]) {
                // saves the currentIndex to the varible
                temp = copyName[i];
                temp2 = copyArtist[i];
                temp3 = copyLength[i];
                temp4 = copyLink[i];
                temp5 = copyFavourite[i];
                // replaces the given currentIndex with the current currentIndex
                copyName[i] = copyName[l];
                copyArtist[i] = copyArtist[l];
                copyLength[i] = copyLength[l];
                copyLink[i] = copyLink[l];
                copyFavourite[i] = copyFavourite[l];
                // replaces the current currentIndex with the varible that contains the given currentIndex
                copyName[l] = temp;
                copyArtist[l] = temp2;
                copyLength[l] = temp3;
                copyLink[l] = temp4;
                copyFavourite[l] = temp5;
            }
        }
    }
    for (let i = 0; i < theArray.length; i++) {
        H_PLAY.innerHTML += "Song Name: " + copyName[i] + " | " + " Song Artist: " + copyArtist[i] +  " | " + " Length In Secs: " + copyLength[i] + " | " + " Favourite: " + copyFavourite[i] + " | " + "<a href=" + copyLink[i] + "</a>" + "Song Link " + "<br>" + "<br>";
    }
}
function partialSearch(theArray, valueToFind) {
    let matchesFound = 0;

    P_WRONG.innerText = "";

    for ( let i = 0; i < theArray.length; i++) {
        // checks if the given currentIndex of the loop contains the user input
        if (theArray[i].indexOf(valueToFind) != -1 ){
            matchesFound++;
            // removes the playlist only once if there is a match so you can add to pokedex
            if (matchesFound == 1) {
                H_PLAY.innerText = "";
            } 
            H_PLAY.innerHTML += "Song Name: " + songName[i] + " | " + " Song Artist: " + songArtist[i] +  " | " + " Length In Secs: " + songLength[i] + " | " + " Favourite: " + favourite[i] + " | " + "<a href=" + songLink[i] + "</a>" + "Song Link " + "<br>" + "<br>";
        }
    }
    if (matchesFound == 0) {
        // shows an error text that the input could not be matched with any currentIndex
        P_WRONG.innerText = "Matches not found, check spelling or errors.";
    }
    // clears the textbox after 
    I_PARTIAL.value = "";
}

function randomizePlayList() {
    P_WRONG.innerText = "";
    let chosenSong = new Array(songName.length);
    let numberChosen = 0;
    H_PLAY.innerText = "";
    while (numberChosen < songName.length){
        let index = createRandom(songName.length);
        let alreadyChosen = false;

        for (let i = 0; i < numberChosen; i++){
            if (chosenSong[i] == index){
                alreadyChosen = true;
                break;
            }
        }

        if (alreadyChosen == false){
            chosenSong[numberChosen] = index;
            numberChosen++;
        }
    }
    
    for (let i = 0; i < songName.length; i++) {
        H_PLAY.innerHTML += "Song Name: " + songName[chosenSong[i]] + " | " + " Song Artist: " + songArtist[chosenSong[i]] +  " | " + " Length In Secs: " + songLength[chosenSong[i]] + " | " + " Favourite: " + favourite[chosenSong[i]] + " | " + "<a href=" + songLink[chosenSong[i]] + "</a>" + "Song Link " + "<br>" + "<br>";
    }
}

function createRandom(max) {
    randomNumber = Math.floor(Math.random()*max);
    return randomNumber;
}
function addSong(newData1, newData2, newData3, newData4, currentIndex) {
    let newName = [songName.length + 1];
    let newArtist = [songArtist.length + 1];
    let newLength = [songLength.length + 1];
    let newLink = [songLink.length + 1];
    let newFavourite = [favourite.length + 1];
    
    if (I_ADDS.value.length > 0 && I_ADDA.value.length > 0 && (isNaN(I_ADDLE.value) == false) &&  I_ADDL.value.length > 0 && I_ADDI.value <= songName.length) {
        H_PLAY.innerText = "";

        // copys the original array into the local array
        for (let i = 0; i < songName.length; i++) {
            newName[i] = songName[i];
            newArtist[i] = songArtist[i];
            newLength[i] = songLength[i];
            newLink[i] = songLink[i];
            newFavourite[i] = favourite[i];
        }
        
        // shifts everything to the right from the index the user inputted in and makes that index empty
        for (let i = newName.length; i >= currentIndex; i--) {
            newName[i] = songName[i - 1];
            newArtist[i] = songArtist[i - 1];
            newLength[i] = songLength[i - 1];
            newLink[i] = songLink[i - 1];
            newFavourite[i] = favourite[i - 1];
        }
        newData1.trim();
        newData2.trim();
        newData4.trim();
        let upperCaseData = newData1.substring(1, newData1.length);
        newName[currentIndex] = newData1.substring(0, 1).toUpperCase() + upperCaseData;
        
        let upperCaseData2 = newData2.substring(1, newData2.length);
        newArtist[currentIndex] = newData2.substring(0, 1).toUpperCase() + upperCaseData2;
        
        newLength[currentIndex] = newData3
        newLink[currentIndex] = newData4;
        if (C_FAV.checked) {
            newFavourite[currentIndex] = true;
        } else {
            newFavourite[currentIndex] = false;
        }

        songName = newName;
        songArtist = newArtist;
        songLength = newLength;
        songLink = newLink;
        favourite = newFavourite;

        showPlayList();
    } else {
        P_WRONG.innerText = "Please insert proper formatting.";
    }
    I_ADDS.value = "";
    I_ADDA.value = "";
    I_ADDLE.value = "";
    I_ADDL.value = "";
    I_ADDI.value = "";
    C_FAV.checked = false;
}

