// faz o tratamento de erros ou valores indeterminados no calculo
const errorHandler = (result) => {
    switch (result) {
        case undefined:
            result = '';
            break;
        case Infinity:
            result = '&infin;';
            break;
        case -Infinity:
            result = '- &infin;';
            break;
        case +Infinity:
            result = '+ &infin;';
            break;
        default:
            result;
        break;
    }

    if (isNaN(result)){
        return result = 'Digite números válidos';
    }
    
    return result;
}

// faz o calculo de equações lineares
export async function calcEqLinear () {
    try {
        let a = await document.getElementById('input-a').value;
        let b = await document.getElementById('input-b').value;
        let result = document.getElementById('result');

        if (a && b !== '') {
            const x = -b / a;
            const resolved = errorHandler(x);
            return result.innerHTML = `x = ${resolved}`;
        }
    } catch (err) {
        return console.log(err);
    }
}

// faz o calculo de equações quadráticas
export async function calcEqQuadratica () {
    try {
        let a = await document.getElementById('input-a2').value;
        let b = await document.getElementById('input-b2').value;
        let c = await document.getElementById('input-c2').value;
        let result = document.getElementById('result-2');

        if (a && b && c !== '') {
            console.log(a, b, c)
            const delta = Math.pow(b, 2) - 4 * a * c;

            if (delta < 0) {
                return result.innerHTML = `Não existem raizes reais para esta equação: ${a}x^2 + ${b}x + ${c} = 0
                <br>&bigtriangleup; = ${delta}
                `;
            }
            else if (delta == 0) {
                return result.innerHTML = `Existem raizes iguais. <br>Solução: ${delta}`;
            } 
            else if (delta >= 0) {
                const x1 = (- b + Math.sqrt(delta)) / 2 * a;
                const x2 = (- b - Math.sqrt(delta)) / 2 * a;
                const resolveX1 = errorHandler(x1);
                const resolveX2 = errorHandler(x2);

                return result.innerHTML = `
                Existem duas raizes reais diferentes. <br>
                Solução: Raíz 1: ${resolveX1}<br>Raíz 2: ${resolveX2}
                `;
            }
        }
    } catch (err) {
        return console.log(err);
    }
}

// faz o calculo de percentagens
export function calcPercents () {
    const option =  document.getElementById('percents').value;
    const xa = document.getElementById('input-percentA').value;
    const xb = document.getElementById('input-percentB').value;
    const result =  document.getElementById('result-percent');

    const a = parseFloat(xa);
    const b = parseFloat(xb);

    if (a && b !== '') {
        if (option === 'desconto') {
            const x = (a * b) / 100;
            const resolveX = errorHandler(x);
            const y = Math.abs(a - x);
            const resolveY = errorHandler(y);
            return result.innerHTML = `
            Valor a descontar: ${resolveX}<br>
            Desconto: ${resolveY}%`;
        } 
        else if (option === 'aumentar') {
            const x = (a * b) / 100;
            const resolveX = errorHandler(x);
            const y = a + x;
            const resolveY = errorHandler(y);
            return result.innerHTML = `
            Valor a aumentar: ${resolveX}<br>
            Aumento: ${resolveY}%`;
        }
        else if (option === 'simples') {
            const x = ((a * b) / 100)*100;
            const resolveX = errorHandler(x);
            return result.textContent= `
            Percentagem: ${resolveX}%`; 
        }
        return result;
    }
}

// faz o calculo da média aritmética, geométrica e harmónica
export function calcMedia () {
    const a =  document.getElementById('input-mediaA').value;
    const b =  document.getElementById('input-mediaB').value;

    if (a && b !== '') {
        // cálculo da média aritmética
        const resultAritmetica =  document.getElementById('result-mediaA');
        const mediaAritmetica = parseFloat((a + b) / 2);
        const resolvedAritmetica = errorHandler(mediaAritmetica);
        resultAritmetica.textContent = resolvedAritmetica;

        // cálculo da média geométrica
        const resultGeometrica =  document.getElementById('result-mediaB');
        const mediaGeometrica = parseFloat((Math.sqrt(a * b)).toFixed(2));
        const resolvedGeometrica = errorHandler(mediaGeometrica);
        resultGeometrica.textContent = resolvedGeometrica;

        // cálculo da média harmónica
        const resultHarmonica =  document.getElementById('result-mediaC');
        const mediaHarmonica = parseFloat((2 / ((1/a) + (1/b))).toFixed(2));
        const resolvedHarmonica = errorHandler(mediaHarmonica);
        resultHarmonica.textContent = resolvedHarmonica;
    }
}