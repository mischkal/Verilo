document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".kontakt_Formular");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Verhindert das Neuladen der Seite

    successMessage.style.display = "block"; // Nachricht einblenden
    form.reset(); // Formular zurücksetzen (optional)

    // Nach 20 Sekunden wieder ausblenden
    setTimeout(function () {
      successMessage.style.display = "none";
    }, 20000);
  });
});
