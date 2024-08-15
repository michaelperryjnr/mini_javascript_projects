let questions = [];

let all = { start: 0, end: questions.length - 1, name: "All" };
let lect1 = { start: 0, end: 37, name: "Lecture 1: Trivial" };
let lect2 = { start: 38, end: 64, name: "Lecture 2: Trivial" };
let lect3 = { start: 65, end: 76, name: "Lecture 3: Trivial" };
let lect4 = { start: 77, end: 86, name: "Lecture 4: Trivial" };
let lect5 = { start: 87, end: 101, name: "Lecture 5: Trivial" };
let lect6 = { start: 102, end: 116, name: "Lecture 6: Trivial" };
let notSoObvious = { start: 117, end: 210, name: "Not So Obvious" };
let groupQues = { start: 211, end: 232, name: "Group Questions" };

const lectureRanges = [
  all,
  lect1,
  lect2,
  lect3,
  lect4,
  lect5,
  lect6,
  notSoObvious,
  groupQues,
];
let currentQuestion = 0;
let userAnswers = Array(questions.length).fill("");
let selectedQuestions = [];
let quizType = "all";

const baseUrl = "https://bbf-backend.onrender.com/api/quiz/user/";
const usernameDialog = document.getElementById("usernameDialog");
const quizContainer = document.getElementById("quizContainer");
const quizOptionsDiv = document.getElementById("quiz-options");
const lectureSelectionDiv = document.getElementById("lectureSelection");
const quizForm = document.getElementById("quizForm");
const feedbackContainer = document.getElementById("feedbackContainer");
const feedbackChoice = document.getElementById("feedbackChoice");
const resultDiv = document.getElementById("result");
const resultDiv2 = document.getElementById("result2");
const sectionTitle = document.getElementById("quiz-h1");
const retake = document.getElementById("retakeGroup");
const userScore = document.getElementById("user-answers");
const scoreContainer = document.getElementById("scoreContainer");
const resetBtn = document.getElementById("resetButton");
const questionCountSpan = document.getElementById("question-count");
const questionCountContainer = document.getElementById(
  "question-count-container"
);
let userName = "" || localStorage.getItem("username");
const usernameInput = (document.getElementById("username").value = userName);

const enterBtn = document.getElementById("enter-btn");
const loader = document.getElementById("loader");
const loader2 = document.getElementById("loader2");
const authInput = document.getElementById("authInput");
const authUsername = document.getElementById("authInputUsername");
const authHeader = document.getElementById("auth-h2");
const authKeyText = document.getElementById("auth-key-text");
const authDiv = document.getElementById("authPage");
let authKey = "";
const pageContents = document.getElementById("pageContents");

validateUserOnLoad();

async function validateUserFromAPI() {
  try {
    userName = authUsername.value.trim().toLowerCase();
    localStorage.setItem("username", userName);
    authKey = authInput.value.trim();

    let payload = JSON.stringify({
      username: userName,
      key: authKey,
    });

    authKeyText.innerText = "Validating Auth Key";
    authHeader.innerText = "";
    authInput.style.display = "none";
    authUsername.style.display = "none";
    enterBtn.style.display = "none";
    loader.style.display = "block";

    const response = await fetch(
      "https://bbf-backend.onrender.com/api/quiz/user/verify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: payload,
        mode: "cors",
      }
    );

    if (!response.ok) {
      throw new Error("Authentication Error");
    }

    const data = await response.json();

    if (data.isValid) {
      authKeyText.innerText = "Auth Key Validated!";
      authHeader.innerText = "Redirecting...";
      localStorage.setItem(
        "authStatus",
        JSON.stringify({ username: userName, isAuthenticated: true })
      );
      setTimeout(() => {
        localStorage.setItem("authUser", userName);
        authDiv.style.display = "none";
        pageContents.style.display = "block";
        loader2.style.display = "none";
        document.getElementById("username").value = userName;
        startQuiz();
      }, 1000);
    } else {
      authKeyText.innerText = "Invalid Auth Key!";
      authInput.value = "";
      authHeader.innerText = "Invalid Auth Key";
    }
  } catch (error) {
    console.error("Fetch error:", error);
    authHeader.innerText = error.message;
    authKeyText.innerText = "Have an auth key?";
    authHeader.style.display = "block";
    authInput.style.display = "block";
    authUsername.style.display = "block";
    enterBtn.style.display = "block";
    loader.style.display = "none";
  }
}

