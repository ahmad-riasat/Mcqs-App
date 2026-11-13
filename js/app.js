let selectedClass = null;
let selectedSubject = null;
let currentQuestions = [];
let userAnswers = [];
let timerInterval = null;
let timeRemaining = 0;

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

  if (quizData[className]) {
    const subjects = Object.keys(quizData[className]);
    subjects.forEach(subj => {
      const btn = document.createElement('button');
      btn.className = 'subject-btn';
      btn.textContent = subj;
      btn.onclick = () => startQuiz(subj);
      subjectGrid.appendChild(btn);
    });
    subjectSection.style.display = 'block';
  }
}

// 2. Start Board Exam & Render OMR Table
function startQuiz(subjectName) {
  selectedSubject = subjectName;
  const examData = quizData[selectedClass][selectedSubject];

  currentQuestions = examData.questions;
  timeRemaining = examData.duration;
  userAnswers = new Array(currentQuestions.length).fill(null);

  document.getElementById('selection-screen').style.display = 'none';
  document.getElementById('quiz-screen').style.display = 'block';
  document.getElementById('quiz-title').textContent = `${selectedClass} - ${selectedSubject}`;

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
      <td class="bubble-cell"><button class="board-bubble" onclick="fillBubble(${qIdx}, 0)"></button></td>
      <td class="bubble-cell"><button class="board-bubble" onclick="fillBubble(${qIdx}, 1)"></button></td>
      <td class="bubble-cell"><button class="board-bubble" onclick="fillBubble(${qIdx}, 2)"></button></td>
      <td class="bubble-cell"><button class="board-bubble" onclick="fillBubble(${qIdx}, 3)"></button></td>
    `;

    omrBody.appendChild(tr);
  });
}

// 4. Fill Bubble & Lock Answer for that Question
function fillBubble(qIdx, optIdx) {
  if (userAnswers[qIdx] !== null) return; // Prevent changing answer once marked

  userAnswers[qIdx] = optIdx;

  const row = document.getElementById(`row-${qIdx}`);
  const bubbles = row.querySelectorAll('.board-bubble');

  bubbles.forEach((btn, idx) => {
    btn.disabled = true; // Lock all 4 bubbles in this row
    if (idx === optIdx) {
      btn.classList.add('filled'); // Fill selected bubble with dark ink
    }
  });
}

// 5. Section-A Board Timer
function startTimer() {
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerDisplay();

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      document.getElementById('time-out-msg').style.display = 'block';
      submitQuiz();
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
function submitQuiz() {
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
      ${q.explanation ? `<p style="font-size: 13px; color: #475569; margin-top: 4px;"><em>Explanation: ${q.explanation}</em></p>` : ''}
    `;
    reviewBox.appendChild(div);
  });

  document.getElementById('final-score').textContent = score;
  document.getElementById('total-score').textContent = currentQuestions.length;

  document.getElementById('quiz-screen').style.display = 'none';
  document.getElementById('result-screen').style.display = 'block';
  window.scrollTo(0, 0);
}

// 7. Restart App Completely
function restartApp() {
  // 1. Stop the timer if running
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  // 2. Reset variables
  selectedClass = null;
  selectedSubject = null;
  currentQuestions = [];
  userAnswers = [];
  timeRemaining = 0;

  // 3. Hide Result & Quiz screens, show Select Class screen
  const resultScreen = document.getElementById('result-screen');
  const quizScreen = document.getElementById('quiz-screen');
  const selectionScreen = document.getElementById('selection-screen');
  const subjectSection = document.getElementById('subject-section');
  const timeOutMsg = document.getElementById('time-out-msg');

  if (resultScreen) resultScreen.style.display = 'none';
  if (quizScreen) quizScreen.style.display = 'none';
  if (subjectSection) subjectSection.style.display = 'none';
  if (timeOutMsg) timeOutMsg.style.display = 'none';
  if (selectionScreen) selectionScreen.style.display = 'block';

  // 4. Clear old questions and review data
  const omrBody = document.getElementById('omr-body');
  if (omrBody) omrBody.innerHTML = '';

  const reviewBox = document.getElementById('answers-review');
  if (reviewBox) reviewBox.innerHTML = '';

  // 5. Unselect any previously dark-highlighted class button
  document.querySelectorAll('.class-btn').forEach(btn => {
    btn.classList.remove('selected');
  });

  // 6. Scroll back to top
  window.scrollTo(0, 0);
}

// Also attach via event listener in case onclick was removed in HTML
document.addEventListener('DOMContentLoaded', () => {
  const restartBtn = document.getElementById('restart-btn');
  if (restartBtn) {
    restartBtn.addEventListener('click', restartApp);
  }
});