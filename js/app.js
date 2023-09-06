// Import word-bank object
// Create a random generator function to select a word that will be used for each round of the game
// CONSTANTS
import { getRandomWord } from './word-bank.js'

// VARIABLES
let board, guessNum, winner, answer, validGuess, guesses


// CACHED ELEMENT REFERENCES
const submitBtn = document.getElementById('submit-btn')
const resetBtn = document.getElementById('reset-btn')
const inputEl = document.getElementById('inputEl')
const msgEl = document.getElementById('msg')

const msgText = document.createElement('p')

let guess = inputEl.value.toLowerCase()


// EVENT LISTENERS
submitBtn.addEventListener('click', testGuess)
// submitBtn.addEventListener('click', updateArray)

resetBtn.addEventListener('click', () => {})

// FUNCTIONS

const init = () => {
    board = [[null, null ,null ,null ,null],
    [null, null ,null ,null ,null],
    [null, null ,null ,null ,null],
    [null, null ,null ,null ,null],
    [null, null ,null ,null ,null],
    [null, null ,null ,null ,null],]
    guesses = [null, null, null, null, null, null]
    guessNum = 0    
    // winner = false
    validGuess = 0
    answer = getRandomWord()
    console.log(answer)
}

init()


function testGuess(){
    clearMsg()
    toLowerCase()
    // checkLetters()
    checkLength()
    checkWinner()
    updateArray()
    clearInputValue()
    
}

function clearMsg() {
    msgText.innerText = ''
}

function toLowerCase() {
    let convertedGuess = inputEl.value.toString().toLowerCase()
    console.log(convertedGuess)
    return convertedGuess
}

function checkLetters() {
    // make sure there are only letters in the guess
    //* TRY .isNAN ?
    // 
}
// ADDING A LOT HERE
function checkLength() {
    if (inputEl.value.length > 5) {
        msgText.innerText = 'guess is too long'
        msgEl.append(msgText)
        validGuess = false
        return
    } else if (inputEl.value.length < 5) {
        msgText.innerText = 'guess is too short'
        msgEl.append(msgText)
        validGuess = false
        return
    } else {
        testGuessAgainstAnswer()
        console.log('guess is just right')
        validGuess = true
    }
    // updateArray()
    // checkWinner()
} 

function testGuessAgainstAnswer() {
    if (inputEl.value.toString().toLowerCase() === answer) {
        let winner = true
        msgText.innerText = 'winner!'
        msgEl.append(msgText)
    } else {
        let winner = false
        msgText.innerText = 'keep trying!'
        msgEl.append(msgText)
    }
}

function clearInputValue() {
    inputEl.value = ''
}

function updateArray() {
    let updated = false
    for (let i = 0; i < guesses.length; i++) {
        if (!updated && (guesses[i] === null || guesses[i] === '')) {
            guesses[i] = inputEl.value.toLowerCase()
            updated = true
        }
    }
    console.log(guesses)
}

function checkWinner() {
    if (inputEl.value.toLowerCase() === answer) {
        console.log('you won the game!')
    }
}