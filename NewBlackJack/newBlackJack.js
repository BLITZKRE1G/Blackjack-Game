let firstCard, secondCard, sum = 0;
let newCardLine = document.querySelector("#new-card");
let play = document.getElementById('play');
let sumLine = document.querySelector("#sum");
let cardsLine = document.querySelector("#your-cards");
let cards = 0;
let cardNo = document.querySelector("#cards")
let isAlive = false;
let score = document.querySelector("#score");
let points = [];
let resetLine = document.querySelector("#reset");
//Math.floor(Math.random() * 6) + 6;
function blackJack() {
    firstCard = getRandomCard();
    cards++;
    secondCard = getRandomCard();
    cards++;
    sum += firstCard + secondCard;
    sumLine.innerHTML = "Score: " + sum;
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
        firstCard = getRandomCard();
        cards++;
        sum += firstCard;
        points.push(sum);
        sumLine.innerHTML = "Score: : " + sum;
        newCardLine.innerHTML = null;
        compare(sum);
        cardsLine.innerHTML += firstCard + " ";
        cardNo.innerHTML = "Total Cards: " + cards;
    }
}

function compare(sum) {
    if (sum < 21)
        newCardLine.innerHTML = "Do you want to pick a new card?";
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
    sumLine.innerHTML = "Score: ";
    cards = 0;
    sum = 0;
    play.innerHTML = null;
    resetLine.innerHTML = null;
}

console.log(points);
function resetScore() {
    points = [];
    score.innerHTML = null;
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 6) + 8;
    console.log(randomNumber)
    if (randomNumber === 11)
        return 11;
    else if (randomNumber > 10)
        return 10;
    else
        return (Math.floor(Math.random() * 6) + 6);
}