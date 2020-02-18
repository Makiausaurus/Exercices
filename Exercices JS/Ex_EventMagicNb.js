var magic = parseInt(Math.random() * 100)
console.log(magic);

// function verif() {
document.getElementById("button1").addEventListener("click", () => {
    var input = document.getElementById("textBox1").value;

    do {
        if (input == "") {
            alert("Veuillez remplir le champ.")
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