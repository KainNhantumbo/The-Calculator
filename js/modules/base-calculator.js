'use strict';

const display = document.getElementById('display');
const numeros = document.querySelectorAll('[id*=tecla]');

const atualizarDisplay = (texto) => {
    display.textContent += texto;
};
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
/* cria um evento para cada numero/tecla */
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));