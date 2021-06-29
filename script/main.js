
fetch("../questions/questions.json")
.then(response => {
   return response.json();
})
.then(myQuestions => {

    const quizContainer = document.getElementById('quiz');
    const submitButton = document.getElementById('submit');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    const output = [];


    //code to listing the questions and options

    function buildQuiz () {
        // console.log(myQuestions);        
        myQuestions.forEach((currentQuestion, questionNumber) => {
            console.log(currentQuestion, questionNumber);
            const answers = [];

            // and for each available answer...
            for(letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question-block">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>
                </div>
                `
            )
        });

        quizContainer.innerHTML = output.join('');
        
        const questionBlock = document.querySelector(".question-block");
        questionBlock.classList.add("active");
    }

    function showResults () {
        const answerContainers = quizContainer.querySelectorAll('.answers');
        const resultsContainer = document.getElementById('results');
        let numCorrect = 0;

        myQuestions.forEach( (currentQuestion, questionNumber) => {
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if(userAnswer === currentQuestion.correctAnswer) {
                numCorrect++;

                // color the answers green
                // answerContainers[questionNumber].style.color = 'lightgreen';
            } else {
                // answerContainers[questionNumber].style.color = 'red';
            }

            resultsContainer.innerHTML = `<div class="result-content">${numCorrect} out of ${myQuestions.length}</div>`;
            console.log(userAnswer);
            console.log(answerContainer);
        });
    }

    function navHandler () {
        let x = document.getElementById('quiz').lastElementChild;
        console.log(x);
        if(x.classList.contains('active')) {
            console.log(done);
        }
    }

    function nextHandler () {
        let x = document.querySelector('.question-block.active');
        if(!x.nextElementSibling) {
            document.querySelector('.nav-links').classList.add('hide');
            document.querySelector('.sbtn').classList.add('show');
        }
        x.nextElementSibling.classList.add('active');
        x.classList.remove('active');
    }

    function prevHandler () {
        let x = document.querySelector('.question-block.active');
        x.previousElementSibling.classList.add('active');
        x.classList.remove('active');
    }
    
    buildQuiz();
    navHandler();
    submitButton.addEventListener('click', showResults);
    next.addEventListener('click',nextHandler);
    prev.addEventListener('click',prevHandler);
});



