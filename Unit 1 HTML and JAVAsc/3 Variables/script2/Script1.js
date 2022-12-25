let firstName;
let lastName;
let hairColour;
let eyeColour;
let age;
let description;
let image;

function loadProfile() {
     firstName = "Clark"
     lastName = "Kent"
     hairColour = "Black hair"
     eyeColour = "Blue eyes"
     age = "25 Years Old"
    description = "Tall man, that has a clean jawline"
    image = "superman.png"
}
function updateProfile() {
    let paragraph = document.getElementById('name');
    paragraph.innerText = firstName + "\n" + lastName + "\n" + hairColour + "\n" + eyeColour + "\n" + age + "\n" + description;
    paragraph = document.getElementById('header')
    paragraph.innerText = "Meet your match";
    paragraph = document.getElementById('image')
    paragraph.src = image

}
function showProfile1() {
    loadProfile();
    updateProfile();
}
function loadProfile2() {
    firstName = "Bruce"
    lastName = "Wayne"
    hairColour = "Brown"
    eyeColour = "Blue"
    age = "48"
    description = "Bruce Wayne loves to save the world, he likes saving gothem city but also makes sure to beat up the Joker whenever he can"
    image = "batman.jpg"
}
function showProfile2() {
    loadProfile2();
    updateProfile();
}
function loadProfile3() {
    firstName = "Diana"
    lastName = "Prince"
    hairColour = "Dark Blue"
    eyeColour = "Blue Eyes"
    age = "800"
    description = "Diana Price loves to fly in her free time, her goal is to stop wars and to achive peace and equality"
    image = "wonderwomen.jpg"
}
function showProfile3() {
    loadProfile3();
    updateProfile();
}
function homePage() {
    firstName = ""
    lastName = ""
    hairColour = ""
    eyeColour = ""
    age = ""
    description = ""
    image = ""
    updateProfile();
}
