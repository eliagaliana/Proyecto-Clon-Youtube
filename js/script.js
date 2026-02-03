let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");
let main = document.querySelector(".main-content");
let subscribeBtn = document.querySelector(".subscribe-btn");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("small-sidebar");
  main.classList.toggle("main-largo");
});

subscribeBtn.addEventListener("click", () => {
  if (subscribeBtn.innerText === "Suscribirse") {
    subscribeBtn.innerHTML = "Suscrito";
    subscribeBtn.classList.add("suscrito");
  } else {
    subscribeBtn.innerHTML = "Suscribirse";
    subscribeBtn.classList.remove("suscrito");
  }
});
