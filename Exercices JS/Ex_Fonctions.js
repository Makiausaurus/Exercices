/* Exercice 1
Créer les 2 fonctions suivantes :
 produit(x, y) qui retourne le produit des 2 variables x, y passées en paramètre.
 afficheImg(image) qui affiche l’image passée en paramètre. */


var x;
var y;
var image = "";

function cube(x) { // Calcule le cube d'une valeur entrée lors de l'appel de la fonction
    cube = x * x * x;
    document.write("<p>Le cube de " + x + " est égale à " + cube + ".</p>"); // <p> pour le retour à la ligne car \n ne fonctionne pas dans un document.write
    return cube;
}

function produit(x, y) { // Calcule le produit des deux valeurs entrées lors de l'appel de la fonction
    produit = x * y;
    document.write("<p>Le produit de " + x + " et " + y + " est : " + produit +
        ". </p>");
    return produit;
}

function afficheImg(image) { // Appelle une image dans l'html, utilisation de \" pour la source de l'image
    document.write("<img src =\"" + image + "\">")
}

//Appel des fonctions

cube(5);
produit(6, 4);
afficheImg("assets/papillon.jpg");

/* Exercice 2 - Compter le nombre de lettres
Ecrivez une fonction qui prend deux paramètres :
 phrase de type string
 lettre de type string
La fonction compte le nombre de fois ou lettre apparaît dans phrase */

var phrase;
var lettre;
var compteur = 0;

function letterInPhrase(phrase, lettre) {
    for (i = 0; i < phrase.length; i++) { // i s'incrémente pour chaque lettre présente dans la phrase, mais ne dépassera pas le nombre de lettre présente
        if (phrase[i] == lettre) { // i sert d'index pour vérifier chaque lettre une par une
            compteur++; // incrémente aussi le compteur qui ne dépassera donc jamais le nombre de lettre dans la phrase non plus
        }
    }
    console.log("La lettre '" + lettre + "' est présente " + compteur +
        " fois dans '" + phrase + "'");
    return compteur;
}

// 1ère manière d'appeler la fonction
letterInPhrase("Salut comment ça va ?", "a"); // en intégrant la phrase et la lettre en tant qu'argument.


// 2ème manière
var phrase2 = "Je suis en formation Techniques de Base Développeur Web à l'AFPA et c'est super génial !";
var lettre2 = "i";

letterInPhrase(phrase2, lettre2) // en déclarant les variables en tant que chaîne et en les appelant dans l'argument.

//3ème manière - par prompt
var phraseAsk = prompt("Entrez une phrase :");
var lettreAsk = prompt("Entrez une lettre présente dans la phrase pour en connaître le nombre d'itérations :");

/* Exercice 3 - Menu
A partir du menu affiché à l’écran
14
Vous exécuterez, par les 3 premières options, les exercices déjà réalisés, appelés sous forme de fonction.
L’option 4 est une généralisation de la recherche du nombre de voyelles dans un mot : elle permet de
rechercher la présence de n’importe quel caractère dans une chaîne.
La recherche de voyelles dans une chaîne constitue une surcharge de cette fonction, dans la mesure
où les caractères à rechercher seront fournis sous forme de chaîne. */
var menu = "";

function afficherMenu() {
    menu = prompt("1. Multiples \n2. Somme et Moyenne" +
        "\n3. Recherche du nombre de lettres \n4. Recherche du nombre des" +
        "caractères suivants \nEntrez votre option :");
    if (menu == "1") {
        mult();
    } else if (menu == "2") {
        sumAvrg();
    } else if (menu == "3") {
        letterInPhrase(phraseAsk, lettreAsk);
    }
}

afficherMenu();


//fonction pour affiche la table de multiplication de n jusqu'à x
function mult() {
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
}

//fonction pour calculer un somme d'entier et leur moyenne
function sumAvrg() {
    var total = 0,
        compteur = 0,
        moyenne = null,
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
    return total;
}

//fonction pour demander une phrase et une lettre pour donner le nombre d'itérations de la lettre
var phrase;
var lettre;
var compteur = 0;

function letterInPhrase(phrase, lettre) {
    for (i = 0; i < phrase.length; i++) { // i s'incrémente pour chaque lettre présente dans la phrase, mais ne dépassera pas le nombre de lettre présente
        if (phrase[i] == lettre) { // i sert d'index pour vérifier chaque lettre une par une
            compteur++; // incrémente aussi le compteur qui ne dépassera donc jamais le nombre de lettre dans la phrase non plus
        }
    }
    console.log("La lettre '" + lettre + "' est présente " + compteur +
        " fois dans '" + phrase + "'");
    return compteur;
}