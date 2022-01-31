'use strict';
import './modules/base-calculator.js';
import { openTabById } from './view/view.js';
import { closeTab } from './view/view.js';
import { openClipboard } from './view/view.js';
import { closeClipboard } from './view/view.js';
import { clearInputs } from './view/view.js';
import { cardsView} from './view/view.js';
import { calcEqLinear } from './modules/functions.js';
import { calcEqQuadratica } from './modules/functions.js';
import { calcPercents } from './modules/functions.js';
import { calcMedia } from './modules/functions.js';

function initializer () {
    /* ===================Features====================== */
    // limpa o conteúdo dos inputs
    document.getElementById('clear-btn').addEventListener('click', e => clearInputs());

    // muda a vista dos cartões de grid para lista e vice-versa 
    document.getElementById('toggleViewBtn').addEventListener('click', e => cardsView());

    // fecha a aba de cálculo ativa  e volta para área principal
    // limpa os imputs  antes de fechar
    document.getElementById('backBtn').addEventListener('click', e => {closeTab(), clearInputs()});

    /* ===================Modals====================== */
    // abre o modal de clipboard
    document.getElementById('clipboard-btn').addEventListener('click', e => openClipboard());
    // fecha o modal de clipboard
    document.getElementById('close-clipboard').addEventListener('click', e => closeClipboard());

    /* ===================Tabs====================== */

    // abre a aba da calculadora
    document.getElementById('calculator').addEventListener('click', e => openTabById('calculator-tab'));
    

    // abre a aba de cálculo de média
    document.getElementById('calc-media').addEventListener('click', e => openTabById('algebra-media'));
    // adiciona eventos nos inputs 
    document.getElementById('algebra-media').addEventListener('keyup', e => {
        const event = e.target.tagName;
        if (event === 'INPUT')
        return calcMedia();
    });

    // abre a aba de cálculo de porcentagens
    document.getElementById('calc-porcentagem').addEventListener('click', e => openTabById('algebra-porcentagem'));
    // adiciona eventos nos inputs 
    document.getElementById('algebra-porcentagem').addEventListener('keyup', e => {
        const event = e.target.tagName;
        if (event === 'INPUT')
        return calcPercents();
    });

    // abre a aba de cálculo de equação linear
    document.getElementById('eq-linear').addEventListener('click', e => openTabById('algebra-linear'));
    // adiciona eventos nos inputs 
    document.getElementById('algebra-linear').addEventListener('keyup', e => {
        const event = e.target.tagName;
        if (event === 'INPUT')
        return calcEqLinear();
    });

    // abre a aba de cálculo de equação quadrática
    document.getElementById('eq-quadratica').addEventListener('click', e => openTabById('algebra-quadratica'));
    // adiciona eventos nos inputs 
    document.getElementById('algebra-quadratica').addEventListener('keyup', e => {
        const event = e.target.tagName;
        if (event === 'INPUT')
        return calcEqQuadratica();
    });
}

window.addEventListener('load', initializer);