'use strict';
import { openTabById } from './view/view.js';
import { closeTab } from './view/view.js';
import { calcEqLinear } from './modules/functions.js';
import { calcEqQuadratica } from './modules/functions.js';
import { calcPercents } from './modules/functions.js';
import { calcMedia } from './modules/functions.js';

function initializer () {
    document.getElementById('backBtn').addEventListener('click', e => closeTab());

    // abre a aba de cálculo de média
    document.getElementById('calc-media').addEventListener('click', e => openTabById('algebra-media'));
    // adiciona eventos nos inputs 
    document.getElementById('algebra-media').addEventListener('keyup', e => {
        const event = e.target.tagName;
        if (event === 'INPUT')
        return calcPercents();
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