enterBtn.addEventListener("click", () => {
  if (authInput.value.trim() === "") {
    alert("Please enter your auth key");
    return;
  }
  validateUserFromAPI();
});

function saveScore(score) {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push({ username: userName, score: score });
  localStorage.setItem("scores", JSON.stringify(scores));
}

function startQuiz() {
  const usernameInput = document.getElementById("username");
  let username = usernameInput.value.trim();

  if (username === "") {
    if (localStorage.getItem("username")) {
      username = localStorage.getItem("username");
      userName = username;
      usernameInput.value = username;
      validateUserOnLoad();
    } else {
      alert("Please enter a username");
      return;
    }
  } else {
    localStorage.setItem("username", username);
    userName = username;
  }

  const localStat = JSON.parse(localStorage.getItem("authStatus"));
  if (localStat.username === username && localStat.isAuthenticated !== !1) {
    pageContents.style.display = "block";
    authDiv.style.display = "none";
  } else {
    pageContents.style.display = "none";
    authDiv.style.display = "flex";
    return;
  }

  validateUserOnLoad();

  if (
    username === localStorage.getItem("previousUser") &&
    localStorage.getItem("currentQuestion") !== "" &&
    JSON.parse(localStorage.getItem("userAnswers")).length > 0 &&
    JSON.parse(localStorage.getItem("selectedQuestions")).length > 0
  ) {
    userAnswers = JSON.parse(localStorage.getItem("userAnswers"));
    currentQuestion = parseInt(localStorage.getItem("currentQuestion"));
    selectedQuestions = JSON.parse(localStorage.getItem("selectedQuestions"));
    usernameDialog.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion(currentQuestion);
  } else {
    userAnswers = Array(questions.length).fill("");
    currentQuestion = 0;
    selectedQuestions = [];
    generateLectureSelection();
    usernameDialog.style.display = "none";
    quizContainer.style.display = "block";
    updateQuiz();
  }
}

