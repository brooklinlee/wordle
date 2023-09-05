// Import word-bank object
// Create a random generator function to select a word that will be used for each round of the game
// CONSTANTS
import { getRandomWord } from './word-bank.js'

// VARIABLES
let board, guessNum, winner, answer, validGuess

let guess = inputEl.value.toLowerCase()

// CACHED ELEMENT REFERENCES
const submitBtn = document.getElementById('submit-btn')
const resetBtn = document.getElementById('reset-btn')
const inputEl = document.getElementById('inputEl')
const msgEl = document.getElementById('msg')

const msgText = document.createElement('p')



// EVENT LISTENERS
submitBtn.addEventListener('click', testGuess)
submitBtn.addEventListener('click', renderGuessToScreen)

resetBtn.addEventListener('click', () => {})

// FUNCTIONS

const init = () => {
    board = [[null, null ,null ,null ,null],
    [null, null ,null ,null ,null],
    [null, null ,null ,null ,null],
    [null, null ,null ,null ,null],
    [null, null ,null ,null ,null],
    [null, null ,null ,null ,null],]
    guesses = {
        guessOne: null,
        guessTwo: null,
        guessThree: null,
        guessFour: null,
        guessFive: null,
        guessSix: null,
    }
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
    // How to exit out of this function if validGuess is false?
    checkWinner()
    // testGuessAgainstAnswer()
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

function checkLength() {
    if (inputEl.value.length > 5) {
        msgText.innerText = 'guess is too long'
        msgEl.append(msgText)
        validGuess = false
        // return
        // console.log('guess is too long')
    } else if (inputEl.value.length < 5) {
        msgText.innerText = 'guess is too short'
        msgEl.append(msgText)
        validGuess = false
        // return
        // console.log('guess is too short')
    } else {
        testGuessAgainstAnswer()
        console.log('guess is just right')
        validGuess = true
    }
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

function checkWinner() {
    if (winner === true){
        msgText.innerText = 'winner!'
        msgEl.append(msgText)
    } else {
        console.log('keep guessing')
    }
}

function clearInputValue() {
    inputEl.value = ''
}

function renderGuessToScreen() {
    // take individual letters and render to screen IF only 5 letters
    console.log('render to screen')
}

// take guess and break apart, add new guess to an object named guesses