const countBtn = document.getElementById("count-btn");
const text = document.getElementById("text-input");
const letterCunt = document.getElementById("stat-letter");

let words = [];

letterCunt.innerHTML = words.length <= 0 ? 0 : words.length - 1;

function count (){
 let userText = JSON.stringify(text.value);
    for(let i = 0; i <= userText.length; i++){
        if(userText[i] === '"' || undefined || null){
            continue;
        }
        words.push(userText[i]);
    }
  return words;
};

const countWords = async () => {
  const isNotNull = await text.value;
  const isTyPing = text.value != "" || " " || null ? true : false;
  if (isTyPing === true) {
    words = [];
    count();
    letterCunt.innerHTML = words.length <= 0 ? 0 : words.length - 1 ;
  } else {
    console.log("Start typing to count words");
  }
};

// setInterval(countWords, 1000)

text.addEventListener('input', countWords);

countBtn.addEventListener('click', countWords);