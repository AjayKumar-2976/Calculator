let display = document.getElementById("display");

function append(char) {
  if (display.innerText === "0") display.innerText = "";
  display.innerText += char;
}

function clearAll() {
  display.innerText = "0";
}

function clearLast() {
  if (display.innerText.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    let expression = display.innerText.replace(/%/g, "/100");
    let result = eval(expression);
    display.innerText = result;
  } catch (err) {
    display.innerText = "Error";
  }
}
