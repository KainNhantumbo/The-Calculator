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
        tab.classList.add('openTabAnimation');
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
        cardsTab.classList.add('openCardsAnimation');
    }, 300);
}

// abre o modal de clipboard
export function openClipboard () {
    const container = document.querySelector('.container-modal');
    const clipboard = document.querySelector('.clipboard-modal');

    container.removeAttribute('style');
    clipboard.removeAttribute('style');
}

// fecha o modal de clipboard
export function closeClipboard () {
    const container = document.querySelector('.container-modal');
    const clipboard = document.querySelector('.clipboard-modal');

    clipboard.setAttribute('style', 'display: none;');
    container.setAttribute('style', 'display: none;');
}
