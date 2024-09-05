/* Récupère les éléments du DOM */
let display = document.querySelector(".display");
let digits = document.querySelectorAll(".digits");
let operators = document.querySelectorAll(".operators");
let clean = document.querySelector(".delete");
let equal = document.querySelector(".equal");

/* Effacer display */
clean.addEventListener("click", displayClean);

let displayTotal = "";

let result = [];

/* Initialiser display */
function displayClean() {
  display.innerText = 0;
}

/* Définir le click sur l'élément */
function numberValue() {
  digits.forEach((digit) => {
    digit.addEventListener("click", (event) => {
      if (display.innerText === "0") {
        display.innerText = "";
      }
      let displayNumber = event.target.innerText;

      display.innerText += displayNumber;

      displayTotal += displayNumber;
    });
  });
}

/* Récupère le click sur l'opérateur */
function operatorValue() {
  let clickedOperator = null; // Variable pour stocker l'opérateur cliqué

  operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
      let displayOperator = event.target.innerText;

      // Enregistre l'opérateur cliqué
      clickedOperator = displayOperator;

      // Mise à jour de l'affichage
      if (display.innerText !== "0") {
        display.innerText += displayOperator;
      }
      displayTotal += displayOperator;

      // Retourner la valeur de l'opérateur cliqué
      console.log("Opérateur cliqué : " + clickedOperator);
    });
  });

  return clickedOperator; // Ce retour ne fonctionnera pas comme tu l'attends à cause de l'asynchronisme
}

function total() {
  equal.addEventListener("click", () => {
    console.log(display.innerText);
  });
}

/* Mise à jour du display */
numberValue();
operatorValue();
total();
