//currentQuiz represents the order of the questions as they are accessed from the array and score keeps track of the correct answers the person gets.
//the rest are constansts used to reference HTML elements

let currentQuiz = 0;
let score = 0;
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const comment = document.getElementById("text");
const overlay = document.getElementById("overlay");
const startPage = document.getElementById("quiz-start-page");
const quizBtn = document.getElementById("quiz-btn");

//The questions are stored as objects in an array with propoerties ; question, a,b,c,d and correct.
//

const quizData = [
    {
        question: "Which of the following is the correct format for the CSS? ",
        a: `p {
              	color: red,
                        text-align: center;
              }`,

        b:  `p {
              	color: red;
                        text-align: center;
              }`,

        c: `p {
              	color -red;
                        text-align -  center;
              }`,

        d: `p {
              	color: red;
                        text-align: center;
              }`,
        correct: "b",
    },
    {
        question: "Which of the following examples is the correct way to use CSS ID selector?",
        a: ` #1sen {
            text-align: center;
            color: red;
          }`,

        b: ` *sen1 {
             text-align: center;
             color: red;
          }`,

        c: `  #sen1 {
             text-align: center;
             color: red;
          }`,

          d: ` *1sen {
              text-align: center;
              color: red;
            }`,

          correct: "c",
    },
    {
        question: "Which of the following can be a possible value for margin properties? ",
        a:   "auto",
        b:   "?",
        c:   "solid",
        d:   "implement",

        correct: "a",
    },
    {
        question: `Which of the following is the correct selector for id="top" and class="names"`,
        a: ".top , #names",
        b: ".names, .top",
        c: "#name, #top",
        d: "none of the above",

        correct: "d",
    },
    {
      question: `The following in NOT recommended for use in CSS layout:`,
      a: "positioning",
      b: "grid",
      c: "Tables",
      d: "flex box",

      correct: "c",
    }
];

//To start the quiz we should press START
quizBtn.addEventListener("click", () => {
  startPage.style.display = "none";
});

//This is the starter function that calls for the quiz to be loaded
loadQuiz();

//The loadquiz function calls for the questions to be passed into the radio form declared in the HMTL file.
//Each question object is loaded individually in order as it is called for.
//The deselect answers function ensures that no answer is checked before the user opens the question.
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

//The getSelected function looks for the answer that a user has selected
function getSelected() {
    // let answer = undefined;

//an undefined answer is the default option to show that no answe has been checked by the user
//Using the answerEls object we go through all the answers to find which one is checked by using "true" or "false"
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

//the checked answer is returned as the user's choice
    return answer;
}

//Before the quiz is loaded thsi function ensures that all answers are unchecked by using booloean
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    //First we get the answer that was selected by the user form the getselected method
    const answer = getSelected();

//we then check to see if an answer was passed through or no option was checked.
//If an answer was passed through then we can compare the user's input with the correct answer in the array by calling the correct property of the question objects
//If it's correct we increase the score by one and output a message that tells the user that thier answer is correct
//If the answer is correct a short feedback is provided to explain why thier answer was wrong
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
            correctAnswer();
        } else {
          incorrectAnswer();
        }

//Once a question is completed, scores are updated and feedback is given the next question is loaded by first increasing the counter to access the next question in the array
//If there are no more questions the quiz terminates to the last window where the scores are displayed
//A reload button is provided to reload the quiz
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML =
          `
                 <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>

                <button onclick="location.reload()">Reload</button>`
            ;
        }
    }
});
//This function displays the overlay which gives the user feedabck on the question they got wrong
function incorrectAnswer() {
  passComment(currentQuiz);
  overlay.style.display = "block";
}

//When the answer is correct this congrats function is called to pass the message that the answer is correct
function correctAnswer() {
  passCongrats();
  overlay.style.display = "block";
}

//This function removes the overlay from the screen when called by using the display property.
function off() {
  overlay.style.display = "none";
}

//This allows the user to exit the overlay by calling the off() function when anywhere on the screen is clicked since it covers the whole screen.
overlay.addEventListener("click", off);

//This function lets the user know when their answer is correct by passing a different message to the overlay throught the comment object
function passCongrats() {
  comment.innerHTML = `<span class="correct">That's correct!!!</span>`
};

//This function is used to pass comments to be diplayed by the Overlay
//Using the currentQuiz variable that is used to load questions the function gives the appropriate comment that relates to that particular question.
//When a user get a correct answer a comment is not passed.
//Used by the on() function

function passComment(currentQuiz) {
  switch(currentQuiz) {
    case 0: comment.innerHTML =
       `<span class="incorrect">That's Incorrect</span><br><br>
       CSS syntax is composed of selector and declaration wherein selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons.Each declaration includes a CSS property name and a value, separated by a colon and declaration blocks are surrounded by curly braces.
        <br><br>
       See https://www.w3schools.com/css/css_syntax.asp for more information.
       `;
      break;
      case 1: comment.innerHTML = `
      <span class="incorrect">That's Incorrect</span><br><br>
      Hash (#) character is being used to select an element with a specific id. An ID name cannot start with a number

    `;
      break;
      case 2: comment.innerHTML = `
      <span class="incorrect">That's Incorrect</span><br><br>
      '?' and 'implement' do not exist as values in CSS margin properties.

    `;
      break;
      case 3: comment.innerHTML = `
      <span class="incorrect">That's Incorrect</span><br><br>
    The syntax for id selectors in CSS is to start with a # i.e #top and for classes is to start with a . i.e .names which none of the answers were correct.
    `;
      break;
      case 4: comment.innerHTML = `
      <span class="incorrect">That's Incorrect</span><br><br>
     Table layouts are inflexible, very heavy on markup, difficult to debug, and semantically wrong therefore they are not recommended for use in CSS layouts
    `;
      break;
  }
}
