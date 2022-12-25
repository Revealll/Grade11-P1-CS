function badWordsReplacer() {
    let input = document.getElementById('textbox').value;

    input = input.replaceAll('dang', '****');
    input = input.replaceAll('shoot', '*****');
    input = input.replaceAll('fudge', '*****');
    document.getElementById('badWordsText').innerText = input;
}
function grammerly() {
    let input = document.getElementById('textbox').value;

    input = input.replaceAll('me and my friend', 'my friend and i');
    document.getElementById('badWordsText').innerText = input;
}
function nameValidation() {
    let input = (document.getElementById('textbox').value).trim();
    let numbersFound = input.indexOf("0") + input.indexOf("1") + input.indexOf("2") + input.indexOf("3") + input.indexOf("4") + input.indexOf("5") + input.indexOf("6") + input.indexOf("7") + input.indexOf("8") + input.indexOf("9");

    if (input.length > 30) {
        document.getElementById('badWordsText').innerText = "Name Too Long";
     }
    else if (input.length == 0 ) {
        document.getElementById("badWordsText").innerText = "Name Too Short";
    }
    else if (numbersFound != -10) {
        document.getElementById("badWordsText").innerText = "Only alphabet characters can be used "
    }
    else {
        document.getElementById("badWordsText").innerText = "Name Accepted " 
    }
}

function salutationValidation() {
    let input = document.getElementById('textbox').value;
    input = input.trim();
    let firstLetter = input.substring(0,1);
    let lastLetter = input.substring(input.length - 1, input.length);
    if (firstLetter == firstLetter.toUpperCase() && lastLetter == "."){
        document.getElementById('badWordsText').innerText = "Salutation Accepted";
}
    else {
        document.getElementById('badWordsText').innerText = "Unreconized Salutation";
    }
}
    

function passwordChecker() {
     // Get the input from the user
     let password = document.getElementById('textbox').value;

     let uppercasePassword = password.toUpperCase();
     let lowercasePassword = password.toLowerCase();
 
     let symbolsFound = password.indexOf("$") + password.indexOf("_");
 
     let numbersFound = password.indexOf("0") + password.indexOf("1") + password.indexOf("2") + password.indexOf("3") + password.indexOf("4") + password.indexOf("5") + password.indexOf("6") + password.indexOf("7") + password.indexOf("8") + password.indexOf("9");
 
     if (password.length >= 8 && symbolsFound != -2 && numbersFound != -10 && lowercasePassword != password && uppercasePassword != password){
        document.getElementById('badWordsText').innerText = "Very Strong Password";
     }
     else if (symbolsFound != -2 && numbersFound != -10){
        document.getElementById('badWordsText').innerText = "Strong Password";
     }
     else if (symbolsFound != -2 || numbersFound != -10){
        document.getElementById('badWordsText').innerText = "Medium Strength Password";
     }
     
     else {
         document.getElementById('badWordsText').innerText = "Weak Password";
     }
 }



 
    




function dnaChecker() {
    // step 1: checking for garbage
    // replace all the A, C, G, and T with ""
    // If the there is anything left over, there must be garbage in the input
    let garbageCheck = document.getElementById("dna1").value;
    garbageCheck = garbageCheck.replaceAll("A", "");
    garbageCheck = garbageCheck.replaceAll("C", "");
    garbageCheck = garbageCheck.replaceAll("G", "");
    garbageCheck = garbageCheck.replaceAll("T", "");
    // textbox 2
    // get the input from the textbox
    garbageCheck2 = document.getElementById("dna2").value;
    garbageCheck2 = garbageCheck2.replaceAll("A", "");
    garbageCheck2 = garbageCheck2.replaceAll("C", "");
    garbageCheck2 = garbageCheck2.replaceAll("G", "");
    garbageCheck2 = garbageCheck2.replaceAll("T", "");



    if (garbageCheck.length > 0 || garbageCheck2.length > 0) {
        alert("invalid input.");
    }
    // otherwise, the input was valid
    else { 
        // if we are running this code, then both the textboxes
        // have valid strings

        let input1 = document.getElementById('dna1').value;
        let input2 = document.getElementById('dna2').value;

        // create the complement for the first dna input
        input1 = input1.replaceAll("A", "a");
        input1 = input1.replaceAll("C", "c");
        input1 = input1.replaceAll("G", "g");
        input1 = input1.replaceAll("T", "t");
        
        input1 = input1.replaceAll("a", "T");
        input1 = input1.replaceAll("c", "G");
        input1 = input1.replaceAll("g", "C");
        input1 = input1.replaceAll("t", "A");
        // if the complement that we created out of the first input is the same as the second textbox, then we know that the first 
        // text box and the second textbox are complements of eachother
        if (input1 == input2) {
            document.getElementById("dnaText").innerText = "Dna Valid";
        }
        else {
            document.getElementById("dnaText").innerText = "Dna Invalid";
        }

    }

}


     
    