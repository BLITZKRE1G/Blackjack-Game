let firstCard, secondCard, sum = 0;
let newCardLine = document.querySelector("#new-card");
let play = document.getElementById('play');
let sumLine = document.querySelector("#sum");
let cardsLine = document.querySelector("#your-cards");
let cards = 0;
let cardNo = document.querySelector("#cards")
let isAlive = false;
let score = document.querySelector("#score");

function blackJack() {
    firstCard = Math.floor(Math.random() * 6) + 6;
    cards++;
    secondCard = Math.floor(Math.random() * 6) + 6;
    cards++;
    sum += firstCard + secondCard;
    sumLine.innerHTML = "Sum: " + sum;
    compare(sum);
    cardsLine.innerHTML += firstCard + " " + secondCard + " ";
    cardNo.innerHTML = "Total Cards: " + cards;
    isAlive = true;
    points.push(sum);
}
function yourScore() {
    score.innerHTML = "Your Score: " + points.toString();
}

function newCard() {
    if (isAlive == true) {
        firstCard = Math.floor(Math.random() * 6) + 6;
        cards++;
        sum += firstCard;
        points.push(sum);
        sumLine.innerHTML = "Sum: " + sum;
        newCardLine.innerHTML = null;
        compare(sum);
        cardsLine.innerHTML += firstCard + " ";
        cardNo.innerHTML = "Total Cards: " + cards;
    }
}

let resetLine = document.querySelector("#reset");


function compare(sum) {
    if (sum < 21)
        newCardLine.innerHTML = "Do you want to pick new cards?";
    else if (sum === 21) {
        play.innerHTML = "You got BlackJack!";
    }
    else {
        play.innerHTML = "You got Dissqualfied!";
        sum = 0;
        resetLine.innerHTML = "Press the RESET Button to Start Again";
        isAlive = false;
    }
}

function reset() {
    cardNo.innerHTML = "Total Cards: ";
    cardsLine.innerHTML = "Your Cards Points: ";
    sumLine.innerHTML = "Sum: ";
    cards = 0;
    sum = 0;
    play.innerHTML = null;
    resetLine.innerHTML = null;
}

let points = [];
console.log(points);
function resetScore() {
    points = [];
    score.innerHTML = null;
}

