myVar = "Bonjour";
window.alert(myVar);
var lastName = window.prompt("Saisissez votre nom");
var name = window.prompt("Saisissez votre prénom");
if (window.confirm("Êtes-vous un homme ?") == true) {
    window.alert(myVar + " Monsieur " + lastName + " " + name + "\nBienvenue sur notre site web !");
} else {
    window.alert(myVar + " Madame " + lastName + " " + name + "\nBienvenue sur notre site web !");
}