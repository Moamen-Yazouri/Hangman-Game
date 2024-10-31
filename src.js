let letters = document.querySelector(".letters");
// Generate The Letters
function generateLetters () {
    for(let i = 65; i < 91; i++) {
        let char = String.fromCharCode(i);  
        let span = document.createElement("span");
        span.style.cssText = `
        width: 55px;
        height: 55px;
        display: inline-block;
        background-color: #009688;
        color: #FFF;
        font-size: 24px;
        margin-right: 10px;
        line-height: 55px;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 10px;
    `;
    span.className = "letter-box";
    span.textContent = char;
    letters.appendChild(span);
    }
}
generateLetters(letters);
// Choosing a random word from a random category 
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
  }

//   Get All Categories as an array.
  let allKeys = Object.keys(words);

// Get a random Key Of a category
  let randomCatKey = Math.floor(Math.random() * allKeys.length);

// Get a random category
let randomCat = allKeys[randomCatKey];

// Adding the Category to its place in the page
let wordSpan = document.querySelector(".group")
wordSpan.style.cssText = "color: red; font-weight: bold;"
wordSpan.innerHTML = randomCat;

// Get a All keys Of the words inside the category 
let randomCatWords = words[randomCat];

// Get the random key of the word
let randomCatWordsKeys = Math.floor(Math.random() * randomCatWords.length);

// Get the Chosen Word
let chosenWord = randomCatWords[randomCatWordsKeys];

let arrayOfChars = Array.from(chosenWord);
let lettersContainer = document.querySelector(".letter-guess");
arrayOfChars.forEach((char) => {
  let span = document.createElement("span");

  if (char === " ") {
    span.className = "space";
  }

  lettersContainer.appendChild(span);
});

document.addEventListener("click", (e) => {

  if(e.target.className === "letter-box") {

    e.target.classList.add("clicked");

  }
  let clickedLetter = e.target.innerHTML.toLowerCase();

  arrayOfChars.forEach((letter, index) => {
    if(clickedLetter == letter){

      lettersContainer.children[index].innerHTML = letter;

    }
    else {
      
    }
  })

});




  