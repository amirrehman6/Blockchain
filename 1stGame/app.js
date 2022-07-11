const scoreDisplay = document.getElementById('score-display')
const questionsdisplay = document.getElementById('questions-display')

const questions = [
    {
        quiz: ['hockey','cricket','golf'],
        options: ['long','short'],
        correct: 0
    },
    {
        quiz: ['hockey','cricket','golf'],
        options: ['long','short'],
        correct: 0
    },
    {
        quiz: ['hockey','cricket','golf'],
        options: ['long','short'],
        correct: 0
    },
    {
        quiz: ['hockey','cricket','golf'],
        options: ['long','short'],
        correct: 0
    },
    {
        quiz: ['hockey','cricket','golf'],
        options: ['long','short'],
        correct: 0
    }
]

let score = 0;
scoreDisplay.textContent = score;

function populateQuestions() {
    questions.forEach(questions => {
        const questionBox = document.createElement('div')
        questionBox.classList.add('question-box')

        const logoDisplay = document.createElement('h1')
        logoDisplay.textContent = '@'
        questionBox.append(logoDisplay)

        questions.quiz.forEach(tip => {
            const tipText = document.createElement("p")
            tipText.textContent = tip
            questionBox.append(tipText)
        })
        
        const questionButtons = document.createElement('div')
        questionButtons.classList.add('question-buttons')
        questionBox.append(questionButtons)

        questions.options.forEach(option => {
            const questionButton = document.createElement('button')
            questionButton.classList.add('question-button')
            questionButton.textContent = option
            
            questionButton.addEventListener('click',() => checkAnswer())


            questionButtons.append(questionButton)

        });

        questionsdisplay.append(questionBox)
    })
}

populateQuestions()


// time of video was 35 min freecodecamp.org 'jeopardy game'


function checkAnswer() {
    console.log('checked')
}