let selectedClass = null;
let selectedSubject = null;
let currentQuestions = [];
let userAnswers = [];
let timerInterval = null;
let timeRemaining = 0;
let candidateName = "";
let candidateRoll = "";

// Validate Candidate Name & 6-Digit FBISE Roll Number
function validateCandidateForm() {
  const nameInput = document.getElementById("student-name");
  const rollInput = document.getElementById("roll-number");
  const nameError = document.getElementById("name-error");
  const rollError = document.getElementById("roll-error");

  if (!nameInput || !rollInput) return true;

  let isValid = true;
  if (nameError) nameError.textContent = "";
  if (rollError) rollError.textContent = "";
  nameInput.classList.remove("input-invalid");
  rollInput.classList.remove("input-invalid");

  const trimmedName = nameInput.value.trim();
  const trimmedRoll = rollInput.value.trim();

  if (trimmedName.length < 3) {
    if (nameError) nameError.textContent = "Please enter your full name (at least 3 characters) before submitting.";
    nameInput.classList.add("input-invalid");
    isValid = false;
  }

  if (!/^[0-9]{6}$/.test(trimmedRoll)) {
    if (rollError) rollError.textContent = "Please enter a valid 6-digit FBISE Roll Number before submitting.";
    rollInput.classList.add("input-invalid");
    isValid = false;
  }

  if (isValid) {
    candidateName = trimmedName;
    candidateRoll = trimmedRoll;
  }

  return isValid;
}

// 1. Select Class & Display FBISE Subjects Below
function selectClass(className) {
  selectedClass = className;

  const buttons = document.querySelectorAll('.class-btn');
  buttons.forEach(btn => {
    btn.classList.remove('selected');
    if (btn.textContent.includes(className)) {
      btn.classList.add('selected');
    }
  });

  const subjectSection = document.getElementById('subject-section');
  const subjectGrid = document.getElementById('subject-grid');
  subjectGrid.innerHTML = '';

  if (typeof quizData !== 'undefined' && quizData[className]) {
    const subjects = Object.keys(quizData[className]);
    subjects.forEach(subj => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'subject-btn';
      btn.textContent = subj;
      btn.onclick = () => startQuiz(subj);
      subjectGrid.appendChild(btn);
    });
    subjectSection.style.display = 'block';
  }
}

// 2. Start Board Exam Immediately & Render OMR Table
function startQuiz(subjectName) {
  selectedSubject = subjectName;
  const examData = quizData[selectedClass][selectedSubject];

  currentQuestions = examData.questions;
  timeRemaining = examData.duration;
  userAnswers = new Array(currentQuestions.length).fill(null);

  document.getElementById('selection-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  document.getElementById('quiz-title').textContent = `${selectedClass} - ${selectedSubject}`;
  window.scrollTo(0, 0);

  renderFBISETable();
  startTimer();
}

// 3. Render Table Matching FBISE Sheet Layout
function renderFBISETable() {
  const omrBody = document.getElementById('omr-body');
  omrBody.innerHTML = '';

  currentQuestions.forEach((q, qIdx) => {
    const tr = document.createElement('tr');
    tr.id = `row-${qIdx}`;

    tr.innerHTML = `
      <td class="sno-cell">${qIdx + 1}.</td>
      <td class="question-cell">${q.question}</td>
      <td>${q.options[0]}</td>
      <td>${q.options[1]}</td>
      <td>${q.options[2]}</td>
      <td>${q.options[3]}</td>
      <td class="bubble-cell"><button type="button" class="board-bubble" aria-label="Question ${qIdx + 1} Option A" onclick="fillBubble(${qIdx}, 0)"></button></td>
      <td class="bubble-cell"><button type="button" class="board-bubble" aria-label="Question ${qIdx + 1} Option B" onclick="fillBubble(${qIdx}, 1)"></button></td>
      <td class="bubble-cell"><button type="button" class="board-bubble" aria-label="Question ${qIdx + 1} Option C" onclick="fillBubble(${qIdx}, 2)"></button></td>
      <td class="bubble-cell"><button type="button" class="board-bubble" aria-label="Question ${qIdx + 1} Option D" onclick="fillBubble(${qIdx}, 3)"></button></td>
    `;

    omrBody.appendChild(tr);
  });
}

// 4. Fill Bubble & Lock Answer for that Question
function fillBubble(qIdx, optIdx) {
  if (userAnswers[qIdx] !== null) return;

  userAnswers[qIdx] = optIdx;

  const row = document.getElementById(`row-${qIdx}`);
  const bubbles = row.querySelectorAll('.board-bubble');

  bubbles.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === optIdx) {
      btn.classList.add('filled');
    }
  });
}

