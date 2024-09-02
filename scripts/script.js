/* Récupère les éléments du DOM */
const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digits");
const operators = document.querySelectorAll(".operators");

console.log(display);
console.log("digits", digits);
console.log("operators", operators);

let numberValue = [];

/* Récupère la valeur du bouton au click */
function value() {
  digits.forEach((number) => {
    number.addEventListener("click", () => {
      if (display.innerText == 0) {
        display.innerText = number.innerText;
      } else {
        display.innerText += number.innerText;
      }
      numberValue.push(display.innerText);
    });
  });
}

/* Choix de l'opérateur de calcul */
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    console.log(operator.innerText);
  });
});

value();
console.log(numberValue);
