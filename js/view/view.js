export function openTabById (id) {
    const cardsTab = document.querySelector('.cards-screen');
    const viewContainer = document.querySelector('.view-screen');
    const backBtn = document.getElementById('backBtn');
    const tab = document.getElementById(id);
    
    cardsTab.setAttribute('style', 'display: none;');
    viewContainer.removeAttribute('style');
    backBtn.removeAttribute('style');
    tab.removeAttribute('style');
}

export function closeTab () {
    const cardsTab = document.querySelector('.cards-screen');
    const tabs = document.querySelectorAll('.modal-container');
    const viewContainer = document.querySelector('.view-screen');
    const backBtn = document.getElementById('backBtn');

    cardsTab.removeAttribute('style');
    backBtn.setAttribute('style', 'display: none;');
    tabs.forEach(tab => tab.setAttribute('style', 'display: none;'));
    viewContainer.setAttribute('style', 'display: none;');
}