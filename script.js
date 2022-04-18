var firstCard = getRandomCard();
var secondCard = getRandomCard();
var cards = [firstCard , secondCard];

var sum = firstCard + secondCard;
var hasBlackJack = false
var isAlive = true
var message = ''

var messageEl = document.getElementById('message-el');
var sumEl = document.getElementById('sum-el');
var cardsEl = document.getElementById('cards-el');

function getRandomCard() {
   
   var randomNumber = Math.floor( Math.random() * 13) + 1
   if (randomNumber > 10) {
       return 10
   } else if (randomNumber === 1) {
       return 11
   } else {
       return randomNumber
   }
}

function startGame() {

    renderGame();
}

function renderGame() {

    sumEl.textContent = 'sum: ' + sum
    cardsEl.textContent = 'cards: ';
    for (var i = 0 ; i < cards.length; i ++ ) {
        cardsEl.textContent += cards[i] + ' '
    }


    if (sum <= 20) {
        message = 'do you wanna draw a new card? 🤔'
    } else if (sum === 21) {
        message = 'woohoo ya won! 🥳'
        hasBlackJack = true
    } else {
        message = 'youre out buster! 🤬'
        isAlive = false
    }
    
    messageEl.textContent = message
};

function newCard() {
    var card = getRandomCard();

    sum += card
    cards.push(card);
    console.log(cards)

    renderGame();
}
