/* Récupère les éléments du DOM */
let display = document.querySelector(".display");
let digits = document.querySelectorAll(".digits");
let operators = document.querySelectorAll(".operators");
let clean = document.querySelector(".delete");
let equal = document.querySelector(".equal");
let zero = document.getElementById("0");
let decimal = document.getElementById(".");

/* Effacer display */
clean.addEventListener("click", displayClean);

let result = [];

/* Initialiser display */
function displayClean() {
  display.innerText = 0;
}

/* Gestion des chiffres et des opérateurs */
function calculate() {
  digits.forEach((digit) => {
    digit.addEventListener("click", (event) => {
      if (display.innerText === "0") {
        display.innerText = "";
      }
      let displayNumber = event.target.innerText;
      result.push(displayNumber);
      display.innerText += displayNumber;
    });
  });

  // Gérer les clics sur les opérateurs
  operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
      let displayOperator = event.target.innerText;
      if (display.innerText !== "0") {
        if (
          result[result.length - 1] !== "+" &&
          result[result.length - 1] !== "-" &&
          result[result.length - 1] !== "*" &&
          result[result.length - 1] !== "/"
        ) {
          result.push(displayOperator);
          display.innerText += displayOperator;
        }
      }
    });
  });

  zero.addEventListener("click", () => {
    if (result[result.length - 1] === "/") {
      display.innerText = "Erreur";
      result = [];
    } else {
      display.innerText += "0";
      result.push("0");
    }
  });

  decimal.addEventListener("click", () => {
    if (!display.innerText.includes(".")) {
      display.innerText += ".";
      result.push(".");
    }
  });
}

function total() {
  equal.addEventListener("click", () => {
    let equalValue = eval(display.innerText);
    display.innerText = equalValue;
  });
}

/* Mise à jour du display */
calculate();
total();
