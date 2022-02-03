export const search = () => {
    const cards = document.querySelectorAll('#item-title')
    const keywords = document.getElementById('search').value;
    const cardsContainer = document.querySelectorAll('.cards-container');
    const cardTitles = new Array();

    cards.forEach(card => {
        const cardTitle = card.textContent.trim();
        cardTitles.push(cardTitle);
        /* const darto = cardTitles.match(keywords);
        console.log(darto[2]) */
        hideCards()
        showCards()
        

    });

    

    const truffy = cardTitles.filter(value => {
        
    })

    console.log(truffy)
    
    console.log(cardTitles)

    


    
}

// esconde os cartões ao pesquisar
function hideCards () {
    cardsContainer.forEach(card => {
        card.setAttribute('style', 'visibility: hidden;');
    });
}

// revela os cartões após a perquisa
function showCards () {
    if (keywords === '') {
        cardsContainer.forEach(card => {
            card.removeAttribute('style');
        });
    }
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
