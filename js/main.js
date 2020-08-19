// barra de navegacion

const navButton = document.querySelector(".nav-btn");
const navMenu = document.querySelector(".nav-links");
const header = document.querySelector("header");
const tituloPagina = document.querySelector("#titulo-pagina");

navButton.addEventListener("click", () => {
  navButton.classList.toggle("menuAbierto");
  navMenu.classList.toggle("menuAbierto");
  if (navMenu.classList.contains("menuAbierto")) {
    header.style.background = " rgba(255,255,255, .9)";
    header.style.height = "5rem";
    tituloPagina.style.color = "#000";
  }
  if (!navButton.classList.contains("menuAbierto")) {
    header.style.background =
      " linear-gradient(rgba(0, 0, 0, .9) 0%, rgba(255,255,255,0) 100%)";
    tituloPagina.style.color = "#fff";
    header.style.height = "10rem";
  }
});

// mapa

var map = L.map("id-mapa").setView([-31.409619, -64.187965], 11);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([-31.410237, -64.199145]).addTo(map);
// .bindPopup("Aca tenes que elegir donde estan las farmacias, Hugo.")
// .openPopup();

// go up button
const goUpBtn = document.querySelector(".goTopBtn");

goUpBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
