alert(Math.round(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 * 10 / 3));

let aSqaured = 32 * 32;
let bSqaured = Math.pow(47, 2);
let cSqaured = aSqaured + bSqaured;

let c = Math.sqrt(cSqaured);
alert(c.toFixed(3));

let likes = 0;
function showLikes() {
    //increase the number of likes with each button click
    likes = likes + 1;
    let button = document.getElementById('likeButton')
    button.innerText = likes;
}