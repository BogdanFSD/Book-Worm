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