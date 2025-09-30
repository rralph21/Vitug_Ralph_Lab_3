// Variables
let lives = 3;
let position = 0;
const finish = 10;

const livesE1 = document.getElementById("lives");
const positionE1 = document.getElementById("position");
const rollBtn = document.getElementById("rollBtn");
const continueBtn = document.getElementById("continueBtn");
const message = document.getElementById("message");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question");
const choicesDiv = document.getElementById("choices");
const trackEl = document.getElementById("track");



// Q @ A portion
// arrays consisting questions and answers
const questions = [
  {q: "What color is Mars known as?", options: ["Red planet", "Blue planer", "Planet of the Apes"], answer: "Red planet"},
  { q: "How many moons does Mars have?", options: ["1","2","3","4"], answer: "2" },
  { q: "Largest volcano on Mars?", options: ["Mauna Kea","Mount Everest","Olympus Mons","Vesuvius"], answer: "Olympus Mons" },
  { q: "What gas makes up most of Mars' atmosphere?", options: ["Oxygen","Carbon Dioxide","Nitrogen","Methane"], answer: "Carbon Dioxide" },
  { q: "Which rover landed in 2021?", options: ["Spirit","Curiosity","Opportunity","Perseverance"], answer: "Perseverance" }
]

// for loop
for (let i = 0; i <= finish; i++) {
  const cell = document.createElement("div"); // creates new HTML elements
  cell.classList.add("step");
  trackEl.appendChild(cell); // adds to created element parent
}


// function for player position
function updatePlayer() {
  const cells = document.querySelectorAll(".step");
  cells.forEach(c => c.classList.remove("player")); // eliminates highlights from cells
  cells[position].classList.add("player"); // states or highlight the players track position
  positionE1.textContent = position; // updates the position
}

updatePlayer();

// event listener for rolling dice
rollBtn.addEventListener("click", () => {
  const dice = Math.floor(Math.random() * 6) +1; // math calculation for rolling the dice
  message.textContent = `You rolled a ${dice}! Answer to move forward ${dice} steps!`; // updates message with text
  showQuestion(dice);
});

// function for showing questions
function showQuestion(steps) {
  rollBtn.classList.add("hidden");
  questionContainer.classList.remove("hidden");
  continueBtn.classList.add("hidden");

  const q = questions[Math.floor(Math.random() * questions.length)]; //returns random float that rounds it down to a whole integer
  questionText.textContent = q.q;
  choicesDiv.innerHTML = "";

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => checkAnswer(opt, q.answer, steps));
    choicesDiv.appendChild(btn);
  });
}

// answer validation
function checkAnswer(selected, correct, steps) {
  questionContainer.classList.add("hidden");

  if (selected === correct) {
    position += steps;
    if (position > finish) position = finish; // 
    message.textContent = ` Correct! You moved ${steps} steps forward.`;
  } else {
    lives--;
    message.textContent = ` Wrong! You lost 1 life. Correct answer: ${correct}.`;
  }

  livesE1.textContent = lives; // update lives and position
  updatePlayer();

  // conditions with corresponding texts/strings
  if (lives <= 0) {
    message.textContent += " Game Over!";
    rollBtn.disabled = true;
    continueBtn.classList.add("hidden");
  } else if (position >= finish) {
    message.textContent += " You reached the Mars Base!";
    rollBtn.disabled = true;
    continueBtn.classList.add("hidden"); //hides continue button
  } else {
    continueBtn.classList.remove("hidden"); //shows continue button until
  }
}

//event listener for button
continueBtn.addEventListener("click", () => {
  message.textContent = "Roll the dice for your next move!";
  rollBtn.classList.remove("hidden");  //shoes roll button
  continueBtn.classList.add("hidden"); //hides continue button 
});