var magic = parseInt(Math.random() * 100);
console.log(magic);

// function verif() {
document.getElementById("button1").addEventListener("click", () => {
    var input = document.getElementById("textBox1").value;
    var filtre = new RegExp("^[1-9][0-9]?$|^100$");
    var resultat = filtre.test(input);
    console.log(resultat);
    do {
        if (resultat == false) {
            alert("Veuillez entrer seulement un chiffre entre 1 et 100.");
            break;
        } else if (input == "") {
            alert("Veuillez remplir le champ.");
            break;
        } else if (input == magic) {
            alert("Bravo !");
            location.reload(true);
            break;
        } else if (input < magic) {
            alert("Plus haut !");
            break;
        } else if (input > magic) {
            alert("Plus bas !");
            break;
        }
    } while (input != magic)
})