const h1 = document.querySelector("h1");
const decrementbtn = document.querySelector(".btn1");
const incrementbtn = document.querySelector(".btn2");
const increase = document.querySelector(".btn3");
const decrease = document.querySelector(".btn4");
const reset = document.querySelector(".btnReset");
const toggle = document.querySelector(".light");
const body = document.querySelector("body");
const sunMo0nBg = document.querySelector(".light-dark");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("fa-moon");
  if (toggle.classList.toggle("light")) {
    sunMo0nBg.style.background = "img/sun-blog.webp";
    body.style.background = "#fff";
    body.style.transition = "2s";
  } else {
    sunMo0nBg.style.background = "img/moon2.jpg";
    body.style.background = "#000";
    body.style.transition = "2s";
  }
});

const foo = (value) => {
  h1.textContent = +h1.textContent + value;
};

incrementbtn.addEventListener("click", () => foo(1));
decrementbtn.addEventListener("click", () => foo(-1));
increase.addEventListener("click", () => foo(7));
decrease.addEventListener("click", () => foo(-5));
reset.addEventListener("click", () => (h1.textContent = 0));

// incrementbtn.addEventListener("click", () => {
//   h1.textContent = +h1.textContent + 1;
// });
// decrementbtn.addEventListener("click", () => {
//   h1.textContent = +h1.textContent - 1;
// });
// increase.addEventListener("click", () => {
//   h1.textContent = +h1.textContent + 7;
// });

// decrease.addEventListener("click", () => {
//   h1.textContent = +h1.textContent - 5;
// });

// reset.addEventListener("click", () => {
//   h1.textContent = 0;
// });
