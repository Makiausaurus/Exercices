//Exercice 0
/*var patient;
var temperature;
var tension;
var pouls;
patient = confirm("La personne est-elle un patient ?");
if (patient == false) {
    alert("Éconduire l'olibrius.")
}
do {
    if (patient == true) {
        temperature = parseInt(prompt("Entrez la température du patient :"));
        if (temperature < 38) {
            alert("Éconduire l'olibrius");
            break;
        } else {
            tension = parseInt(prompt("Entrez la tension du patient"));
        }
        if (temperature > 38 && temperature < 40) {
            alert("Le patient à de la fièvre");
            if (temperature > 40 || tension >= 25) {
                alert("Il faut hospitaliser le patient.");
                if (temperature >= 41 && temperature <= 42 && tension > 25) {
                    alert("Le patient va perdre patience.");
                    pouls = parseInt(prompt("Quel est le pouls du patient ?"));
                    if (temperature > 42 || (tension < 25 && pouls > 180)) {
                        alert("Il faut prévenir la famille");
                        if (pouls == 0) {
                            alert("C'est l'heure d'appeler le curé.");
                            break;
                        }
                    }
                }
            }
        }
    }
} while (patient != false); */ //mauvais, voir plus tard

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