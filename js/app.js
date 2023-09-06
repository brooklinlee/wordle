// Import word-bank object
// Create a random generator function to select a word that will be used for each round of the game
// CONSTANTS
import { getRandomWord } from './word-bank.js'

// VARIABLES
let board, guessNum, winner, answer, validGuess, guesses, deconstructGuess


// CACHED ELEMENT REFERENCES
const submitBtn = document.getElementById('submit-btn')
const resetBtn = document.getElementById('reset-btn')
const inputEl = document.getElementById('inputEl')
const msgEl = document.getElementById('msg')

const msgText = document.createElement('p')

// let guess = inputEl.value.toLowerCase()


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
    deconstructGuess = []
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
    updateArray()
    breakApart()
    displayWinner()
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
        if (!updated && (guesses[i] === null) && (inputEl.value.length === 5) && (inputEl.value !== answer)) {
            guesses[i] = inputEl.value.toLowerCase()
            updated = true
        }
    }
    console.log(guesses)
    // breakApart()
}

function displayWinner() {
    if (inputEl.value.toLowerCase() === answer) {
        console.log('you won the game!')
        // display winner here
    }
}

//* NEXT - create a function that takes value of array (if !null), breaks it apart to individual letters, creates a new array out of it, and displays the letters one by one to the grid using getElementById('')

// Try the .map() method? 
function breakApart() {
    const arrayOfArrays = guesses.map(str => [str])
    console.log(arrayOfArrays)
}

// let testArray = ['lemon', 'lake', 'lemon', 'grape', 'birds' , 'quack']

// const arrayOfArrays = testArray.map(str => [str])

// console.log (arrayOfArrays)

// function breakApartTest() {
//     }


// breakApartTest()


function placeInSqare() {
    //takes individual letters and appends them to individual squares
}

// console.log(guesses[0][0])

// let testArray = ['string', 'ball', 'yarn']
// console.log(testArray[0][1])
