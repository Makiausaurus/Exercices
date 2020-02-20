console.log("Table de multiplication par 5");
console.log("=============================");

var i;
var resultat;

for (i = 0; i <= 10; i++) {
    resultat = 36 * i;

    console.log("5 * " + i + " = " + resultat);
}

console.log("fin de la boucle");

/* Exercice 1 - Saisie
Créer une page HTML qui demande à l'utilisateur un prénom.
La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide.
Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis. */

var compteur = 1;
var lstPrenoms = "";

do {
    var prenom = window.prompt("Saisissez le prénom n°" + compteur + "\n ou cliquez sur Annuler pour arrêter la saisie");
    console.log(prenom);

    if (prenom == null || prenom == "") {
        break;
    }
    compteur++;
    if (lstPrenoms == "") {
        lstPrenoms += (prenom);
        continue;
    }
    lstPrenoms += (", " + prenom);
} while (prenom != "" && prenom != null)

console.log(compteur - 1);
alert("Vous avez saisi " + (compteur - 1) + " prénom(s) :\n " + lstPrenoms);

/* Exercice 2 - Entiers inférieurs à N
Ecrivez un programme qui affiche les nombres inférieurs à N. */

var i = 0;
var n = parseInt(prompt("Saisir un nombre"));

for (i = n; i != 0; i--) {
    console.log(i);
}

/* Exercice 3 - Somme d'un intervalle
Ecrire un programme qui saisit deux nombres n1 et n2 et qui calcule ensuite la somme des entiers de n1 à n2.*/
var n1 = 0;
var n2 = 0;
var total = 0;

n1 = parseInt(prompt("Entrez un premier nombre :"));
n2 = parseInt(prompt("Entrez un deuxième nombre :"));

for (i = n1; i <= n2; i++) {
    total = total + i;
}

console.log("Total = " + total);

/* Exercice 4 - Moyenne
Ecrire un programme qui saisit des entiers et en affiche la somme et la moyenne (on arrête la saisie avec la valeur 0).*/

var total = 0;
compteur = 0;
moyenne = null;
entier = null;

while (entier != 0) {
    total += entier;
    compteur++;
    var entier = parseInt(prompt("Saisir un nombre entier"));
} // fin while

// sortie de boucle puis calcul
moyenne = total / (compteur - 1);
console.log(total, (compteur - 1));
alert("Moyenne : " + total + "/" + (compteur - 1) + " = " + moyenne);

/* Exercice 5 - Multiples
Ecrire un programme qui calcule les N premiers multiples d'un nombre entier X, N et X étant entrés au clavier.

Exemple pour N=5 et X=7 :

1 x 7 = 7
2 x 7 = 14
3 x 7 = 21
4 x 7 = 28
5 x 7 = 35
Il est demandé de choisir la structure répétitive (for, while, do...while) la mieux appropriée au problème. */

var x = 0;
var n = 0;
var total = 0;
var i = 1;

n = parseInt(prompt("Multiplier jusqu'à fois :"));
x = parseInt(prompt("Le nombre :"));

for (i = 1; i <= n; i++) {
    total = i * x;
    console.log(i + "x" + x + "=" + total);
}

/* Exercice 6 - Nombre de voyelles.
Ecrire le programme qui compte le nombre de voyelles d’un mot saisi au clavier, en utilisant :

myVar.length : retourne le nombre de lettres de la chaîne myVar.
myVar.substr(p,n) : extrait d'une chaîne donnée une sous-chaîne de n caractères à partir de la position p (attention, en Javascript, le 1er caractère se trouve à la position 0)
myVar.indexOf(chaine) : retourne le rang de la première occurrence de chaîne dans la variable myVar donnée (si non trouvé : -1). */

var mot = "";
var voyelles = 0;
var i = 0;

mot = prompt.toLowerCase("Entrez un mot");

for (i = 0; i <= mot.length; i++) {
    switch (mot[i]) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "y":
            voyelles++
            console.log(voyelles);
            break;
        default:
            "";
    }
}
console.log("Le nombre de voyelle du mot '" + mot + "' est de : " + voyelles + ".");

/*Exercice 7 - Un nombre est-il premier
Ecrivez un programme qui permet de tester si un nombre est premier.*/

var n = 0;
var i = 1
var compteur = 0;

n = prompt("Entrez un nombre : ");

for (i = 1; i <= n; i++) {
    if (n % i == 0) {
        compteur += 1;
    }
}
if (compteur == 2) {
    alert("Ceci est un nombre premier.");
} else {
    alert("Ceci n'est pas un nombre premier.");
}

/* Exercice 8 - Nombre magique
Ecrire un programme qui met en œuvre le jeu du nombre magique :

L'ordinateur choisit un nombre aléatoire
L'utilisateur doit trouver ce nombre.
A chaque fois que l'utilisateur saisit une valeur, il reçoit une indication lui indiquant plus petit ou plus grand.
Vous aurez besoin de générer un nombre aléatoire avec la fonction random de l'objet Math :

var magic = parseInt(Math.random()*100); */

var magic = parseInt(Math.random() * 1000);
var compteur = 10;

do {
    console.log(magic);
    console.log(compteur);
    var userNb = parseInt(prompt("Devinez la valeur choisie par l'ordinateur " +
        "(entre 1 et 1000)."));
    compteur -= 1;
    if (compteur == 0) {
        alert("Perdu ! La bonne valeur valeur était : " + magic);
        break;
    } else if (userNb > magic && compteur >= 1) {
        alert("Plus bas ! \nIl vous reste " + compteur + " essais." +
            "\nVotre dernière valeur était : " + userNb);
    } else if (userNb < magic && compteur >= 1) {
        alert("Plus haut !\nIl vous reste " + compteur + " essais." +
            "\nVotre dernière valeur était : " + userNb);
    } else if (userNb == magic && compteur >= 1) {
        alert("Bravo !");
    }
}
while (userNb != magic && compteur > 0);

// Autre méthode 

var magic = parseInt(Math.random() * 1000);
var compteur;
var userNb = 0;
for (compteur = 11; compteur > 0;) {
    userNb = parseInt(prompt("Devinez la valeur choisie par l'ordinateur" +
        "(entre 1 et 1000)."));
    if (userNb != "" && userNb != null) {
        compteur -= 1;
        console.log(magic);
        if (userNb > magic && compteur > 0) {
            alert("Plus bas ! \nIl vous reste " + compteur + " essais." +
                "\nVotre dernière valeur était : " + userNb);
        } else if (userNb < magic && compteur > 0) {
            alert("Plus haut !\nIl vous reste " + compteur + " essais." +
                "\nVotre dernière valeur était: " + userNb);
        } else if (userNb == magic) {
            alert("Bravo !");
            compteur = 0;
        } else if (compteur == 0) {
            alert("perdu ! la bonne valeur étais " + magic);
        }
    } else {
        break;
    }
}