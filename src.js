let letters = document.querySelector(".letters");
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
    span.textContent = char;
    letters.appendChild(span);
    }
}
generateLetters(letters);
console.log(Math.floor(Math.random() * 4))