let firstCard, secondCard, sum = 0;
let newCardLine = document.querySelector("#new-card");
let play = document.getElementById('play');
let sumLine = document.querySelector("#sum");
let cardsLine = document.querySelector("#your-cards");
let cards = 0;
let cardNo = document.querySelector("#cards")
let isAlive = false;

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
}


function newCard() {
    if (isAlive == true) {
        firstCard = Math.floor(Math.random() * 6) + 6;
        cards++;
        sum += firstCard;
        sumLine.innerHTML = "Sum: " + sum;
        compare(sum);
        cardsLine.innerHTML += firstCard + " ";
        cardNo.innerHTML = "Total Cards: " + cards;
        newCardLine.innerHTML = null;
    }

}



function compare(sum) {
    if (sum < 21)
        newCardLine.innerHTML = "Do you want to pick new cards?";
    else if (sum === 21) {
        play.innerHTML = "You got BlackJack!";
    }
    else {
        play.innerHTML = "You got Dissqualfied!";
        sum = 0;
    }

}