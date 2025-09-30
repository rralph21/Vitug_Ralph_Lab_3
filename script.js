// Variables
let lives = 3;
let position = 0;
const finish = 10;

const livesE1 = document.getElementById("lives");
const positionE1 = document.getElementById("position");
const rollBtn = document.getElementById("rollBtn");
const continueBtn = document.getElementById("continueBtn");
const message = document.getElementById("message");



// Q @ A portion
const questions = [
  {q: "What color is Mars known as?", options: ["Red planet", "Blue planer", "Planet of the Apes"], answer: "Red planet"},
  { q: "How many moons does Mars have?", options: ["1","2","3","4"], answer: "2" },
  { q: "Largest volcano on Mars?", options: ["Mauna Kea","Mount Everest","Olympus Mons","Vesuvius"], answer: "Olympus Mons" },
  { q: "What gas makes up most of Mars' atmosphere?", options: ["Oxygen","Carbon Dioxide","Nitrogen","Methane"], answer: "Carbon Dioxide" },
  { q: "Which rover landed in 2021?", options: ["Spirit","Curiosity","Opportunity","Perseverance"], answer: "Perseverance" }
]