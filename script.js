const h1 = document.querySelector("h1");
const decrementbtn = document.querySelector(".btn1");
const incrementbtn = document.querySelector(".btn2");
const increase = document.querySelector(".btn3");
const decrease = document.querySelector(".btn4");
const reset = document.querySelector(".btnReset");

incrementbtn.addEventListener("click", () => {
  h1.textContent = +h1.textContent + 1;
});
decrementbtn.addEventListener("click", () => {
  h1.textContent = +h1.textContent - 1;
});
increase.addEventListener("click", () => {
  h1.textContent = +h1.textContent + 7;
});

decrease.addEventListener("click", () => {
  h1.textContent = +h1.textContent - 5;
});

reset.addEventListener("click", () => {
  h1.textContent = 0;
});
