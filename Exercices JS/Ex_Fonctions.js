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
    document.write("<p>Le produit de " + x + " et " + y + " est : " + produit + ". </p>");
    return produit;
}

function afficheImg(image) { // Appelle une image dans l'html, utilisation de \" pour la source de l'image
    document.write("<img src =\"" + image + "\">")
}

//Appel des fonctions

cube(5);
produit(6, 4);
afficheImg("assets/papillon.jpg");