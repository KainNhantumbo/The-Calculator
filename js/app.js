'use strict';
import { log } from './modules/functions.js';
import {openView} from './modules/functions.js';

function initializer () {
    openView();
}

window.addEventListener('load', initializer);