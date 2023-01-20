const I_ADDS = document.getElementById("addSong");
const I_ADDA = document.getElementById("addArtist");
const I_ADDL = document.getElementById("addLink");
const I_ADDI = document.getElementById("addIndex");
const C_FAV = document.getElementById("favourite");
const P_WRONG = document.getElementById("wrong");
const H_PLAY = document.getElementById("playList");

let songName = ['Baby', 'Shape of You']
let songArtist = ['Justin Bieber', 'Ed Sherran']
let songLink = ['https://www.youtube.com/watch?v=kffacxfA7G4', 'https://www.youtube.com/watch?v=JGwWNGJdvx8']
let favourite = [true, false]

showPlayList();
function showPlayList() {
    for (let i = 0; i < songLink.length; i++) { 
        H_PLAY.innerHTML += "Song Name: " + songName[i] + " | " + " Song Artist: " + songArtist[i] +  " | " + " Favourite: " + favourite[i] + " | " + "<a href=" + songLink[i] + "</a>" + "Song Link " + "<br>" + "<br>";
    } 
}

function addSong(newData1, newData2, newData3, currentIndex) {
    let newName = [songName.length + 1];
    let newArtist = [songArtist.length + 1];
    let newLink = [songLink.length + 1]
    let newFavourite = [favourite.length + 1];
    
    if (I_ADDS.value.length > 0 && I_ADDA.value.length > 0 && I_ADDL.value.length > 0 && I_ADDI.value <= songName.length) {
        H_PLAY.innerText = "";

        // copys the original array into the local array
        for (let i = 0; i < songName.length; i++) {
            newName[i] = songName[i];
            newArtist[i] = songArtist[i];
            newLink[i] = songLink[i];
            newFavourite[i] = favourite[i];
        }
        
        // shifts everything to the right from the index the user inputted in and makes that index empty
        for (let i = newName.length; i >= currentIndex; i--) {
            newName[i] = songName[i - 1];
            newArtist[i] = songArtist[i - 1];
            newLink[i] = songLink[i - 1];
            newFavourite[i] = favourite[i - 1];
        }
        
        let upperCaseData = newData1.substring(1, newData1.length);
        newName[currentIndex] = newData1.substring(0, 1).toUpperCase() + upperCaseData;
        
        let upperCaseData2 = newData2.substring(1, newData2.length);
        newArtist[currentIndex] = newData2.substring(0, 1).toUpperCase() + upperCaseData2;
        

        newLink[currentIndex] = newData3;
        if (C_FAV.checked) {
            newFavourite[currentIndex] = true;
        } else {
            newFavourite[currentIndex] = false;
        }

        songName = newName;
        songArtist = newArtist;
        songLink = newLink;
        favourite = newFavourite;

        showPlayList();
    } else {
        P_WRONG.innerText = "Please insert proper formatting.";
    }
    I_ADDS.value = "";
    I_ADDA.value = "";
    I_ADDL.value = "";
    I_ADDI.value = "";
    C_FAV.checked = false;
}