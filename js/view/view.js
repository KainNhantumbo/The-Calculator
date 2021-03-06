export function openTabById (id) {
    const cardsTab = document.querySelector('.cards-screen');
    const viewContainer = document.querySelector('.view-screen');
    const backBtn = document.getElementById('backBtn');
    const clearBtn = document.getElementById('clear-btn');
    const tab = document.getElementById(id);

    cardsTab.classList.add('closeCardsAnimation');
    
    setTimeout(() => {
        cardsTab.classList.remove('closeCardsAnimation');
        cardsTab.setAttribute('style', 'display: none;');
        viewContainer.removeAttribute('style');
        backBtn.removeAttribute('style');
        clearBtn.removeAttribute('style');
        tab.removeAttribute('style');
        tab.classList.add('openTabAnimation');
    }, 300);
}

export function closeTab () {
    const cardsTab = document.querySelector('.cards-screen');
    const tabs = document.querySelectorAll('.modal-container');
    const viewContainer = document.querySelector('.view-screen');
    const backBtn = document.getElementById('backBtn');
    const clearBtn = document.getElementById('clear-btn');
    
    viewContainer.classList.add('closeTabAnimation');
    setTimeout(() => {
        backBtn.setAttribute('style', 'display: none;');
        clearBtn.setAttribute('style', 'display: none;');
        tabs.forEach(tab => tab.setAttribute('style', 'display: none;'));
        viewContainer.classList.remove('closeTabAnimation');
        viewContainer.setAttribute('style', 'display: none;');
        cardsTab.removeAttribute('style');
        cardsTab.classList.add('openCardsAnimation');
    }, 300);
}

// abre a barra de pesquisa ao fechar abas de cálculo
export function openSearchContainer () {
    const searchContainer = document.querySelector('.search-container');
    const searchLabel = document.getElementById('search-id');

    setTimeout(() => {
        searchContainer.removeAttribute('style');
        searchLabel.classList.add('searchShow');
    }, 300);
}

// fecha a barra de pesquisa ao abrir abas de cálculo
export function closeSearchContainer () {
    const searchContainer = document.querySelector('.search-container');
    const searchLabel = document.getElementById('search-id');

    searchLabel.classList.add('searchHide');

    setTimeout(() => {
        searchContainer.setAttribute('style', 'display: none;');
        searchLabel.classList.remove('searchHide');
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

// abre o modal de temas
export function openThemes () {
    const container = document.querySelector('.container-modal');
    const themes = document.querySelector('.themes-modal');

    container.removeAttribute('style');
    themes.removeAttribute('style');
}

// fecha o modal de temas
export function closeThemes () {
    const container = document.querySelector('.container-modal');
    const themes = document.querySelector('.themes-modal');

    themes.setAttribute('style', 'display: none;');
    container.setAttribute('style', 'display: none;');
}

// limpa o conteúdo dos inputs
export function clearInputs () {
    const inputs = document.querySelectorAll('.input-element');
    inputs.forEach(input => input.value = "");
}

// muda a vista dos cartões de grid para lista e vice-versa 
export function cardsView () {
    const toggleView = document.getElementById('cards-view');
    toggleView.classList.toggle('cards-screen_list');
}