async function validateUserOnLoad() {
  const usernameValue = document.getElementById("username").value.trim();
  const uDiv = document.getElementById("username");
  const uBtnFiv = document.getElementById("usernameDiv");
  const localStat = JSON.parse(localStorage.getItem("authStatus"));
  uDiv.addEventListener("input", () => {
    setTimeout(() => {
      loader2.style.display = "block";
      uDiv.style.display = "none";
      uBtnFiv.style.display = "none";
    }, 10000);
  });
  setTimeout(() => {
    loader2.style.display = "none";
    uDiv.style.display = "block";
    uBtnFiv.style.display = "flex";
  }, 10000);

  if (!localStat) {
    setTimeout(() => {
      loader2.style.display = "none";
      uDiv.style.display = "block";
      uBtnFiv.style.display = "flex";
    }, 1000);
    localStorage.setItem(
      "authStatus",
      JSON.stringify({ username: usernameValue, isAuthenticated: false })
    );
    uDiv.style.display = "block";
    uBtnFiv.style.display = "flex";
    pageContents.style.display = "none";
    authDiv.style.display = "flex";
    return;
  }
  if (localStat.username === usernameValue && localStat.isAuthenticated) {
    return;
  } else {
    document.getElementById("username").value = "";
    usernameValue =
      document.getElementById("username").value.trim() ||
      localStorage.getItem("username");
    uDiv.style.display = "none";
    uBtnFiv.style.display = "none";
    loader2.style.display = "block";
    try {
      const response = await fetch(
        `https://bbf-backend.onrender.com/api/quiz/user/validate/${usernameValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTimeout(() => {
        loader2.style.display = "none";
        uDiv.style.display = "block";
        uBtnFiv.style.display = "flex";
      }, 1000);

      if (!data.isValid) {
        pageContents.style.display = "none";
        authDiv.style.display = "flex";

        localStorage.setItem(
          "authStatus",
          JSON.stringify({ username: usernameValue, isAuthenticated: false })
        );
      } else {
        localStorage.setItem(
          "authStatus",
          JSON.stringify({ username: usernameValue, isAuthenticated: true })
        );
        uDiv.style.display = "block";
        uBtnFiv.style.display = "flex";
        pageContents.style.display = "block";
        authDiv.style.display = "none";
        return;
      }
    } catch (error) {
      return;
    }
  }
}

if (
  JSON.parse(localStorage.getItem("authStatus")).isAuthenticated !== !undefined
) {
  const usernameValue = document.getElementById("username").value.trim();
  const authDiv = document.getElementById("authPage");
  if (usernameValue !== "n3tsh1t") {
    pageContents.style.display = "none";
    authDiv.style.display = "flex";
  }
}

function generateLectureSelection() {
  lectureSelectionDiv.innerHTML = "";

  lectureRanges.forEach((lectureRange, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
                        <input type="checkbox" name="lectureCheckbox" value="${
                          index + 1
                        }"> Lecture ${index + 1}
                    `;

    if (index === 6) {
      const label = document.createElement("label");
      label.innerHTML = `
                        <input type="checkbox" name="lectureCheckbox" value="${
                          index + 1
                        }"> All
                    `;
    }
    lectureSelectionDiv.appendChild(label);
  });
}

function updateQuiz() {
  selectedQuestions = [];
  currentQuestion = 0;

  if (quizType === "custom") {
    const selectedLectureNumbers = Array.from(
      document.querySelectorAll('input[name="lectureCheckbox"]:checked')
    ).map((checkbox) => parseInt(checkbox.value));

    if (selectedLectureNumbers.length === 0) {
      alert("Please select at least one lecture.");
      return;
    }

    selectedLectureNumbers.forEach((lectureNumber) => {
      const lectureRange = getLectureRangeByNumber(lectureNumber);
      for (let i = lectureRange.start; i <= lectureRange.end; i++) {
        selectedQuestions.push(i);
      }
    });

    currentQuestion = document
      .querySelectorAll('input[name="lectureCheckbox"]:checked')
      .map((checkbox) => parseInt(checkbox.value))[0];
  } else {
    selectedQuestions = questions.map((_, index) => index);
  }
  updateQuestionCount();
  showQuestion(currentQuestion);
}

function getLectureRangeByNumber(number) {
  return lectureRanges[number - 1];
}

function updateQuestionCount() {
  questionCountContainer.style.background = "#430f58";
  questionCountSpan.style.color = "white";
  questionCountSpan.textContent = `Question ${currentQuestion + 1} out of ${
    selectedQuestions.length
  }`;
}

function showQuestion(index) {
  quizForm.innerHTML = "";
  const questionIndex = selectedQuestions[index];
  const question = questions[questionIndex];
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question");

  const questionTitle = document.createElement("p");
  questionTitle.style.fontSize = "1rem";
  questionTitle.innerHTML = question.question;

  questionTitle.style.fontWeight = "500";
  questionTitle.style.fontSize = "1.2rem";

  questionDiv.appendChild(questionTitle);
  if (question.options.length === 1) {
    // Create an input field for the fill-in-the-blank question
    const fillInInput = document.createElement("input");
    fillInInput.type = "text";
    fillInInput.style.border = "none";
    fillInInput.style.borderBottom = "1px solid #430f58";
    fillInInput.style.outline = "none";
    fillInInput.style.fontSize = "1rem";
    fillInInput.name = "q" + (index + 1);
    fillInInput.value = userAnswers[questionIndex] || "";

    fillInInput.addEventListener("input", () => {
      console.log("input at fill in");
      userAnswers[questionIndex] = fillInInput.value.toLocaleLowerCase();
      saveProgressLocally();
    });

    questionDiv.appendChild(fillInInput);
  } else {
    question.options.forEach((option) => {
      const optionLabel = document.createElement("label");
      const optionInput = document.createElement("input");
      const optionHint = document.createElement("img");

      optionInput.type = "radio";
      optionInput.name = "q" + (index + 1);
      optionInput.value = option[0];

      optionHint.classList.add("hint");
      optionHint.style.display = "none";
      const correctEmoji =
        "https://fonts.gstatic.com/s/e/notoemoji/latest/1f601/512.webp";
      const incorrectEmoji =
        "https://fonts.gstatic.com/s/e/notoemoji/latest/1f9d0/512.webp";

      optionHint.src =
        optionInput.value === questions[questionIndex].answer
          ? correctEmoji
          : incorrectEmoji;
      optionHint.alt =
        optionInput.value === questions[questionIndex].answer
          ? "correct"
          : "incorrect";

      if (userAnswers[questionIndex] === option[0]) {
        optionInput.checked = true;
      }

      optionLabel.appendChild(optionInput);
      optionLabel.appendChild(document.createTextNode(option));

      hinting.addEventListener("click", () => {
        optionLabel.appendChild(optionHint);
      });

      removeHinting.addEventListener("click", () => {
        optionLabel.removeChild(optionHint);
      });

      optionLabel.addEventListener("mouseover", () => {
        optionHint.style.display = "inline-block";
      });

      optionLabel.addEventListener("mouseout", () => {
        optionHint.style.display = "none";
      });
      questionDiv.appendChild(optionLabel);
      optionLabel.addEventListener("click", () => {
        userAnswers[questionIndex] = option[0];
        disableResetAfterCheckboxPress();
        saveProgressLocally();
      });
      questionDiv.appendChild(document.createElement("br"));
    });
  }

  quizForm.appendChild(questionDiv);

  document.getElementById("backButton").disabled = index === 0;
  document.getElementById("nextButton").disabled =
    index === selectedQuestions.length - 1;
  updateQuestionCount();
}

function previousQuestion() {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
  saveProgressLocally();
}

function previousQuestionFromFeedBack() {
  hideFeedback();
  scoreContainer.style.display = "none";
  function start() {
    retake.style.display = "none";
    showQuestion(currentQuestion);
  }
  start();
  retake.style.display = "none";
  resultDiv.style.display = "none";
  resultDiv2.style.display = "none";
  userScore.style.display = "none";
}

function saveProgressLocally() {
  localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  localStorage.setItem("currentQuestion", currentQuestion);
  localStorage.setItem("selectedQuestions", JSON.stringify(selectedQuestions));
}

function saveAnswer() {
  const selectedOption = document.querySelector(
    'input[name="q' + (currentQuestion + 1) + '"]:checked'
  );
  if (selectedOption) {
    userAnswers[currentQuestion] = selectedOption.value;
  }
  saveProgressLocally();
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("previousUser", userName);
  saveProgressLocally();
  const lastUser = localStorage.getItem("authUser");
  localStorage.setItem(
    "authStatus",
    JSON.stringify({ username: lastUser, isAuthenticated: true })
  );
});

