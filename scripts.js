// const categories = [vegetables, fruits]
const lettersBtn = document.querySelector(".letterWrap")
const resetBtn = document.querySelector(".reset")
const livesSpan = document.querySelector('.lives')
const notif = document.querySelector('notifation hidden')
const notifContent = document.querySelector('.notification content')
const notifSpan = document.querySelector('.notification span')
const underscoreDiv = document.querySelector('#underscore')
const startBtn = document.querySelector(".start-game")


const words = [
    'ORANGE',
    'BANANA',
    'GRAPEFRUIT',
    'BLUEBERRY',
    'PASSIONFRUIT',
    'WATERMELOM',
    'NECTARINE',
    'TOMATO',
    'AVOCADO',
    'MANDARIN',
    'POMEGRANATE',
    'LETTUCE',
    'CABBAGE',
    'CAULIFLOWER',
    'ASPARAGUS',
    'CUCUMBER',
    'BROCCOLLI',
    'ZUCCHINI',
    'SPINACH',
    'CELERY',
    'MUSHROOM',
    'SAUERKRAT'
]


const randomWord = words[Math.floor(Math.random() * words.length)]

function startGame() {
    let lives = 6
    livesSpan.textContent = lives
    // console.log(randomWord.includes('a'));
    console.log((randomWord))
    for(let i = 0; i < randomWord.length; i++) {
        const p = document.createElement('span')
        p.textContent = '_ '
        underscoreDiv.appendChild(p)
    }  
}

function getAnswer() {
    let answer = [] 
    for(let i = 0; i < randomWord; i++) {
        if(value === letter) {
            const answers = i
            answer.push(answers)
        }
    }
}

getAnswer()



function letterPress(e) {
    let letter = e.target.id
    // letter = this.textContent.toLowerCase();
    console.log(letter);
    // for(let letter = 0; letter <= 26; letter++ ) {
    //     // console.log(letters[letter]);
    // }
    if (randomWord.includes(letter)) {
        getAnswer(letter)
        for(let i = 0; i < letter.length; i++) {
            // console.dir(underscoreDiv.childNodes[0].textContent)
            // console.log(getAnswer(letter));
            // underscoreDiv[i].textContent = letter
            if (letter == randomWord[i]){
                underscoreDiv.childNodes[i].textContent = letter
              
                }  
        }
    }
}

function livesDecrease() {
    lives--
    livesSpan.textContent = lives
    if (lives === 0) {
        console.log('lost');
    }
}

function reset() {
    // lives = 0
    // answer = []
    // getAnswer()
    // letterPress(e)
    // startGame()
    

}


// const underscores = "_ ".repeat(randomWord.length)



// console.log(underscores);






// let answerArray = []
// for (let i = 0; i < randWord.length; i++) {
//     answerArray[i] = '_'
//     }

// let remainingLetters = randWord.length


lettersBtn.addEventListener("click", letterPress)
resetBtn.addEventListener('click', reset)
startBtn.addEventListener('click', startGame)

function someFunction(event) {
  console.log(event.target.id);
}
