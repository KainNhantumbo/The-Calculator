'use strict';
import { openTabById } from './view/view.js';
import { closeTab } from './view/view.js';

function initializer () {
  document.getElementById('eq-linear').addEventListener('click', e => openTabById('algebra-linear'));
  document.getElementById('backBtn').addEventListener('click', e => closeTab());
}

window.addEventListener('load', initializer);