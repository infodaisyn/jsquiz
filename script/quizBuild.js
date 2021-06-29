export function buildQuiz () {
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