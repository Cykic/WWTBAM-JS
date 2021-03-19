// QUESTIONS
const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "Douglas Crockford",
      b: "Sheryl Sandberg",
      c: "Brendan Eich",
      d: "Jordan Sanders",
    },
    correctAnswer: "Brendan Eich",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "npm",
      b: "TypeScript",
      c: "Node.js",
      d: "React",
    },
    correctAnswer: "npm",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "Angular",
      b: "jQuery",
      c: "RequireJS",
      d: "ESLint",
    },
    correctAnswer: "ESLint",
  },
  {
    question: "What is the capital of Spain?",
    answers: {
      a: "Berlin",
      b: "Buenos Aires",
      c: "Madrid",
      d: "San Juan",
    },
    correctAnswer: "Madrid",
  },
  {
    question: "When did The Avengers come out?",
    answers: {
      a: "May 2, 2008",
      b: "May 4, 2012",
      c: "May 3, 2013",
      d: "April 4, 2014",
    },
    correctAnswer: "May 4, 2012",
  },
  {
    question: "HTML stands for what?",
    answers: {
      a: "Hypertrophic Management Language",
      b: "Hyperberic Tertiary Logrithm",
      c: "Hypertext Markup Language",
      d: "Hyperresonant Marginal Logrithm",
    },
    correctAnswer: "Hypertext Markup Language",
  },
  {
    question: "What is the name of the biggest part of the human brain?",
    answers: {
      a: "Cerebrum",
      b: "Thalamus",
      c: "Medulla",
      d: "Cerebellum",
    },
    correctAnswer: "Cerebrum",
  },
  {
    question: "Who developed and designed TypeScript?",
    answers: {
      a: "Microsoft",
      b: "Amazon",
      c: "Oracle",
      d: "Google",
    },
    correctAnswer: "Microsoft",
  },
  {
    question: "JavaScript file has an Extension of?",
    answers: {
      a: ".java",
      b: ".js",
      c: ".javascript",
      d: ".xml",
    },
    correctAnswer: ".js",
  },
  {
    question: "Which is a Backend Framework of JavaScript?",
    answers: {
      a: "React.js",
      b: "Node.js",
      c: "Vue.js",
      d: "Ember.js",
    },
    correctAnswer: "Node.js",
  },
  {
    question: "To wrap a block of text around an image we use CSS property?",
    answers: {
      a: "wrap",
      b: "push",
      c: "float",
      d: "align",
    },
    correctAnswer: "float",
  },
  {
    question: "Golf player Vijay Singh belongs to which country?",
    answers: {
      a: "USA",
      b: "Fiji",
      c: "India",
      d: "UK",
    },
    correctAnswer: "Fiji",
  },
  {
    question:
      "Each year World Red Cross and Red Crescent Day is celebrated on?",
    answers: {
      a: "May 8",
      b: "May 18",
      c: "June 8",
      d: "June 18",
    },
    correctAnswer: "May 8",
  },
  {
    question: "The ozone layer restricts?",
    answers: {
      a: "Visible light",
      b: "Infrared radiation",
      c: "Gamma rays",
      d: "Ultraviolet radiation",
    },
    correctAnswer: "Ultraviolet radiation",
  },
  {
    question: "Filaria is caused by?",
    answers: {
      a: "Bacteria",
      b: "Mosquito",
      c: "Protozoa",
      d: "Virus",
    },
    correctAnswer: "Mosquito",
  },
];

// VARIABLES
let qQuestion, qAnswer, qOption1, qOption2, qOption3, qOption4;
let qCount;
let random = Math.floor(Math.random() * 14);
let optionS = [];
let incorrect = Math.floor(Math.random() * 3);
let correct;
let check;
let timeleft = 30;
let chart = ["A.png", "B.png", "C.png", "D.png"];
let randomChart = Math.floor(Math.random() * 3);
let norep = [];

// SELECTORS
const question = document.querySelector(".question");
const option1 = document.querySelector("#option-1");
const option2 = document.querySelector("#option-2");
const option3 = document.querySelector("#option-3");
const option4 = document.querySelector("#option-4");
const questionNo = document.querySelector(".question-no");
const optionBtns = document.querySelectorAll(".option");
const half = document.querySelector("#half");
let currentScore = document.querySelector(`#src${qCount}`);
const input = document.querySelector("body");
const price = document.querySelector("#amt");
const replay = document.querySelector("#newgame");
const walk = document.querySelector("#walk");
const popUP = document.querySelector("#endgame");
const modalB = document.querySelector("#opacity");
const timer = document.getElementById("timer");
const backA = document.querySelector("#backA");
const modalA = document.querySelector("#modalA");
const backP = document.querySelector("#backP");
const modalP = document.querySelector("#modalP");
const audience = document.querySelector("#audience");
const aud = document.querySelector("#aud");
const phon = document.querySelector("#phon");
const call = document.querySelector("#call");
const vote = document.querySelector("#vote");
const ansa = document.querySelector("#ansa");
const quit = document.querySelector("#quit");


