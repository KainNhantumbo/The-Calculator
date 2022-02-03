export const mainCalculator = () => {
    const output = document.getElementById('output');

    const operandsCache = [];
    operandsCache.push(output.textContent)
    console.log(operandsCache)
    operatorsAndOperands();
}

// coloca os itens no monitor
const insertToOutput = (e) => {
    const output = document.getElementById('output');
    return output.textContent += e.target.textContent;
};

// limpa o monitor
const outputClear = () => {
    const output = document.getElementById('output');
    return output.textContent = '';
};

// deleta apenas um caractere do display (backspace)
const outputBackspace = () => {
    const output = document.getElementById('output');

    let outputData = output.textContent;
    const tempArray = outputData.slice(0, outputData.length - 1)
    outputData = '';
    return output.textContent = tempArray;
};

// calcula usando o mod operator
const modOperator = () => {
    const output = document.getElementById('output');

    let outputData = parseFloat(output.textContent);
    const tempOperands = (outputData / 100).toExponential(3);

    return output.textContent = tempOperands;
}

// inverte o sinal dos operandos no output
const signalInverter = () => {
    const output = document.getElementById('output');

    let outputData = parseFloat(output.textContent);
    const tempOperands = (outputData) * (-1);

    return output.textContent = tempOperands;
}

// coloca eventos nos operadores e insere no monitor
const operatorsAndOperands = () => {
    const plus = document.getElementById('plus-operator');
    const multiply = document.getElementById('multiply-operator');
    const minus = document.getElementById('minus-operator');
    const divide = document.getElementById('divide-operator');
    const mod = document.getElementById('mod-operator');
    const invert = document.getElementById('invert');
    const decimal = document.getElementById('decimal');
    const equal = document.getElementById('equal');
    const backspace = document.getElementById('backspace');
    const clearOutput = document.getElementById('clear-output');
    const clearOutputByBottomBtn = document.getElementById('clear-btn');

    // pega todas as teclas (números)
    const operands = document.querySelectorAll('[id*=button]');

    // cria um evento para cada numero/tecla 
    operands.forEach(operand => operand.addEventListener('click', insertToOutput));

    // cria um evento para cada tecla e insere no monitor
    plus.addEventListener('click', insertToOutput);
    minus.addEventListener('click', insertToOutput);
    multiply.addEventListener('click', insertToOutput);
    divide.addEventListener('click', insertToOutput);
    decimal.addEventListener('click', insertToOutput);

    // usa o operador mod sobre os operandos no output
    mod.addEventListener('click', modOperator);

    // inverte o sinal dos operandos no output
    invert.addEventListener('click', signalInverter);

    // executa o cálculo
    equal.addEventListener('click', insertToOutput);

    // limpa o output
    clearOutput.addEventListener('click', outputClear);
    
    // limpa o output pelo botão 'limpar campos'
    clearOutputByBottomBtn.addEventListener('click', outputClear);

    // elimina o último caractere a direita do output
    backspace.addEventListener('click', outputBackspace);
}