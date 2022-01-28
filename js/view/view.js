export function openTabById (id) {
    const cardsTab = document.querySelector('.cards-screen');
    const viewContainer = document.querySelector('.view-screen');
    const backBtn = document.getElementById('backBtn');
    const tab = document.getElementById(id);

    cardsTab.classList.add('closeCardsAnimation');
    setTimeout(() => {
        cardsTab.classList.remove('closeCardsAnimation');
        cardsTab.setAttribute('style', 'display: none;');
        viewContainer.removeAttribute('style');
        backBtn.removeAttribute('style');
        tab.removeAttribute('style');
    }, 300);
}

export function closeTab () {
    const cardsTab = document.querySelector('.cards-screen');
    const tabs = document.querySelectorAll('.modal-container');
    const viewContainer = document.querySelector('.view-screen');
    const backBtn = document.getElementById('backBtn');
    
    viewContainer.classList.add('closeTabAnimation');
    setTimeout(() => {
        backBtn.setAttribute('style', 'display: none;');
        tabs.forEach(tab => tab.setAttribute('style', 'display: none;'));
        viewContainer.classList.remove('closeTabAnimation');
        viewContainer.setAttribute('style', 'display: none;');
        cardsTab.removeAttribute('style');
    }, 300);
}

   