// FUNCTIONS

// ASSIGN QUESTION AND ANSWERS
const assignQ = () => {
  qQuestion = myQuestions[qCount].question;
  qAnswer = myQuestions[qCount].correctAnswer;
  qOption1 = myQuestions[qCount].answers.a;
  qOption2 = myQuestions[qCount].answers.b;
  qOption3 = myQuestions[qCount].answers.c;
  qOption4 = myQuestions[qCount].answers.d;
  questionNo.textContent = qCount + 1;
  question.textContent = qQuestion;
  option1.textContent = qOption1;
  option2.textContent = qOption2;
  option3.textContent = qOption3;
  option4.textContent = qOption4;
  return qAnswer;
};
// ASK AUDIENCE
const showA = () => {
  backA.classList.add("opacity");
  modalA.classList.add("lost");
  audience.classList.remove("enable");
  vote.src = chart[randomChart];
  aud.removeEventListener("click", showA);
  console.log(vote);
};
const hideA = () => {
  vote.src = "";
  backA.classList.remove("opacity");
  modalA.classList.remove("lost");
};
// PHONE A FRIEND
const showP = () => {
  phon.classList.remove("hide");
  call.classList.remove("enable");
  console.log("clicked");
  call.removeEventListener("click", showP);
  ansa.textContent = assignQ();
};

const hideP = () => {
  phon.classList.add("hide");
};

//SHOW CORRECT OPTION
const showCorrectAnswer = () => {
  for (let c = 0; c < optionBtns.length; c++) {
    if (optionBtns[c].textContent === assignQ()) {
      // console.log(optionBtns[c]);
      optionBtns[c].classList.add("correct");
    }
    optionBtns[c].classList.remove("hover");
  }
};

// CHOOSING ANSWER FROM OPTIONS
for (let i = 0; i < optionBtns.length; i++) {
  optionBtns[i].addEventListener("click", function () {
    selected = optionBtns[i].textContent;
    // console.log(selected);
    // console.log("Answer is", assignQ());
    // CORRECT ANSWER
    if (selected == assignQ()) {
      if (questionNo.textContent === "15") {
        setTimeout(() => {
          optionBtns[i].classList.add("correct");
        }, 500);

        setTimeout(() => {
          optionBtns[i].classList.remove("correct");
        }, 200);
        optionBtns[i].classList.add("correct");

        // DELAY BEFORE NEXT QUESTION
        setTimeout(() => {
          optionBtns[i].classList.toggle("hover");
          optionBtns[i].classList.remove("correct");
          gameOver();
        }, 800);
      }
      resetTimer();
      optionBtns[i].classList.toggle("hover"); //TURN GREEN

      // BLINK GREEN

      setTimeout(() => {
        optionBtns[i].classList.add("correct");
      }, 500);

      setTimeout(() => {
        optionBtns[i].classList.remove("correct");
      }, 200);
      optionBtns[i].classList.add("correct");

      // DELAY BEFORE NEXT QUESTION
      setTimeout(() => {
        optionBtns[i].classList.toggle("hover");
        optionBtns[i].classList.remove("correct");
        nextQuestion();
      }, 800);
    }
    // WRONG ANSWER
    else {
      showCorrectAnswer();
      check = currentScore.id;
      // PAINT CORRECT RED
      // console.log(currentScore);
      optionBtns[i].classList.remove("hover");
      optionBtns[i].classList.add("wrong");
      setTimeout(() => {
        optionBtns[i].classList.toggle("hover");
        checkPoint();
      }, 1000);
    }
  });
}

//RESET TIMER
const resetTimer = () => {
  timeleft = 30;
  timer.classList.add("orange");
  timer.classList.remove("wrong");
};
// COUNTDOWN
const countdown = () => {
  let downloadTimer = setInterval(function () {
    if (timeleft < 0) {
      checkPoint();
      // gameOver()
    } else if (timeleft <= 5) {
      timer.textContent = timeleft;
      timer.classList.remove("orange");
      timer.classList.add("wrong");
    } else {
      timer.textContent = timeleft;
    }
    timeleft -= 1;
  }, 1000);
};
// INITIAL CONDITION NEW GAME
const init = () => {
  for (let t = 1; t <= 14; t++) {
    qCount = t;
    currentScore = document.querySelector(`#src${qCount}`);
    currentScore.classList.remove("active-score");
  }
  qCount = 0;
  // COUNTDOWN
  countdown();
  // console.log(timeleft);
  resetTimer();
  currentScore.classList.remove("active-score");
  assignQ();
  half.classList.add("enable");
  call.classList.add("enable");
  audience.classList.add("enable");

  half.addEventListener("click", f0f0);
  call.addEventListener("click", showP);
  audience.addEventListener("click", showA);

  price.textContent = "";
  replay.classList.remove("playagain");

  // REMOVE POP UP
  popUP.classList.add("hidden");
  // HIDE AUDIENCE MODAL
  // hideA()
  //HIDE PHONE A FRIEND
  hideP();

  currentScore = document.querySelector(`#src${qCount}`);
  currentScore.classList.add("active-score");
  for (let c = 0; c < optionBtns.length; c++) {
    // console.log(optionBtns[c]);
    optionBtns[c].classList.remove("correct");
    optionBtns[c].classList.remove("wrong");
    optionBtns[c].classList.add("hover");
    optionBtns[c].classList.add("visible");
  }
};

