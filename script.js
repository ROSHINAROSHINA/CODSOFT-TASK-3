const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.getAttribute("data-value");
    handleInput(value);
  });
});

function handleInput(value) {
  if (value === "C") {
    display.value = "";
  } else if (value === "DEL") {
    display.value = display.value.slice(0, -1);
  } else if (value === "=") {
    try {
      display.value = eval(display.value) || "";
    } catch (e) {
      display.value = "Error";
      setTimeout(() => (display.value = ""), 1500);
    }
  } else {
    display.value += value;
  }
}

// Allow keyboard input
document.addEventListener("keydown", function (e) {
  const key = e.key;
  if (/\d|\+|\-|\*|\/|\./.test(key)) {
    display.value += key;
  } else if (key === "Enter") {
    handleInput("=");
  } else if (key === "Backspace") {
    handleInput("DEL");
  } else if (key.toLowerCase() === "c") {
    handleInput("C");
  }
});
