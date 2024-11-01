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

let arrayOfChars = Array.from(chosenWord.toLowerCase());
let lettersContainer = document.querySelector(".letter-guess");
// Get The draw parts.
let drawContainer = document.querySelector(".hang-draw");
let draw = document.querySelector(".draw");
let stand = document.querySelector(".stand");
let hang = document.querySelector(".hang");
let rope = document.querySelector(".rope");
let man = document.querySelector(".man");
let drawArray = [draw, stand, hang, rope, man];
let counter = 0;
let successCounter = 0;

if (chosenWord.includes(" ")) {
  successCounter++;
}

arrayOfChars.forEach((char) => {
  let span = document.createElement("span");

  if (char === " ") {
    span.className = "space";
  }

  lettersContainer.appendChild(span);
});

document.addEventListener("click", (e) => {
  let attempt = false;

  if(e.target.className === "letter-box") {

    e.target.classList.add("clicked");

  }
  let clickedLetter = e.target.innerHTML.toLowerCase();

  arrayOfChars.forEach((letter, index) => {

    if(clickedLetter == letter){
      attempt = true;
      successCounter++;
      if(index === 0 && randomCat !== "programming") {
        lettersContainer.children[index].innerHTML = letter.toUpperCase();
      }

      else {
        lettersContainer.children[index].innerHTML = letter;
      }
    }

  });

  if(attempt == false && counter < 5) {

    if(e.target.classList.contains("clicked")) {

      drawArray[counter++].style.display = "block";
     
    }
    
  }

  if(counter == 5) {
    setTimeout(() => {
      letters.classList.add("finished");
      let finish = document.createElement("div");
      finish.textContent = `Failed, The word is: ${chosenWord}`;
      finish.style.cssText = 
      `position: fixed;
        background-color: #009688;
        padding: 100px 20px;
        width: 80%;
        top: 10%;
        left: 10%;
        text-align: center;
        font-size: 40px;
        border: 1px solid #CCC;
        color: #FFF;
      `;
      let replay = document.createElement("button");
      replay.textContent = "Play-Again";
      replay.style.cssText = 
      `
      padding: 10px 20px;
      background-color: brown;
      display: block;
      margin: 20px auto 0px;
      color: black;
      border: none;
      border-radius: 5px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
     `;
      // Add hover effect on mouseover
    replay.addEventListener('mouseover', function() {
      replay.style.backgroundColor = '#D2B48C';
      replay.style.transform = 'scale(1.05)';
    });

    // Remove hover effect on mouseout
    replay.addEventListener('mouseout', function() {
      replay.style.backgroundColor = `brown`;
      replay.style.transform = 'scale(1)';
    });

    // Repeat the game on click
    replay.addEventListener("click", () => {
      window.location.reload(true);
    });

      finish.appendChild(replay)
      document.body.appendChild(finish);
    
    }, 500)
  }
  if(successCounter === chosenWord.length) {

    window.location.reload(true);
    
  };
  console.log(successCounter);
  console.log(chosenWord.length);
});




  