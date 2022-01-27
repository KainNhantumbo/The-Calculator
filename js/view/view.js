import { log } from "../modules/functions.js";

export function openView () {
    const cardBtn = document.getElementById('eq-linear');
    
    cardBtn.addEventListener('click', () => {
        document.querySelector('.cards-screen').classList.toggle('hide-cards');
        document.querySelectorAll('.cards-container').forEach(item => item.classList.toggle('hide-cards'));
        document.querySelector('.view-screen').classList.toggle('hide-items');
        document.querySelector('.modal-container').classList.toggle('hide-items');
        log('me clicou')
    });
}

export function closeView () {
    const backBtn = document.getElementById('backBtn');

    backBtn.addEventListener('click', () => {
        document.querySelector('.cards-screen').classList.toggle('hide-cards');
        document.querySelectorAll('.cards-container').forEach(item => item.classList.toggle('hide-cards'));
        document.querySelector('.view-screen').classList.toggle('hide-items');
        document.querySelector('.modal-container').classList.toggle('hide-items');
        log('me clicou')
    });
}