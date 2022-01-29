'use strict';
import { openTabById } from './view/view.js';
import { closeTab } from './view/view.js';
import { calcEqLinear } from './modules/functions.js';
import { calcEqQuadratica } from './modules/functions.js';

function initializer () {
    document.getElementById('backBtn').addEventListener('click', e => closeTab());

    // abre a aba de cálculo de equação linear e
    // adiciona eventos nos inputs 
    document.getElementById('eq-linear').addEventListener('click', e => openTabById('algebra-linear'));
    document.getElementById('algebra-linear').addEventListener('keyup', e => {
        const event = e.target.tagName;
        if (event === 'INPUT')
        return calcEqLinear();
    });

    // abre a aba de cálculo de equação quadrática e
    // adiciona eventos nos inputs 
    document.getElementById('eq-quadratica').addEventListener('click', e => openTabById('algebra-quadratica'));
    document.getElementById('algebra-quadratica').addEventListener('keyup', e => {
        const event = e.target.tagName;
        if (event === 'INPUT')
        return calcEqQuadratica();
    });
}

window.addEventListener('load', initializer);