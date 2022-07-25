/* jshint esversion: 8 */
/**initialize const */
const startBtn = document.getElementById('start-btn');
const questionContainer = document.querySelector('.question-container');
const mainContainer = document.querySelector('.container');
const nextBtn = document.getElementById('next-btn');


startBtn.addEventListener('click', startGame);

nextBtn.addEventListener('click', () => {
    QuestionIndex++;
    setNextQuestion();
  });
  

function startGame() {
    mainContainer.classList.add('hide');
    startBtn.classList.add('hide');
    nextBtn.classList.remove('hide');
    questionContainer.classList.remove('hide');
    mixQuestion = questions.sort(() => Math.random() - .5);
    QuestionIndex = 0;
    setNextQuestion();
}

function  setNextQuestion(){

}

function resetState(){

}

function showQuestion(){

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