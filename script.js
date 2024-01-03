hamBurger = document.getElementById("hamBurger");
menu = document.getElementById("menu");

console.log(menu.classList.contains("hidden"));

hamBurger.addEventListener("click", respon);

function respon() {
  if (menu.classList.contains("hidden")) {
    setInterval(menu.classList.remove("hidden"), 10000);
  } else {
    setInterval(menu.classList.add("hidden"), 10000);
  }
}
