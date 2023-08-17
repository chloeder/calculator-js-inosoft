const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".display");
const output = display.getElementsByTagName("input")[0];
const i = display.querySelector("i");
console.log(i);

const toggleDarkMode = () => {
  if (calculator.classList.contains("calculator")) {
    calculator.classList.remove("calculator");
    calculator.classList.add("dark-mode");
  } else {
    calculator.classList.remove("dark-mode");
    calculator.classList.add("calculator");
  }

  if (calculator.classList.contains("dark-mode")) {
    i.removeAttribute("class");
    i.setAttribute("class", "bi bi-sun-fill");
  } else {
    i.removeAttribute("class");
    i.setAttribute("class", "bi bi-moon-fill");
  }
};

const clearAll = () => {
  output.value = "";
};

const backspace = () => {
  output.value = output.value.slice(0, -1);
};

const decimal = () => {
  output.value += ".";
};

const plusMinus = () => {
  output.value =
    output.value.charAt(0) === "-" ? output.value.slice(1) : `-${output.value}`;
};

const percent = () => {
  output.value /= 100;
};

const calculate = () => {
  output.value = eval(output.value);
};