// DISPLAY NEXT QUESTIONS AND ANSWERS
const nextQuestion = () => {
  qCount += 1;
  for (let d = 0; d < optionBtns.length; d++) {
    optionBtns[d].classList.add("visible");
    optionBtns[d].classList.add("hover");
  }
  console.log("false");
  currentScore.classList.remove("active-score");
  assignQ();
  // console.log(currentScore.textContent);
  // console.log(qCount);
  // console.log(qQuestion);
  console.log(qAnswer);
  console.log(qCount);
  currentScore = document.querySelector(`#src${qCount}`);
  currentScore.classList.toggle("active-score");
};

// 50:50
const f0f0 = () => {
  optionS = []; //FOR STORING THE INCORRECT OPTIONS
  incorrect = Math.floor(Math.random() * 3);
  for (let d = 0; d < optionBtns.length; d++) {
    if (optionBtns[d].textContent === assignQ()) {
      correct = optionBtns[d]; //SAVE CORRECT
    } else {
      optionS.push(optionBtns[d]); //PUSH INCORRECT TO ARRAY
    }
  }
  // console.log(correct);
  // console.log(incorrect);
  // console.log(optionS);

  //REMOVE ON RANDOM INCORRECT OPTION
  optionS.splice(incorrect, 1);
  console.log(optionS);
  // HIDE REMAINING 2 INCORRECT OPTION
  for (let z = 0; z < optionS.length; z++) {
    optionS[z].classList.remove("visible");
    optionS[z].classList.remove("hover");
  }
  // DISABLE 50:50 button after 1 usage
  half.classList.remove("enable");
  half.removeEventListener("click", f0f0);
};

// GAME OVER
const gameOver = () => {
  price.textContent = currentScore.textContent;
  popUP.classList.remove("hidden");
  price.style.display = "block";
  replay.classList.add("playagain");
  quit.classList.add("playagain1");
  hideP();
  hideA();
};
//REPLAY
const playAgain = () => {
  location.reload();
};
//CHECKPOINT
const checkPoint = () => {
  if (qCount < 4) {
    qCount = 0;
    currentScore = document.querySelector(`#src${qCount}`);
    // console.log("CHECKPOINT 1");
  } else if (qCount === 4) {
    qCount = 4;
    currentScore = document.querySelector(`#src${qCount}`);
    // console.log("CHECKPOINT 1");
  } else if (qCount > 4 && qCount < 9) {
    qCount = 4;
    currentScore = document.querySelector(`#src${qCount}`);
    // console.log("CHECKPOINT 2");
  } else if (qCount === 9) {
    qCount = 9;
    currentScore = document.querySelector(`#src${qCount}`);
    // console.log("CHECKPOINT 1");
  } else if (qCount > 9 && qCount <= 14) {
    qCount = 9;
    currentScore = document.querySelector(`#src${qCount}`);
    // console.log("CHECKPOINT 1");
  }
  gameOver();
  // End of Game
};

init();

// KEY PRESS TO CLICK OPTION
input.addEventListener("keyup", function (e) {
  console.log(e);
  if (e.code === "KeyA") {
    optionBtns[0].click();
    console.log("A pressed");
  } else if (e.code === "KeyB") {
    console.log("B Pressed");
    optionBtns[1].click();
  } else if (e.code === "KeyC") {
    optionBtns[2].click();
    console.log("C Pressed");
  } else if (e.code === "KeyD") {
    optionBtns[3].click();
    console.log("D Pressed");
  } else if (e.code === "Escape") {
    modalB.click();
  }
});

modalB.addEventListener("click", playAgain);
replay.addEventListener("click", playAgain);
half.addEventListener("click", f0f0);
audience.addEventListener("click", showA);
walk.addEventListener("click", gameOver);
call.addEventListener("click", showP);
// hide A
backA.addEventListener("click", hideA);
// hide P
backP.addEventListener("click", hideP);
