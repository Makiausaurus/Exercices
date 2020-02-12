var x;
var y;
var image = "";

function cube(x) { // Calcule le cube d'une valeur entrée lors de l'appel de la fonction
    cube = x * x * x;
    document.write("Le cube de " + x + " est égale à " + cube + ".");
    return cube;
}

function produit(x, y) { // Calcule le produit des deux valeurs entrées lors de l'appel de la fonction
    produit = x * y;
    document.write("\nLe produit de " + x + " et " + y + " est : " + produit + ".");
    return produit;
}

function afficheImg(image) { // Appelle une image dans l'html, utilisation de \" pour la source de l'image
    document.write("\n<img src =\"" + image + "\">")
}

//Appel des fonctions

cube(5);
produit(6, 4);
afficheImg("assets/papillon.jpg");