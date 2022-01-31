
export const mainCalculator = () => {
    const output = document.getElementById('output');
    const numbers = document.querySelectorAll('[id*=button]');

    
    const insertNumber = (e) => {
        e.target.textContent;
    };
    
    /* const refreshOutput = (content) => {
        output.textContent += content;
    };
    refreshOutput(); */

    /* cria um evento para cada numero/tecla */
    numbers.forEach(number => number.addEventListener('click', e => {
        const output = document.getElementById('output');
         output.textContent += e.target.textContent
    }));
}

