let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
    e.preventDefault(); // empêche l'envoi de formulaire si un champ est vide
})