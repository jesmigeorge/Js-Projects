//consider the workflow 1st
//on clicking the start button,it disappears and loads the 1st question set.Then on clicking next button we should set the next question.
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionsIndex
let points = 0
startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++
    setNextQuestion()
})
function startGame(){
    console.log("Game started!")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random()-0.5)   //for mixing up the elements of the questions array
    currentQuestionsIndex = 0               //starting index to access the question
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}   

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}

function showQuestion(question){
    questionElement.innerText = question['question']
    question['answers'].forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    // if (correct == true){
    //     points = points+1
    // }
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionsIndex+1)
        nextButton.classList.remove('hide')
    else{
        // scoreDisplay = document.createElement('div')
        // scoreDisplay.innerHTML = ''+points+'/'+shuffledQuestions.length
        // questionContainerElement.appendChild(scoreDisplay)
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Where does bhaiya live?',
        answers: [
            {text: 'toraipakkam',correct:true},
            {text: 'mylapore',correct:false},
            {text: 'trichy',correct:false},
            {text: 'madras central',correct:false}
        ]
    },
    {
        question: 'Where does bhaiya work?',
        answers: [
            {text: 'red-bulls racing',correct:false},
            {text: 'ford',correct:true},
            {text: 'nexa',correct:false},
            {text: 'benz',correct:false}
        ]
    },
    {
        question: 'Where does bhaiya do in free time?',
        answers: [
            {text: 'sleep',correct:false},
            {text: 'watch movie',correct:false},
            {text: 'learn something new',correct:false},
            {text: 'read GOT!!!',correct:true}
        ]
    },
    {
        question: '2*4?',
        answers: [
            {text: '9',correct:false},
            {text: '4',correct:false},
            {text: '8',correct:true},
            {text: 'idk man',correct:false}
        ]
    }
]