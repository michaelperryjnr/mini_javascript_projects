const countBtn = document.getElementById("count-btn");
const text = document.getElementById("text-input");
const letterCount = document.getElementById("stat-letter");
const wordCount = document.getElementById("stat-words");
const punctuationCount = document.getElementById("stat-punctuation");

let letter = [];
let words = [];
let punctuationsArray = [];

letterCount.innerHTML = letter.length <= 0 ? 0 : letter.length;

const punctuations = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;

function count() {
let userText = text.value;
letter = userText.split("").filter(char => !punctuations.test(char) && char !== " " && char !== "\n");
words = userText.split(" ").filter(word => word !== "");
punctuationsArray = userText.split("").filter(char => punctuations.test(char));
}

const countStats = () => {
    letter = [];
    words = [];
    punctuationsArray = [];
    count();
    letterCount.innerHTML = letter.length;
    wordCount.innerHTML = words.length;
    punctuationCount.innerHTML = punctuationsArray.length;
  
};

const intervalId = setInterval(countStats, 1000)

text.addEventListener('input', countStats);

countBtn.addEventListener('click', countStats);