function checkAnswers() {
  saveAnswer();
  let score = 0;
  let answeredQuestions = 0;

  selectedQuestions.forEach((questionIndex) => {
    if (userAnswers[questionIndex] !== "") {
      answeredQuestions++;
      if (
        userAnswers[questionIndex] === questions[questionIndex].answer ||
        userAnswers[questionIndex]
          .toLowerCase()
          .includes(questions[questionIndex].answer.toLowerCase())
      ) {
        score++;
      }
    }
  });

  const percentage = (score / answeredQuestions) * 100;

  const capitalizedUsername = userName[0].toUpperCase() + userName.slice(1);

  //resultDiv.innerHTML = `<p>${capitalizedUsername}, you got ${score} out of ${answeredQuestions} correct! That's <span style="color: ${percentage >= 80 ? "green" : percentage <= 50 ? "yellow" : "red"};">${percentage.toFixed(2)}%</span></p>`;

  document.getElementById("quizContainer").style.display = "none";
  feedbackChoice.style.display = "contents";
}

function checkScores() {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];

  if (!scores || scores.length === 0) {
    alert("You must complete a quiz first to view scores");
    return;
  }
  scoreContainer.style.display = "flex";
  scores.sort((a, b) => b.score - a.score);
  let scoreList = document.getElementById("scoreShowContainer");
  scoreList.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // Create header row
  const headerRow = document.createElement("tr");
  const headers = ["Quiz", "Score"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  scores.forEach((score, index) => {
    const tr = document.createElement("tr");

    const rankCell = document.createElement("td");
    rankCell.textContent = index + 1;
    tr.appendChild(rankCell);

    const scoreCell = document.createElement("td");
    scoreCell.textContent = `${score.score.toFixed(0)}%`;
    tr.appendChild(scoreCell);

    tr.style.border = "1px solid black";
    tr.style.textAlign = "center";
    tr.style.padding = "0.7rem";
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  table.style.border = "1px solid white";
  table.style.borderRadius = "10px";
  table.style.textAlign = "center";
  table.style.margin = "auto";
  table.style.backgroundColor = "#430f58";
  table.style.padding = "0.7rem";
  table.style.color = "white";
  scoreList.style.overflow = "auto";
  table.style.marginTop = "1rem";
  scoreList.appendChild(table);
}

function showFeedback() {
  retake.style.display = "block";
  retake.style.position = "relative";
  retake.style.bottom = "0";
  userScore.style.display = "flex";
  resultDiv2.style.display = "block";
  resultDiv2.style.position = "relative";
  resultDiv2.style.top = "0";
  resultDiv.style.color = "green";
  feedbackChoice.style.display = "none";
  feedbackContainer.style.display = "block";
  feedbackContainer.style.overflow = "scroll";
  let score = 0;
  let answeredQuestions = 0;

  selectedQuestions.forEach((questionIndex) => {
    if (userAnswers[questionIndex] !== "") {
      answeredQuestions++;
      if (
        userAnswers[questionIndex] === questions[questionIndex].answer ||
        userAnswers[questionIndex]
          .toLowerCase()
          .includes(questions[questionIndex].answer.toLowerCase())
      ) {
        score++;
      }
    }
  });

  const percentage = (score / answeredQuestions) * 100 || 0;

  if (answeredQuestions === selectedQuestions.length) {
    saveScore(percentage);
  }

  const capitalizedUsername = userName[0].toUpperCase() + userName.slice(1);
  userScore.innerHTML = `<p>${capitalizedUsername}'s Score: <span style="color: ${
    percentage >= 80 ? "green" : percentage <= 50 ? "red" : "#bbdc2f"
  };">${percentage.toFixed(
    0
  )}%</span></p> <p>Done: ${answeredQuestions}</p> <p>Ans: ${score}/${
    selectedQuestions.length
  }</p>`;

  displayFeedback();
}

function showQA() {
  const username = document.getElementById("username").value;
  if (username.trim() === "") {
    alert("Please enter a username");
    return;
  }
  userName = username;
  retake.style.display = "block";
  retake.style.position = "relative";
  retake.style.bottom = "0";
  feedbackChoice.style.display = "none";
  feedbackContainer.style.display = "block";
  feedbackContainer.style.overflow = "scroll";
  function displayQA() {
    feedbackContainer.style.overflow = "scroll";
    feedbackContainer.innerHTML = "";

    questions.forEach((q, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");

      const questionTitle = document.createElement("p");
      questionTitle.innerHTML = index + 1 + ". " + q.question;
      questionDiv.appendChild(questionTitle);

      // Check if the question is a fill-in-the-blank type (only one option)
      if (q.options.length === 1) {
        const correctAnswer = q.answer;

        const correctAnswerParagraph = document.createElement("p");
        correctAnswerParagraph.innerHTML = `Answer: ${correctAnswer}`;
        correctAnswerParagraph.style.color = "green";
        correctAnswerParagraph.style.fontWeight = "bold";
        correctAnswerParagraph.style.marginTop = "0.5rem";
        questionDiv.appendChild(correctAnswerParagraph);
      } else {
        // Existing logic for multiple-choice questions
        q.options.forEach((option) => {
          const optionLabel = document.createElement("label");
          const optionInput = document.createElement("input");
          optionInput.type = "radio";
          optionInput.disabled = true;

          if (option[0] === q.answer) {
            optionInput.checked = true;
            optionLabel.style.color = "green";
            optionLabel.style.fontWeight = "bold";
          }

          optionLabel.appendChild(optionInput);
          optionLabel.appendChild(document.createTextNode(option));
          questionDiv.appendChild(optionLabel);
          questionDiv.appendChild(document.createElement("br"));
        });
      }

      feedbackContainer.appendChild(questionDiv);
    });

    document.getElementById("feedbackNextButton").disabled =
      currentQuestion === questions.length - 1;
  }

  document.getElementById("quizContainer").style.display = "none";
  document.getElementById("usernameDialog").style.display = "none";
  displayQA();
  currentQuestion = 0;
  document.getElementById("feedbackNextButton").style.display = "none";
  document.getElementById("retakeQuizButton").textContent = "Start Quiz";
}

function showQuestionSpanChange() {
  let score = 0;
  let answeredQuestions = 0;

  selectedQuestions.forEach((questionIndex) => {
    if (userAnswers[questionIndex] !== "") {
      answeredQuestions++;
      if (
        userAnswers[questionIndex] === questions[questionIndex].answer ||
        userAnswers[questionIndex]
          .toLowerCase()
          .includes(questions[questionIndex].answer.toLowerCase())
      ) {
        score++;
      }
    }
  });

  const percentage = (score / answeredQuestions) * 100 || 0;

  questionCountContainer.style.background = "#434e52";
  questionCountSpan.textContent = `Score: ${percentage.toFixed(0)}%`;
  questionCountSpan.style.color =
    percentage >= 80 ? "green" : percentage <= 50 ? "red" : "#bbdc2f";

  setTimeout(() => {
    updateQuestionCount();
  }, 1000);
}

function hideFeedback() {
  let score = 0;
  let answeredQuestions = 0;

  selectedQuestions.forEach((questionIndex) => {
    if (userAnswers[questionIndex] !== "") {
      answeredQuestions++;
      if (
        userAnswers[questionIndex] === questions[questionIndex].answer ||
        userAnswers[questionIndex]
          .toLowerCase()
          .includes(questions[questionIndex].answer.toLowerCase())
      ) {
        score++;
      }
    }
  });

  const percentage = (score / answeredQuestions) * 100 || 0;

  const capitalizedUsername = userName[0].toUpperCase() + userName.slice(1);

  //resultDiv.innerHTML = `<p>${capitalizedUsername}, you got ${score} out of ${answeredQuestions} correct! That's <span style="color: ${percentage >= 80 ? "green" : percentage <= 50 ? "yellow" : "red"};">${percentage.toFixed(2)}%</span>... ${selectedQuestions.length - currentQuestion - 1} remain</p>`;

  feedbackChoice.style.display = "none";
  feedbackContainer.style.display = "none";
  document.getElementById("quizContainer").style.display = "block";

  showQuestion(currentQuestion);
  showQuestionSpanChange();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "s" || event.key === "S") {
    showQuestionSpanChange();
  }
});

