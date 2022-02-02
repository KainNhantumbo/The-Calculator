export const search = () => {
    const cards = document.querySelectorAll('#item-title')
    const keywords = document.getElementById('search').value;
    const cardTitles = new Array();

    cards.forEach(card => {
        const cardTitle = card.textContent.trim();
        cardTitles.push(cardTitle);
        /* const darto = cardTitles.match(keywords);
        console.log(darto[2]) */

    });
    
    console.log(cardTitles)

    


    
}
/* 
function collectData (card) {
    
    const cardTitles = card.textContent.trim();
    const darto = cardTitles;

    console.log(cardTitles)

    let arrayCard = [];
    arrayCard.push(cardTitles);
    return arrayCard;
    
    
} */
