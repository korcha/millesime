const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const show = burger.querySelector(".show");
const hide = burger.querySelector(".hide");

const toggleClass = function() {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("menu--active");
  document.body.classList.toggle("body--menu");
};

show.onclick = toggleClass;
hide.onclick = toggleClass;