// 5. Section-A Board Timer (Auto-submits even if Name/Roll No are empty)
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      const timeOutMsg = document.getElementById('time-out-msg');
      if (timeOutMsg) timeOutMsg.style.display = 'block';
      submitQuiz(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(timeRemaining / 60);
  const secs = timeRemaining % 60;
  document.getElementById('time-display').textContent =
    `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// 6. Submit & Display Detailed Review at the End
function submitQuiz(isAutoSubmit = false) {
  // Require valid Name & Roll Number only when student submits manually
  if (!isAutoSubmit) {
    if (!validateCandidateForm()) {
      const formEl = document.getElementById("candidate-form");
      if (formEl) formEl.scrollIntoView({ behavior: "smooth" });
      return;
    }
  } else {
    const nameInput = document.getElementById("student-name");
    const rollInput = document.getElementById("roll-number");
    const nameVal = nameInput ? nameInput.value.trim() : "";
    const rollVal = rollInput ? rollInput.value.trim() : "";
    candidateName = nameVal.length >= 3 ? nameVal : "Not Provided";
    candidateRoll = /^[0-9]{6}$/.test(rollVal) ? rollVal : "Not Provided";
  }

  clearInterval(timerInterval);

  let score = 0;
  const reviewBox = document.getElementById('answers-review');
  reviewBox.innerHTML = '';

  currentQuestions.forEach((q, idx) => {
    const userAns = userAnswers[idx];
    const isCorrect = userAns === q.answer;
    if (isCorrect) score++;

    const div = document.createElement('div');
    div.className = 'review-item';
    div.innerHTML = `
      <p><strong>Q${idx + 1}: ${q.question}</strong></p>
      <p>Your Answer: ${userAns !== null ? q.options[userAns] : '<em>Blank (Unfilled)</em>'} 
         ${isCorrect ? '✅' : '❌'}</p>
      <p style="color: #16a34a; font-weight: bold;">Correct Answer: ${q.options[q.answer]}</p>
      ${q.explanation ? `<p style="font-size: 11px; color: #475569; margin-top: 3px;"><em>Explanation: ${q.explanation}</em></p>` : ''}
    `;
    reviewBox.appendChild(div);
  });

  const timeoutBanner = document.getElementById('result-timeout-banner');
  if (timeoutBanner) {
    timeoutBanner.style.display = isAutoSubmit ? 'block' : 'none';
  }

  const resultInfo = document.getElementById('result-candidate-info');
  if (resultInfo) {
    resultInfo.textContent =
      `Candidate: ${candidateName} | Roll No: ${candidateRoll} | Exam: ${selectedClass} - ${selectedSubject}`;
  }

  document.getElementById('final-score').textContent = score;
  document.getElementById('total-score').textContent = currentQuestions.length;

  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';
  window.scrollTo(0, 0);
}

// 7. Restart App Completely
function restartApp() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  selectedClass = null;
  selectedSubject = null;
  currentQuestions = [];
  userAnswers = [];
  timeRemaining = 0;
  candidateName = "";
  candidateRoll = "";

  const nameInput = document.getElementById("student-name");
  const rollInput = document.getElementById("roll-number");
  const nameError = document.getElementById("name-error");
  const rollError = document.getElementById("roll-error");
  if (nameError) nameError.textContent = "";
  if (rollError) rollError.textContent = "";
  if (nameInput) {
    nameInput.value = "";
    nameInput.classList.remove("input-invalid");
  }
  if (rollInput) {
    rollInput.value = "";
    rollInput.classList.remove("input-invalid");
  }

  const resultScreen = document.getElementById('result-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const selectionScreen = document.getElementById('selection-screen');
  const subjectSection = document.getElementById('subject-section');
  const timeOutMsg = document.getElementById('time-out-msg');
  const timeoutBanner = document.getElementById('result-timeout-banner');

  if (resultScreen) resultScreen.style.display = 'none';
  if (quizScreen) quizScreen.style.display = 'none';
  if (subjectSection) subjectSection.style.display = 'none';
  if (timeOutMsg) timeOutMsg.style.display = 'none';
  if (timeoutBanner) timeoutBanner.style.display = 'none';
  if (selectionScreen) selectionScreen.style.display = 'block';

  const omrBody = document.getElementById('omr-body');
  if (omrBody) omrBody.innerHTML = '';

  const reviewBox = document.getElementById('answers-review');
  if (reviewBox) reviewBox.innerHTML = '';

  document.querySelectorAll('.class-btn').forEach(btn => {
    btn.classList.remove('selected');
  });

  window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
  const candidateForm = document.getElementById('candidate-form');
  if (candidateForm) {
    candidateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitQuiz(false);
    });
  }

  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', restartApp);
  }
});