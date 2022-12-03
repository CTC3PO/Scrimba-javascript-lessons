//initialize a player 
let player = {
    name: "Per",
    chips: 150
}

//initilize variables 
let sum = 0
let cards = []
let hasBlackjack = false
let isAlive = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

/*
this helper function generates a randomcard to be used in the other functions
*/
function getRandomCard() {
    //get a random number from 1-13, where 11,12 and 13 represents J,Q,K
    let randomNum = Math.floor( Math.random() * 13 ) + 1
    
    //reevaluate the values of A,J,Q and K cards 
    if (randomNum > 10) {
        return 10
    }
    else if (randomNum === 1) {
        return 11
    }
    else {
        return randomNum
    }
}

/*
this function initialize the value at the start of the round
*/
function startGame() {
    //initialize the first 2 cards, display sum and calls the renderGame function
    isAlive = true;
    let card1 = getRandomCard()
    let card2 = getRandomCard()
    cards = [card1, card2]
    sum = card1 + card2    
    renderGame()
}

/*
this function renders the game message/status, the cards content and sum content
*/
function renderGame() {
    //display the all the cards:
    cardsEl.textContent = "Cards: "
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    //display the sum of the cards: 
    sumEl.textContent = "Sum: " + sum

    //display message/status of the round: 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) {
        message = "You got Blackjack - You won"
        hasBlackjack = true
    }
    else {
        message = "You are out of the game"
        isAlive = false
    }
    //display the messageEl content with the correct message
    messageEl.textContent = message
}

/*
this function draws a newcard and update to the sum, the hand if the player is still in the game
*/
function newCard() {
    //if still in the game, get a newCard 
    if (isAlive === true && hasBlackjack === false) {
        // get a random card, then update the hand of cards, sum and render game:
        let newCard = getRandomCard()        
        sum += newCard
        cards.push(newCard)
        renderGame()
    }   
}