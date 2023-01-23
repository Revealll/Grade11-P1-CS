// constants for the elements of the html to make coding easier
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
// 5 arrays to show the information of songs 
let songName = ['Baby', 'Shape of You'];
let songArtist = ['Justin Bieber', 'Ed Sherran'];
let songLength = [219, 264];
let songLink = ['https://www.youtube.com/watch?v=kffacxfA7G4', 'https://www.youtube.com/watch?v=JGwWNGJdvx8'];   
let favourite = [true, false];
// shows the starting playlist when the program begins
showPlayList();

function showPlayList() {
    // removes the old playlist if there was one
    H_PLAY.innerText = "";
    // creates the playlist
    for (let i = 0; i < songName.length; i++) { 
        H_PLAY.innerHTML += "Song Name: " + songName[i] + " | " + " Song Artist: " + songArtist[i] +  " | " + " Length In Secs: " + songLength[i] + " | " + " Favourite: " + favourite[i] + " | " + "<a href=" + songLink[i] + "</a>" + "Song Link " + "<br>" + "<br>";
    } 
}

function showFavourite() {
    // removes the playlist
    H_PLAY.innerText = "";
    for (let i = 0; i < favourite.length; i++) {
        // if the song is favourited, it shows in the playlist
        if (favourite[i] == true) {
            H_PLAY.innerHTML += "Song Name: " + songName[i] + " | " + " Song Artist: " + songArtist[i] +  " | " + " Length In Secs: " + songLength[i] + " | " + " Favourite: " + favourite[i] + " | " + "<a href=" + songLink[i] + "</a>" + "Song Link " + "<br>" + "<br>";
        }
    }
}
function deleteSong(index) {
    // creating new arrays which will be a copy but subtracting one since we are removing as ong
    let newName = [songName.length - 1];
    let newArtist = [songArtist.length - 1];
    let newLength = [songLength.length - 1];
    let newLink = [songLink.length - 1];
    let newFavourite = [favourite.length - 1];
    // removes the playlist and a wrong text if there is one
    H_PLAY.innerText = "";
    P_WRONG.innerText = "";
    // checks if what the user typed is an index that is possible to remove
    if (I_REMOVE.value < songName.length) {
        for (i = 0; i < songName.length; i++) {
            // copys the original array into the new arrays
            newName[i] = songName[i];
            newArtist[i] = songArtist[i];
            newLength[i] = songLength[i];
            newLink[i] = songLink[i];
            newFavourite[i] = favourite[i];
        }
        for (let i = index; i < newName.length; i++){
            // removes the index that is asked to be removed by shifting everything to the left
            newName[i] = songName[i + 1]
            newArtist[i] = songArtist[i + 1];
            newLength[i] = songLength[i + 1];
            newLink[i] = songLink[i + 1];
            newFavourite[i] = favourite[i + 1]; 
        }
        // put our new array information into the original array
        songName = newName;
        songArtist = newArtist;
        songLength = newLength;
        songLink = newLink;
        favourite = newFavourite;
        // remove the very last index as it is undefined because we shifted everything
        songName.length = songName.length - 1;
        songArtist.length = songArtist.length - 1;
        songLength.length = songLength.length - 1;
        songLink.length = songLink.length - 1;
        favourite.length = favourite.length - 1;
    } else {
        // if they did not input correctly, show an error message
        P_WRONG.innerText = "Please pick an applicaple index";
    }
    // clear the textbox
    I_REMOVE.value = "";
    // show the updated playlist
    showPlayList();
}
// sorts the playlist by increasing song length
function sortIncrease(theArray, theArray2, theArray3, theArray4, theArray5) {
    // copys of the array which will be sorted instead of the original
    let copyName = [theArray.length];
    let copyArtist = [theArray2.length];
    let copyLength = [theArray3.length];
    let copyLink = [theArray4.length];
    let copyFavourite = [theArray5.length]; 
    // temporary varibles to store the information to sort 
    let temp;
    let temp2;
    let temp3;
    let temp4;
    let temp5;
    // removes the current playlist
    H_PLAY.innerText = "";
    // copys the original array information into the created copys of the array
    for (let i = 0; i < theArray.length; i++) {
        copyName[i] = theArray[i];
        copyArtist[i] = theArray2[i];
        copyLength[i] = theArray3[i];
        copyLink[i] = theArray4[i];
        copyFavourite[i] = theArray5[i];
    }
    // swaps everything around from the smallest to the largest length of the song
    for (let i = 0; i < theArray3.length; i++) {
        // loop that checks if the current index is smaller or bigger than every other index
        for (let l = 0; l < theArray3.length; l++) {
            // checks if the current index is smaller than the given index, if so, switch indexes around
            if (copyLength[i] < copyLength[l]) {
                // saves the currentIndex to the varible
                temp = copyName[i];
                temp2 = copyArtist[i];
                temp3 = copyLength[i];
                temp4 = copyLink[i];
                temp5 = copyFavourite[i];
                // replaces the current index with the given index
                copyName[i] = copyName[l];
                copyArtist[i] = copyArtist[l];
                copyLength[i] = copyLength[l];
                copyLink[i] = copyLink[l];
                copyFavourite[i] = copyFavourite[l];
                // replaces the given index with the varible that contains the current index
                copyName[l] = temp;
                copyArtist[l] = temp2;
                copyLength[l] = temp3;
                copyLink[l] = temp4;
                copyFavourite[l] = temp5;
            }
        }
    }
    // show the copy of the updated arrays into the playlist
    for (let i = 0; i < theArray.length; i++) {
        H_PLAY.innerHTML += "Song Name: " + copyName[i] + " | " + " Song Artist: " + copyArtist[i] +  " | " + " Length In Secs: " + copyLength[i] + " | " + " Favourite: " + copyFavourite[i] + " | " + "<a href=" + copyLink[i] + "</a>" + "Song Link " + "<br>" + "<br>";
    }
}
// sorts the playlist by decreasing song length
function sortDecrease(theArray, theArray2, theArray3, theArray4, theArray5) {
    // copys of the array which will be sorted instead of the original
    let copyName = [theArray.length];
    let copyArtist = [theArray2.length];
    let copyLength = [theArray3.length];
    let copyLink = [theArray4.length];
    let copyFavourite = [theArray5.length]; 
    // temporary varibles to store the information to sort 
    let temp;
    let temp2;
    let temp3;
    let temp4;
    let temp5;
    // removes the current playlist
    H_PLAY.innerText = "";
    // copys the original array information into the created copys of the array
    for (let i = 0; i < theArray.length; i++) {
        copyName[i] = theArray[i];
        copyArtist[i] = theArray2[i];
        copyLength[i] = theArray3[i];
        copyLink[i] = theArray4[i];
        copyFavourite[i] = theArray5[i];
    }
    // swaps everything around from the largest to the smallest length of the song
    for (let i = 0; i < theArray3.length; i++) {
        // loop that checks if the current index is smaller or bigger than every other index
        for (let l = 0; l < theArray3.length; l++) {
            // checks if the current index is bigger than the given index, if so, switch indexes around
            if (copyLength[i] > copyLength[l]) {
                // saves the currentIndex to the varible
                temp = copyName[i];
                temp2 = copyArtist[i];
                temp3 = copyLength[i];
                temp4 = copyLink[i];
                temp5 = copyFavourite[i];
                // replaces the current index with the given index
                copyName[i] = copyName[l];
                copyArtist[i] = copyArtist[l];
                copyLength[i] = copyLength[l];
                copyLink[i] = copyLink[l];
                copyFavourite[i] = copyFavourite[l];
                // replaces the given index with the varible that contains the current index
                copyName[l] = temp;
                copyArtist[l] = temp2;
                copyLength[l] = temp3;
                copyLink[l] = temp4;
                copyFavourite[l] = temp5;
            }
        }
    }
    // show the copy of the updated arrays into the playlist
    for (let i = 0; i < theArray.length; i++) {
        H_PLAY.innerHTML += "Song Name: " + copyName[i] + " | " + " Song Artist: " + copyArtist[i] +  " | " + " Length In Secs: " + copyLength[i] + " | " + " Favourite: " + copyFavourite[i] + " | " + "<a href=" + copyLink[i] + "</a>" + "Song Link " + "<br>" + "<br>";
    }
}
// allows you to partially search for a song name or the artist
function partialSearch(theArray, valueToFind) {
    // varible to check for the matches found 
    let matchesFound = 0;
    // clears error message if there was one previously
    P_WRONG.innerText = "";
    // checks if each index contains the input
    for ( let i = 0; i < theArray.length; i++) {
        // checks if the given index of the loop contains the user input
        if (theArray[i].indexOf(valueToFind) != -1 ){
            matchesFound++;
            // removes the playlist only once if there is a match so you can add to playlist
            if (matchesFound == 1) {
                H_PLAY.innerText = "";
            } 
            // it will display the index that contains the input into the playlist
            H_PLAY.innerHTML += "Song Name: " + songName[i] + " | " + " Song Artist: " + songArtist[i] +  " | " + " Length In Secs: " + songLength[i] + " | " + " Favourite: " + favourite[i] + " | " + "<a href=" + songLink[i] + "</a>" + "Song Link " + "<br>" + "<br>";
        }
    }

    if (matchesFound == 0) {
        // shows an error text that the input could not be matched with any index
        P_WRONG.innerText = "Matches not found, check spelling or errors.";
    }
    // clears the textbox after 
    I_PARTIAL.value = "";
}
// randomizes the playlist
function randomizePlayList() {
    // clears wrong text if there is one
    P_WRONG.innerText = "";
    // a new array which stores the random songs
    let chosenSong = new Array(songName.length);
    // count how many songs have been randomized before all of them have been
    let songChosen = 0;
    // clears the playlist
    H_PLAY.innerText = "";
    // keep randomizing until all the songs have been randomized
    while (songChosen < songName.length){
        // chose a random index
        let index = createRandom(songName.length);
        // varible to check if the index has been chosen
        let alreadyChosen = false;
        // searches the array to see if the index has been chosen previously
        for (let i = 0; i < songChosen; i++){
            // if it has we flag it as being chosen
            if (chosenSong[i] == index){
                alreadyChosen = true;
                break;
            }
        }
        // checks if the index has been chosen before, if not add it to the new array
        if (alreadyChosen == false){
            chosenSong[songChosen] = index;
            // increase the song chosen by 1
            songChosen++;
        }
    }
    // print out the random playlist
    for (let i = 0; i < songName.length; i++) {
        H_PLAY.innerHTML += "Song Name: " + songName[chosenSong[i]] + " | " + " Song Artist: " + songArtist[chosenSong[i]] +  " | " + " Length In Secs: " + songLength[chosenSong[i]] + " | " + " Favourite: " + favourite[chosenSong[i]] + " | " + "<a href=" + songLink[chosenSong[i]] + "</a>" + "Song Link " + "<br>" + "<br>";
    }
}
// creates a random number and returns it
function createRandom(max) {
    randomNumber = Math.floor(Math.random()*max);
    return randomNumber;
}
// gets the first letter of the string
function getStringBack(string) {
    let result = string.substring(1, string.length);
    return result;
}
// gets everything but the first letter of the string
function getStringFront(string) {
    let result = string.substring(0, 1);
    return result; 
}
// allows user to add a song to the playlist
function addSong(newData1, newData2, newData3, newData4, currentIndex) {
    // new arrays with an extra space for the new song
    let newName = [songName.length + 1];
    let newArtist = [songArtist.length + 1];
    let newLength = [songLength.length + 1];
    let newLink = [songLink.length + 1];
    let newFavourite = [favourite.length + 1];
    // clear error message if there was previously
    P_WRONG.innerText = "";
    // trim the data just in case there are leading or trailing spaces
    newData1.trim();
    newData2.trim();
    newData4.trim();
    // checks if you have inputted the proper formatting
    if (I_ADDS.value.length > 0 && I_ADDA.value.length > 0 && (isNaN(I_ADDLE.value) == false) &&  I_ADDL.value.length > 0 && I_ADDI.value <= songName.length) {
        // removes the playlist
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
        // adds the information given into the new indexes
        // make the first letter of the song uppercase and adds it to the index chosen by the user
        newName[currentIndex] = getStringFront(newData1).toUpperCase() + getStringBack(newData1);
        // make the first letter of the artist uppercase and adds it to the index chosen by the user
        newArtist[currentIndex] = getStringFront(newData2).toUpperCase() + getStringBack(newData2);
        newLength[currentIndex] = newData3
        newLink[currentIndex] = newData4;
        // checks if the user put the song as a favourite or not
        if (C_FAV.checked) {
            // puts the favourite as true if the user checked the checkbox, false if the user did not
            newFavourite[currentIndex] = true;
        } else {
            newFavourite[currentIndex] = false;
        }
        // make the original array have the updated arrays
        songName = newName;
        songArtist = newArtist;
        songLength = newLength;
        songLink = newLink;
        favourite = newFavourite;
        // show the new playlist
        showPlayList();
    } else {
        // if user did not have the right formatting, show an error message
        P_WRONG.innerText = "Please insert proper formatting.";
    }
    // clear all the textboxes and the checkbox
    I_ADDS.value = "";
    I_ADDA.value = "";
    I_ADDLE.value = "";
    I_ADDL.value = "";
    I_ADDI.value = "";
    C_FAV.checked = false;
}