function nextQuestion() {
  saveAnswer();
  if (currentQuestion < selectedQuestions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
  saveProgressLocally();
}

function displayFeedback() {
  feedbackContainer.style.overflow = "scroll";
  feedbackContainer.innerHTML = "";

  let questionsCount = currentQuestion;
  selectedQuestions
    .slice(0, questionsCount + 1)
    .forEach((questionIndex, index) => {
      const q = questions[questionIndex];
      const questionDiv = document.createElement("div");
      questionDiv.classList.add("question");

      const questionTitle = document.createElement("p");
      questionTitle.innerHTML = index + 1 + ". " + q.question;
      questionDiv.appendChild(questionTitle);

      q.options.forEach((option) => {
        // Check if the question is a fill-in-the-blank type
        if (q.options.length === 1) {
          const userAnswer = userAnswers[questionIndex];
          const correctAnswer = q.answer.toLowerCase();

          const feedbackParagraph = document.createElement("p");
          feedbackParagraph.innerHTML =
            "Your Answer: " + (userAnswer || "No answer given");

          if (
            userAnswer.toLowerCase().includes(correctAnswer.toLowerCase()) &&
            userAnswer !== ""
          ) {
            feedbackParagraph.style.color = "green";
            feedbackParagraph.style.fontWeight = "bold";
            const correctAnswerParagraph = document.createElement("p");
            correctAnswerParagraph.innerHTML =
              "Correct Answer: " + correctAnswer;
            correctAnswerParagraph.style.color = "green";
            correctAnswerParagraph.style.fontWeight = "bold";
            questionDiv.appendChild(correctAnswerParagraph);
          } else {
            feedbackParagraph.style.color = "red";
            feedbackParagraph.style.fontWeight = "bold";

            const correctAnswerParagraph = document.createElement("p");
            correctAnswerParagraph.innerHTML =
              "Correct Answer: " + correctAnswer;
            correctAnswerParagraph.style.color = "green";
            correctAnswerParagraph.style.fontWeight = "bold";
            questionDiv.appendChild(correctAnswerParagraph);
          }

          questionDiv.appendChild(feedbackParagraph);
          feedbackContainer.appendChild(questionDiv);
        } else {
          const optionLabel = document.createElement("label");
          const optionInput = document.createElement("input");
          optionInput.type = "radio";
          optionInput.disabled = true;

          if (option[0] === q.answer) {
            optionInput.checked = true;
            optionLabel.style.color = "green";
            optionLabel.style.fontWeight = "bold";
          } else if (option[0] === userAnswers[questionIndex]) {
            optionInput.checked = true;
            optionLabel.style.color = "red";
            questionTitle.style.fontWeight = "bold";
          }

          optionLabel.appendChild(optionInput);
          optionLabel.appendChild(document.createTextNode(option));
          questionDiv.appendChild(optionLabel);
          questionDiv.appendChild(document.createElement("br"));
        }
        feedbackContainer.appendChild(questionDiv);
      });
    });

  document.getElementById("feedbackNextButton").disabled =
    currentQuestion === selectedQuestions.length - 1;
}

function nextFeedback() {
  if (currentQuestion < selectedQuestions.length - 1) {
    currentQuestion++;
    displayFeedback();
  }
}

function previousFeedback() {
  if (currentQuestion > 0) {
    currentQuestion--;
    displayFeedback();
  }
}

function resetQuiz() {
  const confirmRetake = confirm("Reset current Quiz?");
  if (confirmRetake) {
    currentQuestion = 0;
    userAnswers.fill("");
    document.getElementById("feedbackContainer").style.display = "none";
    retake.style.display = "none";
    resultDiv.style.display = "none";
    userScore.style.display = "none";
    resultDiv2.style.display = "none";
    scoreContainer.style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    showQuestion(currentQuestion);
  } else {
    return;
  }
}

function disableResetAfterCheckboxPress() {
  resetBtn.disabled = true;
  setTimeout(() => {
    resetBtn.disabled = false;
  }, 400);
}

function retakeQuiz() {
  const confirmRetake = confirm("Retake Quiz?");
  if (confirmRetake) {
    currentQuestion = 0;
    userAnswers.fill("");
    document.getElementById("feedbackContainer").style.display = "none";
    retake.style.display = "none";
    resultDiv.style.display = "none";
    userScore.style.display = "none";
    resultDiv2.style.display = "none";
    scoreContainer.style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    showQuestion(currentQuestion);
  } else {
    return;
  }
}

const radioButtons = document.querySelectorAll('input[name="quizType"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", () => {
    quizType = radioButton.value;
    lectureSelectionDiv.style.display =
      quizType === "custom" ? "block" : "none";
    updateQuiz();
  });
});

