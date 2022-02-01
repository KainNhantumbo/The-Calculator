
export const mainCalculator = () => {
    const output = document.getElementById('output');
    const operands = document.querySelectorAll('[id*=button]');


    
    /* const refreshOutput = (content) => {
        output.textContent += content;
    };
    refreshOutput(); */

    /* cria um evento para cada numero/tecla */
    operands.forEach(operand => operand.addEventListener('click', function(e) {
        const output = document.getElementById('output');
         output.textContent += e.target.textContent
    }));
}

const operators = () => {
    const output = document.getElementById('output');
    const plus = document.getElementById('plus-operator');
    const multiply = document.getElementById('multiply-operator');
    const minus = document.getElementById('minus-operator');
    const divide = document.getElementById('divide-operator');

    
    const operandsCache = [];
    operandsCache.push(output.textContent)
    console.log(operandsCache)

    
    

    plus.addEventListener('click', insertContent);
    minus.addEventListener('click', insertContent);
    divide.addEventListener('click', insertContent);
    multiply.addEventListener('click', insertContent);
}

const insertContent = (e) => {
    e.target.textContent;
};