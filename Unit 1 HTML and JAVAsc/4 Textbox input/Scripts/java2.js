let name;
let secret;
let thing;

function insert() {
    name = document.getElementById('userName').value;
    secret = document.getElementById('darkSecret').value;
    thing = document.getElementById('favourite').value;

    document.getElementById("input").innerText = name + " was walking down the street to buy " + thing + " but he saw the cops, and then thought that they knew of his secret " + secret

    document.getElementById('userName').value = name
    document.getElementById('darkSecret').value = secret
    document.getElementById('favourite').value = thing
}

    


