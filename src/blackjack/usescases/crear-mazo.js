
import _ from 'underscore';


/**
 * exporta un mazo
 * @param {Array<string>} tipos Ej: ['C','D','H','S']
 * @param {Array<string>} especiales Ej: ['A','J','Q','K']
 * @returns {Array<string>}
 */
export const crearDeck = (tipos, especiales) => {

    if (!tipos || tipos.length === 0) throw new Error('tipos de carta es obligatorio')
    if (!tipos || tipos.length === 0) throw new Error('tipos de carta especiales es obligatorio')
    
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipos ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipos ) {
        for( let esp of especiales ) { 
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );

    return deck;
}