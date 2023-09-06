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
submitBtn.addEventListener('click', updateArray)

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
    // How to exit out of this function if validGuess is false?
    checkWinner()
    // testGuessAgainstAnswer()
    clearInputValue()
    addGuessToObject()
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
    updateArray()
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


// NEXT - this adds the input value to every null value in the guesses array. How to change so it only does this for the first value?

// Do I need to consider switch statements? 
// Or while loops?

// function updateArray() {
//     for (let i = 0; i < guesses.length; i++) {
//         if (guesses[i] === null) {
//             guesses.splice(i, 1, inputEl.value.toLowerCase())
//         }
//     console.log(guesses)
//     }
// }

function updateArray() {
    length = guesses.length
    let i = 0
    while (i < length && guesses[i] === null) {
            guesses.splice(i, 1, inputEl.value.toLowerCase())
    }
    console.log(guesses)
}