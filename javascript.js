
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll(".topnav a");

  navLinks.forEach(link => {
      if (link.href === window.location.href) {
          link.classList.add("active"); // Aktív osztály hozzáadása az aktuális linkhez
      } else {
          link.classList.remove("active"); // Eltávolítja az aktív osztályt más linkekről
      }
  });
})
