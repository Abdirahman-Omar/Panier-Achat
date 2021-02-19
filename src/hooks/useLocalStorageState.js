import { useEffect, useState } from 'react';

/**
 * Obtient un état React 
 * 
 * @param {*} valeurInitiale valeur quelconque avec laquelle on veut initialiser l'état 
 * @param {*} etiquetteLS chaine de caractere pour l'étiquette localStorage
 * 
 * @returns {array} tableau retourner avec useState
 */

export default function useLocalStorageState(valeurInitiale, etiquetteLS){
const [etat, setEtat] = useState(
    () => JSON.parse(window.localStorage.getItem(etiquetteLS)) || valeurInitiale
 );

 useEffect(
     ()=> window.localStorage.setItem(etiquetteLS, JSON.stringify(etat)),
     [etat, etiquetteLS]
 );

 // Retouner l'état
 return [etat, setEtat];
}