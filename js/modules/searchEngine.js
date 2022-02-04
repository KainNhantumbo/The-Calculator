export const search = () => {
    const keywords = document.getElementById('search').value;
    const cardsContainer = document.querySelectorAll('.cards-container');

    cardsContainer.forEach(card => {
        const searchTerm = keywords.trim().toLowerCase();
        const cardTitle = card.textContent.trim().toLowerCase();

        if (cardTitle.indexOf(searchTerm) == -1) {
            hideCards(card);
        } else {
            showCards(card);
        }
    });
}

// esconde os cartões ao pesquisar
function hideCards (card) {
    card.setAttribute('style', 'display: none;');
}

// revela os cartões após a perquisa
function showCards (card) {
    const keywords = document.getElementById('search').value;

    if (keywords == '') return card.removeAttribute('style');
}
