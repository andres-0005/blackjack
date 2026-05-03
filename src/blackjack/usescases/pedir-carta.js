
/**
 * obtiene la ultima carta del mazo 
 * @param {Array<string>} deck 
 * @returns {string} retorna la carta
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) throw new Error('No hay cartas en el deck');
    const carta = deck.pop();
    return carta;
}