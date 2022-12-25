let name;
let age;

function saveInfo() {
    document.getElementById("username").value = name;
    document.getElementById("userage").value = age;
}

function loadInfo() {
    let paragraph = document.getElementbyId(insert)
    paragraph.innerText = "name :" + name; + "age :" + age;
}