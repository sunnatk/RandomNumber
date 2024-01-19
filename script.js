let button = document.querySelector(".button");
let numberInput = document.querySelector(".numberInput");
let randomNumber = Math.ceil(Math.random() * 100);
let answerDash = document.querySelector(".answerDash");
let dnone = document.querySelector(".dnone");
let counte = document.querySelector(".counter");
let answer = document.querySelector(".answer");
let btn = document.querySelector(".btn");
let buttons = document.querySelector(".buttons");

let attemps = 0; //подсчет введенных попыток
let game = 0; // количество сыгранных игр
console.log(randomNumber);
function getAnswer() {
  attemps++;
  let inputNumber = parseInt(numberInput.value); //возвращает целое число
  // if (inputNumber > 100) { // выведет ошибку в случае если пользователь введет число больше 100
  //   dnone.textContent = 'Введите число меньше 100'
  // }// нужно добавить элемент по которому монж вернуться назад

  if (inputNumber < randomNumber) {
    answerDash.textContent = "Больше";
  } else if (inputNumber > randomNumber) {
    answerDash.textContent = "Меньше";
  } else if (inputNumber == randomNumber) {
    game++; //добавляет 1 к элементу 'сыграно игр'
    counte.textContent = `Сыграно игр: ${game}`;

    if (inputNumber == randomNumber) {
      //если инпут равен радомному числу
      // то выведет сообщение угадал за 'число' попыток
      // answerDash.classList.remove('answerDash')
      answerDash.textContent = "Угадал за " + attemps + " ход";
      buttons.classList.add("dnone");
      btn.classList.remove("dnone");
    }
  }
  numberInput.value = "";
}
numberInput.addEventListener("keypress", function (e) {
  let key = e.key || String.fromCharCode(e.Code);
  if (key === "Enter") {
    button.click();
  }
});

function newGame() {
  randomNumber = Math.ceil(Math.random() * 100);
  buttons.classList.remove("dnone");
  btn.classList.add("dnone");
  console.log(randomNumber);
  attemps = 0;
  answerDash.textContent = "-";
}
btn.addEventListener("click", newGame);
button.addEventListener("click", getAnswer);

// function gamerestart() {
//   if (inputNumber == randomNumber) {
//     // answer.classList.add('.btn')
//     btn.classList.remove('dnone')
//   }
// }
// button.addEventListener('click', gamerestart);
