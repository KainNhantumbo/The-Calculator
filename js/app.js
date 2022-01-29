'use strict';
import { openTabById } from './view/view.js';
import { closeTab } from './view/view.js';
import { calcEqLinear } from './modules/functions.js';

function initializer () {
    document.getElementById('backBtn').addEventListener('click', e => closeTab());

    document.getElementById('eq-linear').addEventListener('click', e => openTabById('algebra-linear'));
    document.getElementById('algebra-linear').addEventListener('keyup', e => calcEqLinear());
    
    document.getElementById('eq-quadratica').addEventListener('click', e => openTabById('algebra-quadratica'));
    document.getElementById('eq-quadratica').addEventListener('keyup', e => calcEqLinear());
}

window.addEventListener('load', initializer);