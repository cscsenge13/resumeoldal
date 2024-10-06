
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


 // Az API hívása fetch segítségével
 function fetchRandomUser() {
  fetch('https://randomuser.me/api/')
      .then(response => response.json())  // A válasz JSON formátumban
      .then(data => {
          const user = data.results[0]; // Az első felhasználó adatai
          displayUser(user); // Megjelenítjük az adatokat
      })
      .catch(error => {
          console.error('Hiba történt az API hívás során:', error);
      });
}

// Felhasználói adatok megjelenítése
function displayUser(user) {
  const userContainer = document.getElementById('user-container');
  userContainer.innerHTML = `
      <div class="user-card">
          <img src="${user.picture.large}" alt="Felhasználó képe">
          <h3>${user.name.first} ${user.name.last}</h3>
          <p>Nem: ${user.gender}</p>
          <p>Email: ${user.email}</p>
          <p>Ország: ${user.location.country}</p>
      </div>
  `;
}

// Oldal betöltésekor véletlenszerű felhasználó lekérése
window.onload = fetchRandomUser;