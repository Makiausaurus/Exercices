/* Exercice 3 - Menu
A partir du menu affiché à l’écran
14
Vous exécuterez, par les 3 premières options, les exercices déjà réalisés, appelés sous forme de fonction.
L’option 4 est une généralisation de la recherche du nombre de voyelles dans un mot : elle permet de
rechercher la présence de n’importe quel caractère dans une chaîne.
La recherche de voyelles dans une chaîne constitue une surcharge de cette fonction, dans la mesure
où les caractères à rechercher seront fournis sous forme de chaîne. */



function afficherMenu() {
    var menu = "";

    menu = prompt("1. Multiples \n2. Somme et Moyenne" +
        "\n3. Recherche du nombre de lettres \n4. Recherche du nombre des" +
        " caractères suivants \nEntrez votre option :");
    if (menu == "1") {
        mult();
    } else if (menu == "2") {
        sumAvrg();
    } else if (menu == "3") {
        letterInPhrase();
    } else if (menu == "4") {
        strTok("Gaulthier;Guérin;80000;Amiens", ";", 2)
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
    return total;
}

//fonction pour calculer un somme d'entier et leur moyenne
function sumAvrg() {
    var total = 0;
    var compteur = 0;
    var moyenne = null;
    var entier = null;

    while (entier != 0) {

        var entier = parseInt(prompt("Saisir un nombre entier"));
        total += entier;
        if (entier == "0") {
            break;
        } else {
            compteur++;
        }
    } // fin while

    // sortie de boucle puis calcul
    moyenne = total / (compteur);
    console.log(total, (compteur));
    console.log("Moyenne : " + total + "/" + (compteur) + " = " + moyenne);
}

//fonction pour donner le nombre d'itérations d'une lettre dans une phrase


function letterInPhrase() {

    var phrase = "";
    var lettre = "";
    var compteur = 0;
    var i;
    phrase = prompt("Entrez une phrase :").toLowerCase();
    lettre = prompt("Entrez une lettre présente dans la phrase pour en connaître le nombre d'itérations :");
    for (i = 0; i < phrase.length; i++) { // i s'incrémente pour chaque lettre présente dans la phrase, mais ne dépassera pas le nombre de lettre présente
        if (phrase[i] == lettre) { // i sert d'index pour vérifier chaque lettre une par une
            compteur++; // incrémente aussi le compteur qui ne dépassera donc jamais le nombre de lettre dans la phrase non plus
        }
    }
    console.log("La lettre '" + lettre + "' est présente " + compteur +
        " fois dans '" + phrase + "'");
}

//fonction pour donner la position d'un mot dans une liste


function strTok(str1, str2, n) {
    var liste;

    liste = str1.split(str2);
    console.log(liste[n - 1]);
}