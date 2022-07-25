/* jshint esversion: 8 */
const endBtn =document.getElementById('end-btn');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainer = document.querySelector('.question-container');
const questionEl = document.getElementById('question');
const answerBtnEl = document.getElementById('answer-buttons');
const mainContainer = document.querySelector('.container');
const endContainer = document.querySelector('.endContainer');
const newgame = document.getElementById('newgame-btn');
const Gamerules =document.getElementById('Gamerules');
const playBtn = document.getElementById('btn-play');

let mixQuestion, QuestionIndex;
endBtn.addEventListener('click',lastbtn);
playBtn.addEventListener('click',startGame);
newgame.addEventListener('click',gameRules);
startBtn.addEventListener('click', gameRules);
nextBtn.addEventListener('click', () => {
  QuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startBtn.classList.add('hide');
  mainContainer.classList.add('hide');
  newgame.classList.add('hide');
  endContainer.classList.add('hide');
  Gamerules.classList.add('hide');
  nextBtn.classList.remove('hide');
  mixQuestion = questions.sort(() => Math.random() - 0.5);
  QuestionIndex = 0;
  questionContainer.classList.remove('hide');
  setNextQuestion();
}

function gameRules (){
  Gamerules.classList.remove('hide');
  mainContainer.classList.add('hide');
  endContainer.classList.add('hide');
  endBtn.classList.add('hide'); 
}

function setNextQuestion() {
  resetState();
  showQuestion(mixQuestion[QuestionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerBtnEl.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextBtn.classList.add('hide');
  while (answerBtnEl.firstChild) {
    answerBtnEl.removeChild(answerBtnEl.firstChild);
  }
}

function selectAnswer(e) {
  const selBtn = e.target;
  const correct = selBtn.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerBtnEl.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (mixQuestion.length > QuestionIndex + 2) {
    nextBtn.classList.remove('hide');
  } else {
    endBtn.classList.remove('hide');
  } 
}
function lastbtn (){
    endContainer.classList.remove('hide'); 
    newgame.classList.remove('hide');
    questionContainer.classList.add('hide');
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

const questions = [
  {
    question: 'Who is the evil in Harry Potter?',
    answers: [
      { text: 'Voldemort', correct: true },
      { text: 'Severus Snape', correct: false },
      { text: 'Dobby', correct: false },
      { text: 'Gandalf', correct: false }
    ]
  },
  {
    question: 'What happened with Don Quixote?',
    answers: [
      { text: 'Miguel de Cervantes', correct: true },
      { text: 'Mark Twain ', correct: false },
      { text: 'Cillian Murphy', correct: false },
      { text: 'Sancho Panza', correct: false }
    ]
  },
  {
    question: 'What character is Queequeg ?',
    answers: [
      { text: 'Captain', correct: false },
      { text: 'Cannibal ', correct: true },
      { text: 'Moby Dick', correct: false },
      { text: 'Pirat', correct: false }
    ]
  },
  {
    question: 'Because of what Hamlet died?',
    answers: [
      { text: 'Car accident', correct: false },
      { text: 'Poison', correct: false },
      { text: 'Rapier', correct: false },
      { text: 'Poisoned rapier', correct: true }
    ]
  },
];