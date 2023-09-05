// Create a word bank to pull from as an object
// Export it
const words = ['lemon', 'stand', 'goose', 'ducks', 'grape', 'fruit', 'juice', 'fresh', 'quack', 'drink', 'bread', 'snack', 'flock', 'birds', 'vine', 'farm', 'green', 'sweet', 'fresh', 'crisp', 'sunny', 'tasty', 'treat', 'wings', 'cider', 'yummy', 'geese', 'nests', 'swans', 'tweet', 'peeps', 
]

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)]
}

export{
    getRandomWord
}