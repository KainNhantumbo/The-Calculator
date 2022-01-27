'use strict';
import { log } from './modules/functions.js';
import {openView} from './view/view.js';
import {closeView} from './view/view.js';

function initializer () {
    openView();
    closeView();
}

window.addEventListener('load', initializer);