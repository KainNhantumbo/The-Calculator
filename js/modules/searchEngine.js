export const search = async () => {
    const cards = document.querySelectorAll('#item-title');

    function findIn (card) {
        const keywords = document.getElementById('search').value;
        const titles = card.textContent.trim();
        
        if (titles.includes(keywords)) {
            console.log(titles)
        }
    }

    cards.forEach(card => findIn(card));
}