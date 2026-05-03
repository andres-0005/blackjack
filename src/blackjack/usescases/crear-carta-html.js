
/**
 * 
 * @param {string} carta 
 * @returns {HTMLImageElement}
 */
export const crearCartaHtml = (carta) => {
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `../cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');
        return imgCarta;
}