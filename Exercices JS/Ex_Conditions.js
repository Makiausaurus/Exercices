//Exercice 0
//Exemple 1
var temp = 39;
if (temp > 38) {
    alert("Le patient à de la fièvre");
}

//Exemple 2
var temp = 41;
var tens = 25;

if (temp > 41 && tens > 25) {
    alert("Le patient va perdre patience");
}

//Exemple 3
var patient = "oui";

if (patient != "oui") {
    alert("Éconduire l'olibrius");
}

//Exemple 4
var temp = 42;
var tens = 24;
var pouls = 181;

if (temp > 42 || (tens < 25 && pouls > 180)); {
    alert("Prévenir la famille");
}

//Exemple 5
var temps = 40;
var tens = 25;

if (temp > 40 || tens >= 25) {
    alert("Hospitaliser le patient");
}

//Exemple 6
var patient = 0;
var pouls = 0;

if (patient == 0 && pouls == 0) {
    alert("Appeler le curé");
}

//Exercice 1

var n = prompt("Entrez un nombre :");
n = n % 2;
if (n != 0) {
    alert("Nombre impair");
} else {
    alert("Nombre pair");
}

//Exercice 2
var age = prompt("Entre votre année de naissance : ");
age = 2020 - age;
alert("Vous avez " + age + " ans révolu.");

//Exercice 3
var n1 = 0;
var n2 = 0;
var n = 0;
n1 = parseInt(prompt("Entrez un nombre :")); //nombre
var op = prompt("Entrez un opérateur (+ , - , * , /) :"); //string
n2 = parseInt(prompt("Entrez un deuxième nombre :")); //nombre

switch (op) {
    case "+":
        n = n1 + n2;
        alert("Le résultat est : " + n);
        break;

    case "-":
        n = n1 - n2;
        alert("Le résultat est : " + n);
        break;

    case "*":
        n = n1 * n2;
        alert("Le résultat est : " + n);
        break;

    case "/":
        n = n1 / n2;
        alert("Le résultat est : " + n);
        break;
    default:
        alert("Opération invalide.")
}
// if (op == "+" || op == "-" || op == "*" || op == "/") {
//     if (op == "+") {
//         n = n1 + n2;
//         alert("Le résultat est : " + n);
//     }
//     if (op == "-") {
//         alert("Le résultat est : " + (n1 -= n2));

//     }
//     if (op == "*") {
//         alert("Le résultat est : " + (n1 *= n2));
//     }
//     if (op == "/") {
//         alert("Le résultat est : " + (n1 /= n2));
//     }
// } else {
//     alert("Opération non valide : opérateur incorrect.");
// }

//Exercice 4

var single;
var married;
var child;
var nbChild = 0;
var salary;
var participation = 0;

if (married = confirm("Êtes-vous en couple ?") == true) {
    participation += 25;
} else {
    participation += 20;
}

if (child = confirm("Avez-vous des enfants ?") == true) {
    nbChild = parseInt(prompt("Combien avez-vous d'enfants ?"));
    participation += nbChild * 10;
}

if (salaire = confirm("Votre salaire est-il inférieur à 1200e ?") == true) {
    participation += 10;
}

if (participation > 50) {
    participation = 50;
}

alert("Votre employeur participera à vos repas à hauteur de " + participation + "%.");