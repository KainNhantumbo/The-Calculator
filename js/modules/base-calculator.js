
export const mainCalculator = () => {
    const output = document.getElementById('output');
    const operands = document.querySelectorAll('[id*=button]');


    
    /* const refreshOutput = (content) => {
        output.textContent += content;
    };
    refreshOutput(); */
    operators()

    /* cria um evento para cada numero/tecla */
    operands.forEach(operand => operand.addEventListener('click', function(e) {
        const output = document.getElementById('output');
        output.textContent += e.target.textContent;
    }));
}

// coloca eventos nos operadores
const operators = () => {
    const output = document.getElementById('output');
    const plus = document.getElementById('plus-operator');
    const multiply = document.getElementById('multiply-operator');
    const minus = document.getElementById('minus-operator');
    const divide = document.getElementById('divide-operator');
    const mod = document.getElementById('mod-operator');
    const invert = document.getElementById('invert');
    const decimal = document.getElementById('decimal');
    const equal = document.getElementById('equal');
    const backspace = document.getElementById('backspace')ç
    const clearOutput = document.getElementById('clear-output');

    
    const operandsCache = [];
    operandsCache.push(output.textContent)
    console.log(operandsCache)



    
    

    plus.addEventListener('click', insertToOutput);
    minus.addEventListener('click', insertToOutput);
    multiply.addEventListener('click', insertToOutput);
    divide.addEventListener('click', insertToOutput);
    mod.addEventListener('click', insertToOutput);
}

// coloca os itens no monitor
const insertToOutput = (e) => {
    const output = document.getElementById('output');
    return output.textContent += e.target.textContent;
};