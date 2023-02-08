/**
 * Jeu du nombre mystère
 * @author  Mahir Demirci
 * @version 1.0
 * @since   2023-02-08 (date de création)
 */

'use strict';

/**
 * Fonction qui retourne un nombre aléatoire compris entre min et max
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

function tireNombre(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(tireNombre(1, 100));
let nbMystere = tireNombre(1, 100);
alert(nbMystere);
let nbEssais = 0;
let reponse;

do {
    reponse = parseInt(prompt("Devinez un nombre entre 1 et 100 :"));
    tries++;
    if (reponse > nbMystere) {
        alert("Trop grand ! Essayez à nouveau.");
    } else if (reponse < nbMystere) {
        alert("Trop petit ! Essayez à nouveau.");
    }

if (reponse === nbMystere) {
    alert("Bravo, vous avez trouvé le nombre en " + tries + " essais !");
} else {
    alert("Désolé, vous avez épuisé tous vos essais. Le nombre était " + nbMystere + ".");
}


