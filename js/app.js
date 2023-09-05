// Import word-bank object
// Create a random generator function to select a word that will be used for each round of the game
// CONSTANTS
import { getRandomWord } from './word-bank.js'

// VARIABLES
let board, guessNum, winner, answer


// CACHED ELEMENT REFERENCES
const submitBtn = document.getElementById('submit-btn')
const resetBtn = document.getElementById('reset-btn')
const inputEl = document.getElementById('inputEl')
let guess = inputEl.value

// EVENT LISTENERS
submitBtn.addEventListener('click', checkLength)

resetBtn.addEventListener('click', () => {})

// FUNCTIONS
// init()

const init = () => {
    board = [[null, null ,null ,null ,null],
        [null, null ,null ,null ,null],
        [null, null ,null ,null ,null],
        [null, null ,null ,null ,null],
        [null, null ,null ,null ,null],
        [null, null ,null ,null ,null],]
    guessNum = 0    
    winner = false
    answer = getRandomWord()
}

// function:
// choose a new answer

// checkLength: 
// input is 5 letters long
// if longer than 5 letters msg = guess too long, return false
// if shorter than 5 letters msg = guess too short, return true
// if input is 5 letters long return true
// if false, break out of parent function

function checkLength() {
    if (guess.length > 5) {
        console.log('guess is too long')
    } else if (guess.length < 5) {
        console.log('guess is too short')
    } else {
        console.log('guess is just right')
    }
    inputEl.value = ''
} 



// checkWinner:
// convert guess to lowercase
// if guess === answer
// return msg = we have a winner

const checkWinner = () => {}

// function:
// 