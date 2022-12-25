let firstName;
let lastName;
let age;
let address;
let phoneNumber;
let emailAddress;
let nickName;
let notes;

function saveContact() {
    firstName = document.getElementById('userFirstName').value;
    lastName = document.getElementById('userLastName').value;
    age = document.getElementById('userAge').value;
    address = document.getElementById('userAddress').value;
    phoneNumber = document.getElementById('userPhoneNumber').value;
    emailAddress = document.getElementById('userEmailAddress').value;
    nickName = document.getElementById('userNickName').value;
    notes = document.getElementById('userNotes').value;
}

function loadContact() {
    document.getElementById('input').innerText = "Name:" + firstName + "\n" + "LastName:" + lastName + "\n" + "Age:" + age + "\n" + "Address:" + address + "\n" + "Phone Number:" + phoneNumber + "\n" + "Email Address:" + emailAddress + "\n" + "Nickname:" + nickName + "\n" + "Notes:" + notes

    document.getElementById('userFirstName').value = name;
    document.getElementById('userLastName').value = lastName;
    document.getElementById('userAge').value = age;
    document.getElementById('userAddress').value = address;
    document.getElementById('userPhoneNumber').value = phoneNumber;
    document.getElementById('userEmailAddress').value = emailAddress;
    document.getElementById('userNickName').value = nickName;
    document.getElementById('userNotes').value = notes;
}


        