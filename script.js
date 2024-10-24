/* Récupère les éléments du DOM */
let display = document.querySelector(".display");
let digits = document.querySelectorAll(".digits");
let operators = document.querySelectorAll(".operators");
let clean = document.querySelector(".delete");
let equal = document.getElementById("equal");
let zero = document.getElementById("digit-0");
let decimal = document.getElementById("digit-.");
let correction = document.getElementById("correction");

let result = [];

/* Initialiser display */
function displayClean() {
  display.innerText = 0;
  result = [];
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
      if (display.innerText !== "") {
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

/* Calculer le total */
function total() {
  equal.addEventListener("click", () => {
    let equalValue = eval(display.innerText);
    display.innerText = equalValue;
  });
}

function deleteLast() {
  correction.addEventListener("click", () => {
    if (display.innerText !== "0") {
      result.pop();
      display.innerText = result.join("");
      if (result.length !== 1) {
        display.innerText = "0";
      }
    }
  });
}

/* Effacer display */
clean.addEventListener("click", displayClean);

/* Mise à jour du display */
calculate();
deleteLast();
total();
