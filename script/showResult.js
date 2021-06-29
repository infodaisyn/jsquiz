export function showResults () {
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
            answerContainers[questionNumber].style.color = 'lightgreen';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }

        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        console.log(userAnswer);
        console.log(answerContainer);
    });
}