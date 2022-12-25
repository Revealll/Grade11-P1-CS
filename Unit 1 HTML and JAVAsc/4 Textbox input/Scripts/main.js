let name;
let age;

function saveInfo() {
    name = document.getElementById("username").value;
    age = document.getElementById("userage").value;

    document.getElementById("username").value = '';
    document.getElementById("userage").value = '';
}
function loadInfo() {
    let paragraph = document.getElementById("input");
    paragraph.innerText = "Name :" + name + "\n" + "Age: " + age
}
