/*
Exercice 1
Ecrivez un programme permettant de créer un tableau, dont la taille est saisie au clavier.
Ensuite l'utilisateur doit rentrer les différentes valeurs du tableau.
Puis votre programme doit afficher le contenu du tableau.
*/

var n = parseInt(prompt("Saisir taille tableau"));
var tableau = [n]; // taille du tableau définie par l'utilisateur
var i = 0;

while (i < n) {
    tableau[i] = prompt("nom de la case"); // Saisie des données jusqu'à atteindre la taille max définie
    i++;
}
i = 0;
while (i < n) {
    console.log(tableau[i]); // affiche les entrées une par une 
    i++;
}

/*
Exercice 2
Créer le programme qui fournira un menu permettant d’obtenir les fonctionnalités suivantes à partir
d’un tableau à une dimension :
 Affichage du contenu de tous les postes du tableau,
 Affichage du contenu d’un poste dont l’index est saisi au clavier,
 Affichage du maximum et de la moyenne des postes du tableau
Ce programme sera structuré de la manière suivante :
 une fonction GetInteger pour lire un entier au clavier,
 une fonction InitTab pour créer et initialiser l’instance de tableau : le nombre de postes souhaité sera entré au clavier,
 une fonction SaisieTab pour permettre la saisie des différents postes du tableau,
 une fonction AfficheTab pour afficher tous les postes du tableau,
 une fonction RechercheTab pour afficher le contenu d’un poste de tableau dont le rang est
saisi au clavier
 une fonction InfoTab qui affichera le maximum et la moyenne des postes.
Les fonctions seront appelées successivement.
*/

var tableau;
var tabSize;
var fullTab;
var menu;
var i;
var n;
var x;
var max;
var tot;

function getInteger(x) { // sert dans le menu pour exécuter la fonction voulue
    var x = parseInt(prompt("1. Affichage du contenu de tout les postes du tableau " +
        "\n2. Affichage du contenu d'un poste dont l'index est saisi au clavier" +
        "\n3. Affichage du maximum et de la moyenne des postes du tableau" +
        "\n \nEntrez votre option :"));
    return x;
}

function iniTab() { //initialise le tableau et sa taille
    tabSize = parseInt(prompt("Entrez un nombre pour déterminer la taille" +
        " du tableau"));
    tableau = Array(tabSize);
    return tableau;
}

function saisieTab(tableau) {
    console.log(tableau.length);
    for (i = 0; i < tableau.length; i++) {
        n = parseInt(prompt("Entrez une valeur pour la case n°" + (i + 1)));
        tableau[i] = n;
        console.log(tableau);
    }
    return tableau;
}

function dispTab(tableau) { // Affiche toutes les cases du tableau
    fullTab = 0;
    while (fullTab < tableau.length) {
        console.log(tableau[fullTab]);
        fullTab++;
    }
}

function srcTab(tableau) { // Affiche la valeur de la case voulue
    i = parseInt(prompt("Choisissez le numéro de la case du tableau" +
        " dont vous voulez connaître la valeur :"));
    console.log(tableau[(i - 1)]);
}

function maxSum(tableau) {
    i = 0;
    max = 0;
    tot = 0;
    while (i < tableau.length) {
        tot += tableau[i]; // ajoute au total la valeur de la case
        if (max < tableau[i]); // à chaque fois que la valeur de la case dépasse le max, 
        max = tableau[i]; // max est remplacée par la nouvelle valeur
        i++;
    }
    console.log("La valeur la plus haute est : " + max +
        "\n La moyenne des valeurs est de : " + (tot / i))
}

function afficherMenu() { // menu 
    menu = getInteger(x);
    if (menu == 1) {
        dispTab(tableau);
    } else if (menu == 2) {
        srcTab(tableau);
    } else if (menu == 3) {
        maxSum(tableau);
    }
}

iniTab();
saisieTab(tableau);
afficherMenu();

/* 
Exercice 3 : Tri d’un tableau
Ecrire le programme qui réalise le tri à bulles.
*/
//script tri à bulle from waytolearnx
/*
function sort(tab){
    var changed;
    do{
        changed = false;
        for(var i=0; i < tab.length-1; i++) {
            if(tab[i] > tab[i+1]) {
                var tmp = tab[i];
                tab[i] = tab[i+1];
                tab[i+1] = tmp;
                changed = true;
            }
        }
    } while(changed);
}
var tab = [5, 8, 11, 6, 1, 9, 3];
sort(tab);
console.log(tab);
*/

function bubbleSort(tabNoTri) { // Idée Anastasiia et Aaron
    var j;
    for (i = 0; i < tabNoTri.length; i++) {
        for (j = 0; j < tabNoTri.length - i - 1; j++) {
            if (tabNoTri[j] > tabNoTri[j + 1]) {
                let temp = tabNoTri[j];
                tabNoTri[j] = tabNoTri[j + 1];
                tabNoTri[j + 1] = temp;
            }
        }
    }
    console.log("sorted:" + tabNoTri)
}
let array2 = [25, 65, 23, 1, 50, 15, 10, 59];
bubbleSort(array2);
console.log(array2);