alert("j");

const btns = document.querySelectorAll(".btn");
const screen = document.querySelectorAll(".screen");
const equalBtn = document.querySelector(".btn-equal");
const clearBtn = document.querySelector(".btn-clear");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let number = btns[i].getAttribute("data-num");
    screen.value += number;
  })
}

equalBtn.addEventListener("click", function () {
  if (screen.value === "") {
    alert("input is empty");
  } 
  else {
    let value = eval(screen.value);
    screen.value = value;
  }

  let value = eval(screen.value);
  screen.value = value;
})

clearBtn.addEventListener("click", function () {
  screen.value = "";
});