function showLectureSelection() {
  const confirmShow = confirm(
    "Do you want to manually select lectures to be quizzed on?"
  );
  if (confirmShow) {
    document.getElementById("lectureSelectionDialog").style.display = "flex";
    generateLectureSelection();
  } else {
    return;
  }
}

function generateLectureSelection() {
  const lectureCheckboxes = document.getElementById("lectureCheckboxes");
  lectureCheckboxes.innerHTML = "";

  lectureRanges.forEach((lectureRange, index) => {
    const label = document.createElement("label");
    label.innerHTML = `
                <input type="checkbox" name="lectureCheckbox" value="${
                  index + 1
                }"> ${lectureRange.name}
            `;
    lectureCheckboxes.appendChild(label);
  });
}

function startSelectedLectures() {
  const selectedLectureNumbers = Array.from(
    document.querySelectorAll('input[name="lectureCheckbox"]:checked')
  ).map((checkbox) => parseInt(checkbox.value));

  if (selectedLectureNumbers.length === 0) {
    alert("Please select at least one lecture.");
    return;
  }

  selectedQuestions = [];
  selectedLectureNumbers.forEach((lectureNumber) => {
    const lectureRange = getLectureRangeByNumber(lectureNumber);
    for (let i = lectureRange.start; i <= lectureRange.end; i++) {
      selectedQuestions.push(i);
    }
  });

  document.getElementById("lectureSelectionDialog").style.display = "none";
  currentQuestion = 0;

  //reset answers to prevent default filling for different lecture in range
  localStorage.setItem("userAnswers", userAnswers.fill(""));

  updateQuestionCount();
  saveProgressLocally();
  showQuestion(currentQuestion);
}
