/*
Exercice - Objets Natifs
Ecrivez un programme permettant de saisir différentes valeurs numérique (avec l'instruction window.prompt), ces valeurs seront rangées dans un tableau. La saisie s'arrête quand l'utilisateur entre
la valeur 0.
A la fin de la saisie, votre programme doit afficher le nombre de valeurs saisies, la somme et la
moyenne
*/

var valInput = [];
var sum = 0;
var med = 0;
var input;



// for (i=0; i != "0"; i++) { // premier test mais pas d'idée pour entrer dans la boucle
//     valInput[i] = parseInt(window.prompt("Entrez les valeurs à entrer dans" +
//     " le tableau. \n(Entrez 0 pour arrêter la saisie)" ));
//     sum+=valInput[i];
// }

do { // deuxième test mais pas moyen d'arrêter la boucle à moins que 0 ne soit entré en premier // isNaN et var input idée Anastasiia
    input = parseInt(window.prompt("Entrez les valeurs à entrer dans" +
        " le tableau. \n(Entrez 0 pour arrêter la saisie)"));
    if (!isNaN(input)) {
        valInput.push(input);
    }
    sum += input;
    console.log(sum);
} while (input != 0)
let temp = valInput.pop();
console.log(valInput);
med = sum / valInput.length;

alert("Vous avez entré " + valInput.length + " valeurs." +
    "\nLeur somme est de " + sum + " et leur moyenne est " + med + ".");